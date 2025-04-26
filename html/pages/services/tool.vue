<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main" @scrollTo="scrollToSection">

      <LazySectionHeroShot class="mb-10" titleText="Optimisez vos opérations avec des outils métiers personnalisés :"
        bottomLineText="Développement de solutions logicielles pour une efficacité accrue"
        subtitleText="Simplifiez la gestion de vos données et améliorez vos processus internes sur mesure."
        imageUrl="/images/pages/tool.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        serviceButtonText="Découvrez mes autres services" imageColorBgClass="bg-egyptian-blue-500"
        @scrollTo="scrollToSection" />

      <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Analyse des besoins métiers et cahier des charges : je comprends vos défis spécifiques"
        subtitleText="J'identifie les solutions logicielles qui simplifieront votre travail." :text="[
          'Je commence par une analyse détaillée de vos processus internes, des flux de travail, des points de friction et des besoins spécifiques en matière de gestion de données et d\'automatisation. Cette compréhension approfondie est essentielle.',
          'Les conclusions de cette analyse sont formalisées dans un cahier des charges complet. Ce document précisera les fonctionnalités attendues de l\'outil, les interactions avec vos systèmes existants et les objectifs d\'efficacité visés.'
        ]" imageUrl="/images/pages/note.webp" imageAlt="Moi version cartoon 3D entrain de prendre des notes"
        imageColorBgClass="bg-emerald-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Conception fonctionnelle et technique : l'architecture de votre solution personnalisée"
        subtitleText="J'imagine l'outil qui répondra parfaitement à vos exigences." :text="[
          'Sur base du cahier des charges, je conçois l\'architecture fonctionnelle et technique de votre outil métier. Cela inclut la définition des bases de données, des interfaces utilisateur et des éventuelles intégrations avec d\'autres logiciels que vous utilisez.',
          'L\'objectif est de créer une solution robuste, évolutive et parfaitement adaptée à vos processus métier spécifiques.'
        ]" imageUrl="/images/pages/design.webp" imageAlt="Moi version cartoon 3D entrain de créé l'architecture"
        imageColorBgClass="bg-tangerine-500" />

        <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Développement personnalisé : je crée votre outil sur mesure"
        subtitleText="Un développement axé sur l'ergonomie, la performance et la sécurité." :text="[
          'Je procède ensuite au développement de votre outil métier en suivant scrupuleusement les spécifications du cahier des charges. L\'accent est mis sur la création d\'une interface utilisateur intuitive, sur la performance de l\'outil et sur la sécurité des données traitées.',
          'Le développement est réalisé en étroite collaboration avec vous pour garantir que l\'outil correspond parfaitement à vos attentes et à vos besoins opérationnels.'
        ]" imageUrl="/images/pages/code.webp" imageAlt="Moi version cartoon 3D entrain de coder"
        imageColorBgClass="bg-egyptian-blue-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Déploiement et formation : je mets en place et j'accompagne vos équipes"
        subtitleText="Installation réussie et formation pour une prise en main rapide." :text="[
          'Je procède au déploiement de l\'outil au sein de votre entreprise et assure une formation pour vos équipes afin qu\'elles puissent l\'utiliser efficacement. Une documentation utilisateur peut également être fournie.',
          'Mon objectif est de garantir une transition en douceur et une adoption rapide de l\'outil par vos collaborateurs, afin que vous puissiez bénéficier rapidement de ses avantages. Un support continu peut également être proposé.'
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
  title: 'Lugh Web - Développement d\'outils métiers personnalisés',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Développement d'outils métiers sur mesure pour optimiser vos processus internes et faciliter la gestion de vos données." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "outils métiers, développement sur mesure, optimisation processus, gestion données" },
    { property: "og:title", content: "Lugh Web - Développement d'outils métiers personnalisés" },
    { property: "og:description", content: "Développement d'outils métiers sur mesure pour optimiser vos processus internes et faciliter la gestion de vos données." },
    { property: "og:image", content: websiteUrl + "/images/lugh-web__link.jpg" },
    { property: "og:url", content: websiteUrl + "/services/tool" }, 
    { property: "og:type", content: "website" }, 
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Développement d'outils métiers personnalisés" },
    { property: "twitter:description", content: "Développement d'outils métiers sur mesure pour optimiser vos processus internes et faciliter la gestion de vos données." },
    { property: "twitter:image", content: websiteUrl + "/images/lugh-web__link.jpg" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/tool" }],
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