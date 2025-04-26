<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main" @scrollTo="scrollToSection">
      <LazySectionHeroShot class="mb-10" titleText="Digitalisez votre succès :"
        bottomLineText="Sites web, applications mobiles & outils métiers sur mesure"
        subtitleText="Développons ensemble votre présence en ligne, vos outils de productivité, sécurisons votre infrastructure et automatisons vos processus."
        imageUrl="/images/pages/homeHeroShot.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        serviceButtonText="Découvrez mes services" imageColorBgClass="bg-egyptian-blue-500"
        @scrollTo="scrollToSection" />
      <LazySectionServices class="mb-10" id="services" />
      <LazySectionHomeAbout class="mb-10" imagePosition="left" titleText="Un parcours unique au service de vos projets."
        subtitleText="Une expertise complète et une approche globale pour la réussite durable de vos projets numériques."
        :text="[
          'Avec plus de 20 ans dédiés à l\'informatique et une expertise forgée dès 2010 dans le monde du Bug Bounty, la cybersécurité est au cœur de mon ADN professionnel. Ce parcours m\'a permis de comprendre les systèmes de l\'intérieur pour mieux les construire et les protéger.',
          'J\'ai mis cette expertise au service de la création web au fil de diverses expériences : d\'abord en tant que freelance, puis en agence, où j\'ai pu travailler sur une variété de projets. Mon parcours s\'est ensuite enrichi en tant que Directeur Technique (CTO), affinant ma vision stratégique et ma gestion de projets d\'envergure. Durant toutes ces étapes, mon objectif est resté constant : réaliser des sites et applications qui excellent en performance, et sécurité, afin de vous fournir des solutions numériques efficaces, durables et sécurisées.',
          'Aujourd\'hui de retour en freelance, je mets à profit cette perspective globale unique, combinant expertise technique et vision stratégique acquise, pour donner vie à des projets innovants. Cette approche complète me permet de répondre à vos besoins les plus spécifiques et d\'assurer le succès de vos projets digitaux.',
          'Prêt à discuter de votre projet ? Me contacter pour explorer comment mon expertise peut faire la différence.'
        ]" imageUrl="/images/pages/homeAbout.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-emerald-500" @scrollTo="scrollToSection"/>
      <LazySectionHomeTechnologies class="mb-10" />
      <LazySectionContact class="mb-10" id="contact" />

    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();
const config = useRuntimeConfig();
const websiteUrl = config.public.websiteUrl;

useHead({
  title: 'Lugh Web - Développement web et mobile sur mesure',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "développement web, développement mobile, audit de sécurité, automatisation de processus" },
    { property: "og:title", content: "Lugh Web - Développement web et mobile sur mesure" },
    { property: "og:description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
    { property: "og:image", content: websiteUrl + "/images/lugh-web__link.jpg" },
    { property: "og:url", content: websiteUrl }, 
    { property: "og:type", content: "website" }, 
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Développement web et mobile sur mesure" },
    { property: "twitter:description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
    { property: "twitter:image", content: websiteUrl + "/images/lugh-web__link.jpg" }
  ],
  link: [{ rel: "canonical", href: websiteUrl }],
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