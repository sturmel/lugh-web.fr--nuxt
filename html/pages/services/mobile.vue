<template>
    <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
      <NuxtLayout name="main" @scrollTo="scrollToSection">
  
        <LazySectionHeroShot class="mb-10" titleText="L'expérience mobile au service de votre audience :"
          bottomLineText="Conception d'applications intuitives pour Ios et Android"
          subtitleText="Offrez à vos utilisateurs une expérience unique et engageante sur tous les supports."
          imageUrl="/images/pages/mobile.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
          serviceButtonText="Découvrez mes autres services" imageColorBgClass="bg-egyptian-blue-500" @scrollTo="scrollToSection" />

          <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Analyse, stratégie mobile et cahier des charges : je définis le futur de votre application"
        subtitleText="Je construis la vision claire de votre application mobile." :text="[
          'Je commence par une analyse approfondie de votre idée d\'application, en définissant ses objectifs, les fonctionnalités clés, votre public cible et la stratégie mobile globale. Cette étape est essentielle pour poser des bases solides.',
          'Les conclusions de cette analyse sont ensuite formalisées dans un cahier des charges précis. Ce document détaillera l\'ensemble des fonctionnalités, l\'architecture de l\'application, les aspects de design souhaités et les spécifications techniques pour les plateformes ios et android.'
        ]" imageUrl="/images/pages/note.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-emerald-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Conception ux/ui : une expérience utilisateur intuitive et agréable"
        subtitleText="Je crée une interface pensée pour vos utilisateurs." :text="[
          'En me basant sur le cahier des charges, je conçois l\'expérience utilisateur (ux) et l\'interface utilisateur (ui) de votre application. Des wireframes et des prototypes interactifs peuvent être réalisés pour tester l\'ergonomie et recueillir vos premiers retours.',
          'L\'objectif est de créer une application intuitive, facile à utiliser et esthétiquement plaisante, qui réponde aux besoins de vos utilisateurs et reflète l\'image de votre marque.'
        ]" imageUrl="/images/pages/design.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-tangerine-500" />

        <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Développement multiplateforme : je concrétise votre application"
        subtitleText="Un développement adapté à vos besoins et à votre budget." :text="[
          'Selon les spécifications du cahier des charges et vos préférences, je procède au développement de votre application. Cela peut inclure un développement multiplateforme (pour ios et android simultanément).',
          'Je veille à la performance, à la stabilité et à la sécurité de l\'application tout au long du processus de développement, en respectant scrupuleusement les directives définies.'
        ]" imageUrl="/images/pages/code.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        imageColorBgClass="bg-egyptian-blue-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Publication sur les stores et suivi : votre application est disponible, mon support continue."
        subtitleText="Lancement réussi et accompagnement pour le succès de votre application." :text="[
          'Je vous accompagne dans le processus de publication de votre application sur l\'app store et google play. Je m\'assure que toutes les étapes sont correctement suivies pour un lancement réussi.',
          'Je peux également vous proposer des services de maintenance, de mises à jour et de support technique pour assurer le bon fonctionnement et l\'évolution de votre application dans le temps.'
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
  title: 'Lugh Web - Développement d\'applications mobiles sur mesure',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Conception et développement d'applications mobiles intuitives et performantes pour iOS et Android." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "développement application mobile, application ios, application android, développement mobile sur mesure" },
    { property: "og:title", content: "Lugh Web - Développement d'applications mobiles sur mesure" },
    { property: "og:description", content: "Conception et développement d'applications mobiles intuitives et performantes pour iOS et Android." },
    { property: "og:image", content: websiteUrl + "/images/lugh-web__link.jpg" },
    { property: "og:url", content: websiteUrl + "/services/mobile" }, 
    { property: "og:type", content: "website" }, 
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Développement d'applications mobiles sur mesure" },
    { property: "twitter:description", content: "Conception et développement d'applications mobiles intuitives et performantes pour iOS et Android." },
    { property: "twitter:image", content: websiteUrl + "/images/lugh-web__link.jpg" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/mobile" }],
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