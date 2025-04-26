<template>
    <section class="relative flex flex-wrap perspective-[1000px] py-10" @mousemove="imageCardInteraction"
        ref="textImageContainerSection">
        <h2
            class="image_text_container__title order-1 w-full text-5xl text-egyptian-blue-500 blur-[15px] opacity-0 m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
            {{ titleText }}
        </h2>
        <p
            class="image_text_container__bottomline order-2 w-full text-tangerine-500 blur-[15px] opacity-0 text-4xl  m-auto ml-0 mt-0 mb-15 font-bold text-shadow-md text-shadow-white/25">
            {{ subtitleText }}</p>
            <p class="w-full"></p>
        <div class="image_text_container__image scale-95 opacity-0 flex w-2/3 md:w-1/2 min-w-[250px] max-w-[350px] max-h-[350px]  rounded-2xl m-auto"
            @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" ref="imageContainer"
            :class="[imageColorBgClass, imagePosition === 'left' ? 'order-3 md:order-3' : 'order-3 md:order-4']">
            <img :src="imageUrl" :alt="imageAlt" class="m-auto h-full object-cover opacity-0 scale-95"
                ref="imageCharacter" />
        </div>

        <div class="image_text_container__container__content w-full m-auto mt-10 md:mt-auto md:w-1/2 "
            :class="imagePosition === 'left' ? 'order-4 md:order-4 md:ml-auto' : 'order-4 md:order-3 md:mr-auto'">
            <div class="image_text_container__container__content__text flex flex-col w-full m-auto ml-0 mb-5 pointer-events-none"
                ref="textContent">
                <p v-for="(p, index) in text" :key="index" class="text-xl mb-5 blur-[15px] opacity-0">
                    {{ p }}
                </p>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { showBlurText, hideBlurText } from '~/composables/animations';
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

interface Position {
    height: number;
    width: number;
}

const props = defineProps({
    imagePosition: {
        type: String,
        required: true
    },
    titleText: {
        type: String,
        required: true
    },
    subtitleText: {
        type: String,
        required: true
    },
    text: {
        type: Array,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: true
    },
    imageColorBgClass: {
        type: String,
        required: true
    },
})

const isHovered = ref(false);
const textImageContainerSection = ref<HTMLElement | null>(null);
const imageContainer = ref<HTMLElement | null>(null);
const imageCharacter = ref<HTMLImageElement | null>(null);
const textContent = ref<HTMLElement | null>(null);

let positionMultiplicator = 1;
if (props.imagePosition === "right") {
    positionMultiplicator = -1;
}

let textElementHeight = 0;


const imageCardInteraction = (mouseEvent: MouseEvent) => {
    if (!isHovered.value || !imageContainer.value || !imageCharacter.value) return;

    const position: Position = {
        height: imageContainer.value.offsetHeight,
        width: imageContainer.value.offsetWidth,
    };

    const centerX = position.width / 2;
    const centerY = position.height / 2;

    const x = (mouseEvent.offsetX - centerX) / centerX;
    const y = (mouseEvent.offsetY - centerY) / centerY;

    gsap.to(imageContainer.value, {
        duration: 0.5,
        rotateY: `${x * 15}deg`,
        rotateX: `${y * 15 * -1}deg`,
        transform: `translateZ(${y * 2}rem)`,
        boxShadow: `${x * -2}rem ${y * -2}rem 1rem rgba(0, 0, 0, 0.25), ${x * 4}rem ${y * 4}rem 5rem rgba(255, 255, 255, 0.2) inset, ${x * -4}rem ${y * -4}rem 5rem rgba(0, 0, 0, 0.2) inset`,
    });
    gsap.to(imageCharacter.value, {
        duration: 0.5,
        rotateY: `${x * 15}deg`,
        rotateX: `${y * 15 * -1}deg`,
        translateZ: y * 2 + 'rem',
        translateY: `${y * 5}rem`,
        translateX: `${x * 5}rem`,
        filter: `drop-shadow(${x * -4}rem ${y * -4}rem 2rem rgba(0, 0, 0, 0.5))`,
    });
};

const onMouseEnter = () => {
    isHovered.value = true;
};

const onMouseLeave = () => {
    isHovered.value = false;

    if (!imageContainer.value || !imageCharacter.value) return;

    gsap.to(imageContainer.value, {
        duration: 0.5,
        rotateY: (10 * positionMultiplicator) + 'deg',
        rotateX: `0deg`,
        transform: `translateZ(0)`,
        boxShadow: -2 * positionMultiplicator + 'rem ' + 2 + 'rem ' + 1 + 'rem rgba(0, 0, 0, 0.1), ' + 4 * positionMultiplicator+ 'rem ' + -4 + 'rem 5rem rgba(255, 255, 255, 0.2) inset, ' + -4 * positionMultiplicator + 'rem ' + 4 + 'rem 5rem rgba(0, 0, 0, 0.2) inset',
    });
    gsap.to(imageCharacter.value, {
        duration: 0.5,
        rotateY: (10 * positionMultiplicator) + 'deg',
        rotateX: `0deg`,
        translateZ: 2 * positionMultiplicator + 'rem',
        translateY: -1 * positionMultiplicator + 'rem',
        translateX: -1 * positionMultiplicator + 'rem',
        filter: 'drop-shadow(' + -4 * positionMultiplicator + 'rem ' + 4  + 'rem 2rem rgba(0, 0, 0, 0.5))',
    });
};

