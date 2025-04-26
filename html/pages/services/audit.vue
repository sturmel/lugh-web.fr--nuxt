<template>
  <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
    <NuxtLayout name="main" @scrollTo="scrollToSection">

      <LazySectionHeroShot class="mb-10" titleText="Protégez votre actif le plus précieux : vos données"
        bottomLineText="Analyse approfondie de votre système d'information et identification des failles"
        subtitleText="Sécurisons ensemble votre infrastructure numérique contre les menaces potentielles."
        imageUrl="/images/pages/audit.webp" imageAlt="Moi version cartoon 3D entrain de sauter"
        serviceButtonText="Découvrez mes autres services" imageColorBgClass="bg-egyptian-blue-500" @scrollTo="scrollToSection" />

        <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Définition du périmètre, objectifs et cahier des charges : je clarifie les enjeux de la sécurité"
        subtitleText="Je définis les contours de votre audit de sécurité." :text="[
          'Je commence par une discussion pour comprendre vos préoccupations en matière de sécurité, identifier les actifs critiques de votre système d\'information et définir les objectifs spécifiques de l\'audit.',
          'Ces éléments sont ensuite formalisés dans un cahier des charges d\'audit. Ce document précisera le périmètre de l\'audit, les méthodologies utilisées, les livrables attendus et le calendrier des interventions.'
        ]" imageUrl="/images/pages/note.webp" imageAlt="Moi version cartoon 3D entrain de prendre des notes"
        imageColorBgClass="bg-emerald-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Collecte d'informations et analyse initiale : je comprends votre infrastructure existante"
        subtitleText="Recueil des données nécessaires à une analyse approfondie de votre sécurité." :text="[
          'Je procède à la collecte d\'informations sur votre infrastructure informatique, vos politiques de sécurité, vos procédures et les outils de sécurité en place. Cette phase d\'analyse initiale permet de dresser un état des lieux de votre sécurité actuelle.',
          'Les informations recueillies sont essentielles pour préparer les étapes d\'analyse plus approfondies et les éventuels tests techniques.'
        ]" imageUrl="/images/pages/design.webp" imageAlt="Moi version cartoon 3D entrain de créé l'architecture"
        imageColorBgClass="bg-tangerine-500" />

        <LazyContainerImageText class="mb-10" imagePosition="left"
        titleText="Analyse approfondie et tests : j'identifie les vulnérabilités potentielles"
        subtitleText="Examen minutieux de votre système pour détecter les failles de sécurité." :text="[
          'Je réalise une analyse technique détaillée de votre système d\'information, incluant potentiellement des tests d\'intrusion non destructifs pour identifier les vulnérabilités. L\'objectif est de simuler des attaques pour évaluer la résistance de votre système.',
          'Ces tests sont réalisés dans le respect des meilleures pratiques et conformément au protocole défini dans le cahier des charges.'
        ]" imageUrl="/images/pages/code.webp" imageAlt="Moi version cartoon 3D entrain de coder"
        imageColorBgClass="bg-egyptian-blue-500" />

        <LazyContainerImageText class="mb-10" imagePosition="right"
        titleText="Rapport et recommandations : je propose des actions concrètes pour renforcer votre sécurité"
        subtitleText="Un rapport détaillé et des conseils personnalisés pour améliorer votre posture de sécurité." :text="[
          'Je vous fournis un rapport détaillé des findings de l\'audit, mettant en évidence les vulnérabilités identifiées et les risques associés. Ce rapport inclut des recommandations claires et prioritaires pour renforcer la sécurité de votre système d\'information.',
          'Les recommandations sont adaptées à votre contexte spécifique et visent à améliorer durablement votre posture de sécurité.'
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
  title: 'Lugh Web - Audit de sécurité de votre système d\'information',
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: "description", content: "Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "author", content: "Lugh Web" },
    { name: "keywords", content: "audit sécurité, sécurité informatique, protection données, analyse vulnérabilités" },
    { property: "og:title", content: "Lugh Web - Audit de sécurité de votre système d'information" },
    { property: "og:description", content: "Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles." },
    { property: "og:image", content: websiteUrl + "/images/lugh-web__link.jpg" },
    { property: "og:url", content: websiteUrl + "/services/audit" }, 
    { property: "og:type", content: "website" }, 
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Lugh Web - Audit de sécurité de votre système d'information" },
    { property: "twitter:description", content: "Analyse approfondie de votre système d'information pour identifier les failles de sécurité et garantir la protection de vos données sensibles." },
    { property: "twitter:image", content: websiteUrl + "/images/lugh-web__link.jpg" }
  ],
  link: [{ rel: "canonical", href: websiteUrl + "/services/audit" }],
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