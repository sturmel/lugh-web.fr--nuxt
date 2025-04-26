<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main" @scrollTo="scrollToSection">
      <LazySectionHeroShot class="mb-10" titleText="Une vitrine en ligne à votre image :"
        bottomLineText="Création de sites web sur mesure, e-commerce et vitrines"
        subtitleText="Propulsez votre activité avec un site web professionnel, optimisé pour la performance et le référencement."
        imageUrl="/images/pages/webSite--reverse.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        serviceButtonText="Découvrez mes autres services" imageColorBgClass="bg-egyptian-blue-500"
        @scrollTo="scrollToSection" />

        <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Échange, découverte et cahier des charges : poser les fondations de votre projet web"
        subtitleText="Clarifions ensemble vos objectifs et définissons précisément votre futur site." :text="[
          'Nous débutons par une discussion approfondie pour comprendre votre vision, vos objectifs commerciaux, votre public cible et l\'identité unique de votre marque. Cette phase d\'écoute active est cruciale pour saisir toutes les nuances de votre projet web.',
          'Suite à cet échange, nous formalisons ensemble un cahier des charges détaillé. Ce document essentiel précisera les fonctionnalités attendues, l\'arborescence du site, les aspects graphiques souhaités et toutes les spécifications techniques nécessaires au bon déroulement du projet. Il servira de référence tout au long de notre collaboration.'
        ]" imageUrl="/images/pages/note.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-emerald-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Conception et maquettes : visualiser votre présence en ligne"
        subtitleText="Donnons forme à vos idées grâce à des maquettes claires et intuitives." :text="[
          'Sur base du cahier des charges validé, je crée des maquettes fonctionnelles pour définir la structure et l\'ergonomie de votre site. Ensuite, des maquettes graphiques vous offriront un aperçu visuel précis du design final, en accord avec votre identité visuelle.',
          'Vos retours sont primordiaux à cette étape. Nous itérons ensemble sur les maquettes jusqu\'à obtenir une validation complète, garantissant ainsi que la conception répond parfaitement à vos attentes avant de passer au développement.'
        ]" imageUrl="/images/pages/design.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-tangerine-500" />

        <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Développement sur mesure : donner vie à votre site web"
        subtitleText="Un développement performant et optimisé pour une expérience utilisateur optimale." :text="[
          'Une fois la conception approuvée, je procède au développement de votre site web en utilisant les technologies les plus adaptées à vos besoins. Je m\'assure de la performance du site, de son adaptabilité à tous les écrans (responsive design) et de son optimisation pour les moteurs de recherche (seo).',
          'Le développement est réalisé en constante référence au cahier des charges, garantissant que chaque fonctionnalité et chaque aspect technique sont mis en œuvre conformément à nos accords initiaux.'
        ]" imageUrl="/images/pages/code.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-egyptian-blue-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Lancement et suivi : votre site est en ligne, l'assistance continue."
        subtitleText="Mise en ligne réussie et support pour l'évolution de votre présence web." :text="[
          'Après votre validation, je procède au lancement de votre site web. Je m\'assure que tout se déroule correctement et que votre présence en ligne est effective.',
          'Je peux également vous proposer des services de maintenance, de mises à jour et de support technique pour garantir la pérennité et l\'évolution de votre site web dans le temps. Je reste à votre disposition pour toute question ou besoin futur.'
        ]" imageUrl="/images/pages/presentation.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-emerald-500" />


      <LazySectionServices class="mb-10" id="services" />
      <LazySectionContact class="mb-10" id="contact" />

    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();
const config = useRuntimeConfig();
const websiteUrl = config.public.websiteUrl;

useHead({
  title: 'Lugh Web - Création de sites web sur mesure',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Création de sites web vitrines et e-commerce sur mesure pour une présence en ligne professionnelle et performante." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "création site web, site vitrine, site e-commerce, développement web sur mesure" },
    { property: "og:title", content: "Lugh Web - Création de sites web sur mesure" },
    { property: "og:description", content: "Création de sites web vitrines et e-commerce sur mesure pour une présence en ligne professionnelle et performante." },
    { property: "og:image", content: websiteUrl + "/images/lugh-web__link.jpg" },
    { property: "og:url", content: websiteUrl + "/services/website" }, 
    { property: "og:type", content: "website" }, 
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Création de sites web sur mesure" },
    { property: "twitter:description", content: "Création de sites web vitrines et e-commerce sur mesure pour une présence en ligne professionnelle et performante." },
    { property: "twitter:image", content: websiteUrl + "/images/lugh-web__link.jpg" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/website" }],
});

const scrollToSection = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    let offsetTop = targetElement.offsetTop - 100;
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: offsetTop, autoKill: false },
      ease: "power2.inOut"
    });
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>