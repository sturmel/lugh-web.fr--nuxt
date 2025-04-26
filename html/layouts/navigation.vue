<template>
    <nav class="navigation fixed overflow-hidden top-0 left-0 w-full h-[70px] bg-white/25 backdrop-blur-3xl border-b border-french-gray-500 shadow-[0rem_0rem_1rem_rgba(0,0,0,0.15)] z-50"
        ref="navigation">
        <div class="relative w-full flex m-auto mt-0 h-[70px] max-w-[1800px] items-center ">
            <a href="/" class="m-auto  text-2xl  text-egyptian-blue-500 ml-10 mr-0">LUGH WEB</a>
            <span class="bg-french-gray-500 w-36 h-[1px] absolute -rotate-[60deg] top-10 left-36 hidden 2xl:flex" />
            <div class="hidden 2xl:flex ml-20 m-auto">
                <a href="/services/website" class="relative m-auto text-xl text-tangerine-500 ml-10"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10">Site web</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none -z-10" />
                </a>
                <a href="/services/mobile" class="relative m-auto text-xl text-tangerine-500 ml-10"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10">Application mobile</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none -z-10" />
                </a>
                <a href="/services/tool" class="relative m-auto text-xl text-tangerine-500 ml-10"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10">Outil métier</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none -z-10" />
                </a>
                <a href="/services/automatisation" class="relative m-auto text-xl text-tangerine-500 ml-10"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10">Automatisation</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none -z-10" />
                </a>
                <a href="/services/audit" class="relative m-auto text-xl text-tangerine-500 ml-10"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10">Audit sécurité</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none -z-10" />
                </a>
            </div>
            <div class="m-auto mr-10 hidden md:flex">
                <a href="https://www.linkedin.com/in/s%C3%A9bastien-sturmel-05582917b/"
                    target="_blank" class="group flex m-auto ml-0 mr-5">
                    <Icon name="mdi:linkedin"
                        class=" text-4xl  text-french-gray-500 pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
                <a href="https://github.com/sturmel" target="_blank" class="group flex m-auto ml-0 mr-5">
                    <Icon name="mdi:github"
                        class="text-4xl  text-french-gray-500 pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
                <a href="https://www.facebook.com/Lughweb" target="_blank" class="group flex m-auto ml-0 mr-5">
                    <Icon name="mdi:facebook"
                        class=" text-4xl  text-french-gray-500 pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
            </div>
            <div class="m-auto ml-0 mr-10 2xl:mr-0 hidden md:flex">
                <ButtonOrange text="Me contacter" @click="scrollToContact" class=" m-auto ml-0 mr-5" />
            </div>
            <LazyHamburger :position="position" @click="toggleMenu" class="m-auto md:ml-0 mr-10 flex 2xl:hidden" />
        </div>
        <div class="menu  opacity-0 m-auto py-10 flex flex-col 2xl:hidden" ref="menu">
            <div
                class="relative w-3/4 max-w-80 flex flex-col m-auto border-french-gray-500 border rounded-2xl overflow-hidden bg-white/50 shadow-[0rem_0rem_1rem_rgba(0,0,0,0.15)]">
                <a href="/services/website"
                    class="relative w-3/4 text-center flex m-auto text-xl text-tangerine-500 my-2"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10 m-auto">Site web</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none z-0" />
                </a>
                <a href="/services/mobile"
                    class="relative w-3/4 text-center flex m-auto text-xl text-tangerine-500 my-2"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10 m-auto">Application mobile</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none z-0" />
                </a>
                <a href="/services/tool" class="relative w-3/4 text-center flex m-auto text-xl text-tangerine-500 my-2"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10 m-auto">Outil métier</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none z-0" />
                </a>
                <a href="/services/automatisation"
                    class="relative w-3/4 text-center flex m-auto text-xl text-tangerine-500 my-2"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10 m-auto">Automatisation</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none z-0" />
                </a>
                <a href="/services/audit" class="relative w-3/4 text-center flex m-auto text-xl text-tangerine-500 my-2"
                    @mouseenter="onMouseHoverMenuLink($event)" @mouseleave="onMouseLeaveMenuLink($event)">
                    <div class="pointer-events-none z-10 m-auto">Audit sécurité</div>
                    <span
                        class="w-0 bg-egyptian-blue-500 opacity-0 absolute h-full -skew-x-[35deg] bottom-0 -left-3 pointer-events-none z-0" />
                </a>
            </div>
            <div class="m-auto w-full mt-5 flex md:hidden">
                <ButtonOrange text="Me contacter" @click="scrollToContact" class=" m-auto w-3/4" />
            </div>
            <div class="m-auto mt-5 flex w-64">
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                    target="_blank" class="group flex m-auto">
                    <Icon name="mdi:linkedin"
                        class=" text-5xl  text-french-gray-700 pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
                <a href="https://github.com/sturmel" target="_blank" class="group flex m-auto">
                    <Icon name="mdi:github"
                        class="text-5xl  text-french-gray-700 pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
                <a href="https://www.facebook.com/Lughweb" target="_blank" class="group flex m-auto">
                    <Icon name="mdi:facebook"
                        class=" text-5xl  text-french-gray-700 pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();

const position = ref('close');
const navigation = ref(null);
const menu = ref<HTMLElement | null>(null);


const toggleMenu = () => {
    position.value = position.value === 'close' ? 'open' : 'close';
    menuVisibility(position.value);
};

const menuVisibility = (position: string) => {
    if (!navigation.value || !menu.value) return;

    const menuHeight = menu.value.offsetHeight;
    const navigationHeight = menuHeight + 70;

    if (position === 'open') {
        gsap.to(navigation.value, {
            duration: 0.5,
            height: navigationHeight + "px",
            ease: "power2.inOut",
        });

        gsap.to(menu.value, {
            duration: 0.5,
            opacity: 1,
            ease: "power2.inOut",
        });
    } else {
        gsap.to(navigation.value, {
            duration: 0.5,
            height: "70px",
            ease: "power2.inOut",
        });

        gsap.to(menu.value, {
            duration: 0.5,
            opacity: 0,
            ease: "power2.inOut",
        });
    }
};

const onMouseHoverMenuLink = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const span = target.querySelector('span') as HTMLElement;

    const spanWidth = target.offsetWidth + 24;

    if (!span) return;
    gsap.to(span, {
        duration: 0.5,
        width: spanWidth + "px",
        opacity: 1,
        ease: "power2.inOut",
    });
    gsap.to(target, {
        duration: 0.5,
        color: "#ffffff",
        ease: "power2.inOut",
    });
};

const onMouseLeaveMenuLink = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const span = target.querySelector('span') as HTMLElement;
    if (!span) return;
    gsap.to(span, {
        duration: 0.5,
        width: "0%",
        opacity: 0,
        ease: "power2.inOut",
    });
    gsap.to(target, {
        duration: 0.5,
        color: "#f97316",
        ease: "power2.inOut",
    });
};

const emit = defineEmits(['scrollTo']);
const scrollToContact = () => {
    emit('scrollTo', 'contact');
    if (window.innerWidth < 1536) {
        if (navigation.value) {
            gsap.to(navigation.value, {
                duration: 0.3,
                height: "70px",
                ease: "power2.inOut",
            });
        }
        position.value = 'close';
        menuVisibility(position.value);
    }
};

const handleResize = () => {
    if (window.innerWidth >= 1536) {
        if (navigation.value) {
            gsap.to(navigation.value, {
                duration: 0.3,
                height: "70px",
                ease: "power2.inOut",
            });
        }
        position.value = 'close';
        menuVisibility(position.value);
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>