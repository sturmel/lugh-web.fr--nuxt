<template>
    <section class="technologies flex flex-col items-center justify-center w-full h-full perspective-[1000px]"
        ref="technologiesSection">
        <h2
            class="technologies__title text-egyptian-blue-500 blur-[15px] opacity-0 w-full text-4xl sm:text-5xl m-auto ml-0 mb-15 font-bold text-shadow-md text-shadow-white/25">
            Un arsenal de technologies au service de vos ambitions digitales.
        </h2>
        <div class="flex flex-col items-center justify-center w-full h-full mb-14">
            <h3
                class="technologies__subtitle text-tangerine-500 blur-[15px] opacity-0 text-3xl sm:text-4xl  m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                CMS : Des fondations solides pour votre contenu</h3>
            <p class="text-xl technologies__description text-black blur-[15px] opacity-0">J'exploite des systèmes de
                gestion de contenu
                (CMS) robustes et flexibles pour créer des
                plateformes adaptées à vos besoins, de la vitrine informative à la solution e-commerce complexe, tout en
                offrant une gestion intuitive pour votre contenu.</p>
            <div class="w-full flex flex-wrap justify-center items-center m-auto mt-10">
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="WordPress" text="Le CMS le plus populaire au monde, offrant une flexibilité inégalée et
                    un vaste écosystème de thèmes et d'extensions pour tous types de sites."
                        imageUrl="/images/logo/WordPress.webp" hexColor="#0a369d" imageAlt="Logo WordPress" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Strapi" text="Un CMS headless moderne et personnalisable, idéal pour une approche
                    API-first et la diffusion de contenu sur de multiples plateformes."
                        imageUrl="/images/logo/Strapi.webp" hexColor="#0a369d" imageAlt="Logo WordPress" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Webflow" text="Une plateforme no-code/low-code puissante pour créer des sites web
                    visuellement riches et performants, avec un contrôle total sur le design."
                        imageUrl="/images/logo/Webflow.webp" hexColor="#0a369d" imageAlt="Logo WordPress" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Contentful" text="Un CMS headless de pointe, conçu pour la scalabilité et l'intégration
                    avec des architectures modernes, offrant une gestion de contenu structurée et collaborative."
                        imageUrl="/images/logo/Contentful.webp" hexColor="#0a369d" imageAlt="Logo WordPress" />
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center w-full h-full mb-14">
            <h3
                class="technologies__subtitle text-4xl text-tangerine-500 blur-[15px] opacity-0 m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Frameworks : L'Architecture de vos projets web et applications</h3>
            <p class="text-xl technologies__description text-black blur-[15px] opacity-0">Je construis des applications web et des
                interfaces utilisateur modernes et performantes
                grâce à des frameworks JavaScript et PHP éprouvés, garantissant une expérience utilisateur optimale et
                une maintenance facilitée. Mon expertise s'étend également au développement d'applications
                multiplateformes avec des outils innovants.</p>
            <div class="w-full flex flex-wrap justify-center items-center m-auto mt-10">
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Symfony" text="Un framework PHP puissant et flexible, respectant les standards de
                    l'industrie, idéal pour les projets de grande envergure et les API performantes."
                        imageUrl="/images/logo/Symfony.webp" hexColor="#0a369d" imageAlt="Logo WordPress" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Nuxt" text="Un framework Vue.js polyvalent pour créer des applications web
                    universelles (SSR, SSG, SPA) avec une excellente performance et un SEO optimisé."
                        imageUrl="/images/logo/Nuxt.webp" hexColor="#0a369d" imageAlt="Logo Nuxt" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Laravel" text="Un framework PHP élégant et robuste, privilégié pour le développement
                    d'applications web complexes et sécurisées avec une syntaxe expressive."
                        imageUrl="/images/logo/Laravel.webp" hexColor="#0a369d" imageAlt="Logo Laravel" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Flutter"
                        text="Un framework UI open-source de Google pour créer des applications magnifiques et performantes pour mobile (iOS et Android), à partir d'une seule base de code."
                        imageUrl="/images/logo/Flutter.webp" hexColor="#0a369d" imageAlt="Logo Flutter" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Astro" text="Un framework web JavaScript moderne conçu pour construire des sites web
                    rapides, axés sur le contenu, avec une architecture 'Islands'." imageUrl="/images/logo/Astro.webp"
                        hexColor="#0a369d" imageAlt="Logo Astro" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Vue.js"
                        text="Un framework UI open-source de Google pour créer des applications magnifiques et performantes pour mobile (iOS et Android), à partir d'une seule base de code."
                        imageUrl="/images/logo/VueJs.webp" hexColor="#0a369d" imageAlt="Logo VueJs" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="FlutterFlow"
                        text="Une plateforme no-code/low-code basée sur Flutter, permettant de créer rapidement des applications mobiles riches et personnalisées avec une interface visuelle intuitive."
                        imageUrl="/images/logo/FlutterFlow.webp" hexColor="#0a369d" imageAlt="Logo FlutterFlow" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Gin"
                        text="Un framework web Go léger et performant, idéal pour la construction d'APIs et de microservices rapides."
                        imageUrl="/images/logo/Gin.webp" hexColor="#0a369d" imageAlt="Logo Gin" />
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center w-full h-full mb-14">
            <h3
                class="technologies__subtitle text-4xl text-tangerine-500 blur-[15px] opacity-0 m-auto ml-0 mt-0 mb-5 font-bold text-shadow-md text-shadow-white/25">
                Langages de programmation : Le cœur de mes solutions digitales</h3>
            <p class="text-xl technologies__description text-black blur-[15px]">Ma maîtrise des langages de
                programmation
                essentiels et des systèmes de gestion de bases
                de données me permet de donner vie à vos idées et d'assurer la performance et l'évolutivité de vos
                projets.</p>
            <div class="w-full flex flex-wrap justify-center items-center m-auto mt-10">
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="PHP" text="Un langage de script côté serveur largement utilisé pour le développement
                    web, notamment avec des CMS comme WordPress et des frameworks comme Laravel et Symfony."
                        imageUrl="/images/logo/Php.webp" hexColor="#0a369d" imageAlt="Logo PHP" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="JavaScript"
                        text="Le langage incontournable du web, essentiel pour le développement front-end interactif et également utilisé côté serveur avec Node.js."
                        imageUrl="/images/logo/JavaScript.webp" hexColor="#0a369d" imageAlt="Logo JavaScript" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="TypeScript"
                        text="Un sur-ensemble typé de JavaScript qui améliore la maintenabilité et la robustesse du code, particulièrement pour les projets de grande envergure."
                        imageUrl="/images/logo/TypeScript.webp" hexColor="#0a369d" imageAlt="Logo TypeScript" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="SQL"
                        text="Un langage standard pour la gestion et la manipulation de bases de données relationnelles (comme MySQL, PostgreSQL, etc.)."
                        imageUrl="/images/logo/Sql.webp" hexColor="#0a369d" imageAlt="Logo SQL" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="GoLang"
                        text="Un langage de programmation compilé, concurrent et performant, idéal pour les applications backend, les API et les outils système."
                        imageUrl="/images/logo/GoLang.webp" hexColor="#0a369d" imageAlt="Logo GoLang" />
                </div>
                <div class="technologies__container__card p-10">
                    <LazyCardTechnologie title="Dart"
                        text="Le langage de programmation utilisé par Flutter pour la création d'applications multiplateformes."
                        imageUrl="/images/logo/Dart.webp" hexColor="#0a369d" imageAlt="Logo Dart" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {showCardEl, hideCardEl, showBlurText, hideBlurText } from '~/composables/animations';
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const technologiesSection = ref<HTMLElement | null>(null);


