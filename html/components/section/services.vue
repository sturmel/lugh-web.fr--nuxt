<template>
    <section class="services flex flex-col items-center justify-center w-full h-full" ref="servicesSection">
        <div class="flex flex-col items-center justify-center w-full h-full mb-14">
            <h2
                class="services__title text-egyptian-blue-500 blur-[15px] opacity-0 text-4xl sm:text-5xl m-auto ml-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Expertise digitale à votre service : innovons ensemble !</h2>
            <p
                class="services__bottomline text-tangerine-500 blur-[15px] opacity-0 text-3xl sm:text-4xl  m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Propulsez votre activité avec nos services digitaux et construisons votre succès en ligne.</p>
        </div>
        <div class="services__container flex flex-wrap max-w-[1300px] justify-center items-center">
            <div class="services__container__card opacity-0 py-10 md:px-16">
                <LazyCardService title="Sites web"
                    text="Création de sites web sur mesure, vitrines ou e-commerce, pour une présence en ligne qui reflète votre identité et booste votre activité."
                    imageUrl="/images/pages/webSite.webp" redirectUrl="/services/website" hexColor="#bbb5bd" />
            </div>
            <div class="services__container__card opacity-0 py-10 md:px-16">
                <LazyCardService title="Applications mobiles"
                    text="Conception d'applications mobiles intuitives et performantes, pour iOS et Android, offrant une expérience utilisateur optimale sur tous les supports."
                    imageUrl="/images/pages/mobile.webp" redirectUrl="/services/mobile" hexColor="#2ecc71" />
            </div>
            <div class="services__container__card opacity-0 py-10 md:px-16">
                <LazyCardService title="Outils Métiers"
                    text="Développement d'outils métiers personnalisés pour optimiser vos processus internes, gagner en efficacité et faciliter la gestion de vos données."
                    imageUrl="/images/pages/tool.webp" redirectUrl="/services/tool" hexColor="#3f75f3" />
            </div>
            <div class="services__container__card opacity-0 py-10 md:px-16">
                <LazyCardService title="Intégration d'automatisation"
                    text="Automatisation de tâches répétitives pour gagner du temps et réduire les erreurs, en intégrant des solutions sur mesure à votre système d'information."
                    imageUrl="/images/pages/automatisation.webp" redirectUrl="/services/automatisation"
                    hexColor="#3f75f3" />
            </div>
            <div class="services__container__card opacity-0 py-10 md:px-16">
                <LazyCardService title="Audit de sécurité"
                    text="Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles."
                    imageUrl="/images/pages/audit.webp" redirectUrl="/services/audit" hexColor="#bbb5bd" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { showBlurText, hideBlurText, showCardEl, hideCardEl } from '~/composables/animations';
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const servicesSection = ref<HTMLElement | null>(null);


const sectionVisibilityTrigger = () => {
    if (!servicesSection.value) return;
    const cards = servicesSection.value.querySelectorAll(".services__container__card");
    const title = servicesSection.value.querySelector(".services__title");
    const bottomline = servicesSection.value.querySelector(".services__bottomline");

    cards.forEach((card) => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                showCardEl(card as HTMLElement);
            },
            onEnterBack: () => {
                showCardEl(card as HTMLElement);
            },
            onLeave: () => {
                hideCardEl(card as HTMLElement);
            },
            onLeaveBack: () => {
                hideCardEl(card as HTMLElement);
            }
        });
    });

    ScrollTrigger.create({
        trigger: title,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            showBlurText(title as HTMLElement, 0);
        },
        onEnterBack: () => {
            showBlurText(title as HTMLElement, 0);
        },
        onLeave: () => {
            hideBlurText(title as HTMLElement, 0);
        },
        onLeaveBack: () => {
            hideBlurText(title as HTMLElement, 0);

        }
    });

    ScrollTrigger.create({
        trigger: bottomline,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            showBlurText(bottomline as HTMLElement, 0);
        },
        onEnterBack: () => {
            showBlurText(bottomline as HTMLElement, 0);
        },
        onLeave: () => {
            hideBlurText(bottomline as HTMLElement, 0);
        },
        onLeaveBack: () => {
            hideBlurText(bottomline as HTMLElement, 0);
        }
    });
};

const setCardPositionAndOpacity = () => {
    if (!servicesSection.value) return;
    const cards = servicesSection.value.querySelectorAll(".services__container__card");
    cards.forEach((card) => {
        gsap.set(card, {
            opacity: 0,
            translateY: "25%",
            scale: 1.05,
        });
    });
};

onMounted(() => {
    setCardPositionAndOpacity();
    sectionVisibilityTrigger();
});
</script>