const imageCardAppear = () => {
    if (!textImageContainerSection.value || !imageContainer.value) return;

    const imageCharacter = textImageContainerSection.value.querySelector(".image_text_container__image img");

    gsap.to(imageContainer.value, {
        duration: 0.5,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: () => {
            gsap.to(imageCharacter, {
                duration: 0.5,
                opacity: 1,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.to(imageCharacter, {
                        duration: 0.5,
                        rotateY: (10 * positionMultiplicator) + 'deg',
                        rotateX: `0deg`,
                        scale: 1,
                        translateZ: 2 * positionMultiplicator + 'rem',
                        translateY: -1 * positionMultiplicator + 'rem',
                        translateX: -1 * positionMultiplicator + 'rem',
                        filter: 'drop-shadow(' + -4 * positionMultiplicator + 'rem ' + 4  + 'rem 2rem rgba(0, 0, 0, 0.5))',
                    });
                    gsap.to(imageContainer.value, {
                        duration: 0.5,
                        rotateY: (10 * positionMultiplicator) + 'deg',
                        rotateX: `0deg`,
                        scale: 1,
                        transform: `translateZ(0)`,
                        boxShadow: -2 * positionMultiplicator + 'rem ' + 2 + 'rem ' + 1 + 'rem rgba(0, 0, 0, 0.1), ' + 4 * positionMultiplicator+ 'rem ' + -4 + 'rem 5rem rgba(255, 255, 255, 0.2) inset, ' + -4 * positionMultiplicator + 'rem ' + 4 + 'rem 5rem rgba(0, 0, 0, 0.2) inset',
                    });
                },
            });
        },
    });
};

const imageCardHide = () => {
    if (!textImageContainerSection.value) return;

    const imageContainer = textImageContainerSection.value.querySelector(".image_text_container__image");
    const imageCharacter = textImageContainerSection.value.querySelector(".image_text_container__image img");

    gsap.to(imageCharacter, {
        duration: 0.5,
        rotateY: `0deg`,
        rotateX: `0deg`,
        translateZ: '0rem',
        translateY: '0rem',
        translateX: '0rem',
        scale: 0.95,
        opacity: 0,
        filter: `drop-shadow(0rem 0rem 0rem rgba(0, 0, 0, 0))`,
    });
    gsap.to(imageContainer, {
        duration: 0.5,
        rotateY: `0deg`,
        rotateX: `0deg`,
        scale: 0.95,
        transform: `translateZ(0)`,
        boxShadow: `0rem 0rem 0rem rgba(0, 0, 0, 0), 0rem 0rem 0rem rgba(255, 255, 255, 0) inset, 0rem 0rem 0rem rgba(0, 0, 0, 0) inset`,
    });

};

const textScrollTrigger = (el: HTMLElement) => {
    if (!el) return;
    ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        end: 'bottom 10%',
        onEnter: () => {
            showBlurText(el as HTMLElement, 0);
        },
        onEnterBack: () => {
            showBlurText(el as HTMLElement, 0);
        },
        onLeave: () => {
            hideBlurText(el as HTMLElement, 0);
        },
        onLeaveBack: () => {
            hideBlurText(el as HTMLElement, 0);
        }
    });
}

const sectionVisibilityTrigger = () => {
    if (!textImageContainerSection.value) return;
    const imageContainer = textImageContainerSection.value.querySelector(".image_text_container__image")
    const title = textImageContainerSection.value.querySelector(".image_text_container__title");
    const bottomline = textImageContainerSection.value.querySelector(".image_text_container__bottomline");
    const textContent = textImageContainerSection.value.querySelector(".image_text_container__container__content__text");

    ScrollTrigger.create({
        trigger: imageContainer,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            imageCardAppear();
        },
        onLeave: () => {
            imageCardHide();
        },
        onEnterBack: () => {
            imageCardAppear();
        },
        onLeaveBack: () => {
            imageCardHide();
        },
    });

    textScrollTrigger(title as HTMLElement);
    textScrollTrigger(bottomline as HTMLElement);

    if (!textContent) return;
    const paragraph = textContent.querySelectorAll("p");
    paragraph.forEach((p: HTMLParagraphElement, index: number) => {
        ScrollTrigger.create({
            trigger: p,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                showBlurText(p as HTMLElement, 0 + index * 0.1);
            },
            onEnterBack: () => {
                showBlurText(p as HTMLElement, 0 + index * 0.1);
            },
            onLeave: () => {
                hideBlurText(p as HTMLElement, 0);
            },
            onLeaveBack: () => {
                hideBlurText(p as HTMLElement, 0);
            }
        });
    });
}

const setResolutionVariablesAndImageSize = () => {
    if (!textImageContainerSection.value || !imageContainer.value) return;
    if (window.innerWidth < 768) {
        imageContainer.value.style.height = "";
        imageContainer.value.style.width = "";
    } else {
        textElementHeight = (textImageContainerSection.value?.querySelector(
            ".image_text_container__container__content"
        ) as HTMLElement)?.offsetHeight || 0;
        setImageHeight();
    }
};

const setImageHeight = () => {
    if (!textImageContainerSection.value || !imageContainer.value) return;
    imageContainer.value.style.height =
        textElementHeight + 50 + "px";
    imageContainer.value.style.width =
        textElementHeight + 50 + "px";
};

onMounted(() => {
    setResolutionVariablesAndImageSize();
    window.addEventListener("resize", setResolutionVariablesAndImageSize);
    window.addEventListener("mousemove", imageCardInteraction);
    sectionVisibilityTrigger();
});
onBeforeUnmount(() => {
    window.removeEventListener("mousemove", imageCardInteraction);
    window.removeEventListener("resize", setResolutionVariablesAndImageSize);
});
</script>