const cardAndTextVisibilityTrigger = () => {

    const cards = technologiesSection.value?.querySelectorAll('.technologies__container__card');
    const title = technologiesSection.value?.querySelector('.technologies__title');
    const subtitles = technologiesSection.value?.querySelectorAll('.technologies__subtitle');
    const descriptions = technologiesSection.value?.querySelectorAll('.technologies__description');

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

    subtitles?.forEach((subtitle) => {
        ScrollTrigger.create({
            trigger: subtitle,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                showBlurText(subtitle as HTMLElement, 0);
            },
            onEnterBack: () => {
                showBlurText(subtitle as HTMLElement, 0);
            },
            onLeave: () => {
                hideBlurText(subtitle as HTMLElement, 0);
            },
            onLeaveBack: () => {
                hideBlurText(subtitle as HTMLElement, 0);
            },
        });
    });

    descriptions?.forEach((description) => {
        ScrollTrigger.create({
            trigger: description,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                showBlurText(description as HTMLElement, 0);
            },
            onEnterBack: () => {
                showBlurText(description as HTMLElement, 0);
            },
            onLeave: () => {
                hideBlurText(description as HTMLElement, 0);
            },
            onLeaveBack: () => {
                hideBlurText(description as HTMLElement, 0);
            },
        });
    });

    cards?.forEach((card) => {
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
            },
        });
    });
}

const setCardPositionAndOpacity = () => {
    const cards = technologiesSection.value?.querySelectorAll('.technologies__container__card');
    if (!cards) return;
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
    cardAndTextVisibilityTrigger();
});

</script>