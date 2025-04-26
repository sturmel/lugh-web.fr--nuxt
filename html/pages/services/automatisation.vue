<template>
    <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
      <NuxtLayout name="main" @scrollTo="scrollToSection">
  
        <LazySectionHeroShot class="mb-10" titleText="Gagnez du temps et réduisez les erreurs grâce à l'automatisation :"
          bottomLineText="Intégration de solutions sur mesure pour vos tâches répétitives"
          subtitleText="Automatisez vos flux de travail et concentrez-vous sur votre cœur de métier."
          imageUrl="/images/pages/automatisation.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
          serviceButtonText="Découvrez mes autres services" imageColorBgClass="bg-egyptian-blue-500" @scrollTo="scrollToSection" />

          <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Identification des tâches et cahier des charges : je cible les opportunités d'automatisation"
        subtitleText="J'identifie les processus à optimiser par l'automatisation." :text="[
          'Je commence par une analyse de vos flux de travail pour identifier les tâches répétitives, chronophages et sujettes aux erreurs qui peuvent être automatisées. Cette étape est cruciale pour maximiser le retour sur investissement de l\'automatisation.',
          'Les tâches identifiées et les objectifs d\'automatisation sont ensuite documentés dans un cahier des charges précis. Ce document détaillera les étapes à automatiser, les systèmes concernés et les gains de temps et de productivité attendus.'
        ]" imageUrl="/images/pages/note.webp" imageAlt="Moi version cartoon 3D entrain de prendre des notes"
        imageColorBgClass="bg-emerald-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Conception de la solution d'automatisation : j'imagine un flux de travail optimisé"
        subtitleText="Je crée la solution d'automatisation la plus adaptée à vos besoins." :text="[
          'Sur base du cahier des charges, je conçois la solution d\'automatisation sur mesure. Cela peut impliquer le développement de scripts, l\'intégration d\'api, l\'utilisation de plateformes d\'automatisation ou d\'autres outils spécifiques.',
          'L\'objectif est de créer un flux de travail automatisé efficace, fiable et parfaitement intégré à votre système d\'information existant.'
        ]" imageUrl="/images/pages/design.webp" imageAlt="Moi version cartoon 3D entrain de créé l'architecture"
        imageColorBgClass="bg-tangerine-500" />

        <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Implémentation et tests : je mets en place et je vérifie l'automatisation"
        subtitleText="Une implémentation rigoureuse pour une automatisation performante." :text="[
          'Je procède à l\'implémentation de la solution d\'automatisation en suivant scrupuleusement les spécifications du cahier des charges. Des tests unitaires et des tests d\'intégration sont réalisés pour s\'assurer du bon fonctionnement de chaque étape du processus automatisé.',
          'L\'objectif est de garantir que l\'automatisation fonctionne comme prévu, qu\'elle réduit les erreurs et qu\'elle vous fait gagner le temps escompté.'
        ]" imageUrl="/images/pages/code.webp" imageAlt="Moi version cartoon 3D entrain de coder"
        imageColorBgClass="bg-egyptian-blue-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Déploiement et formation : j'intègre l'automatisation à votre environnement de travail"
        subtitleText="Mise en production de l'automatisation et accompagnement de vos équipes." :text="[
          'Une fois les tests validés, la solution d\'automatisation est déployée dans votre environnement de travail. Je vous forme à l\'utilisation et à la supervision du processus automatisé. Une documentation peut également être fournie.',
          'Mon objectif est d\'assurer une intégration en douceur de l\'automatisation à vos activités quotidiennes et de permettre à vos équipes de tirer pleinement parti de ses avantages.'
        ]" imageUrl="/images/pages/presentation.webp" imageAlt="Moi version cartoon 3D entrain de présenter le résultat"
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
  title: 'Lugh Web - Intégration de solutions d\'automatisation sur mesure',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Automatisation de tâches répétitives pour gagner du temps, réduire les erreurs et optimiser votre système d'information." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "automatisation, intégration, flux de travail, efficacité, gain de temps" },
    { property: "og:title", content: "Lugh Web - Intégration de solutions d'automatisation sur mesure" },
    { property: "og:description", content: "Automatisation de tâches répétitives pour gagner du temps, réduire les erreurs et optimiser votre système d'information." },
    { property: "og:image", content: websiteUrl + "/images/lugh-web__link.jpg" },
    { property: "og:url", content: websiteUrl + "/services/automatisation" }, 
    { property: "og:type", content: "website" }, 
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Intégration de solutions d'automatisation sur mesure" },
    { property: "twitter:description", content: "Automatisation de tâches répétitives pour gagner du temps, réduire les erreurs et optimiser votre système d'information." },
    { property: "twitter:image", content: websiteUrl + "/images/lugh-web__link.jpg" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/automatisation" }],
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