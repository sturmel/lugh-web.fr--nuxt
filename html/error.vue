<template>
  <div class="relative flex flex-col error">
    <img src="/images/error.webp" alt="Mascote de l'agence avec panneau error"
      class="character m-auto h-full object-cover" ref="imageCharacter" />
    <h1 class="text-5xl m-auto text-red-500 font-bold">{{ error?.statusCode }}</h1>
    <p class="text-3x m-auto">{{ error?.message }}</p>
    <ButtonsOrangeRedirect text="Retourner sur l'accueil" href="/" class="about__button m-auto mt-10 " />
  </div>
</template>

<script setup lang="ts">
const error = useError();
const imageCharacter = ref<HTMLElement | null>(null);


onMounted(() => {
  if (imageCharacter.value) {
    imageCharacter.value.style.filter = 'drop-shadow(-1rem 2rem 3rem rgba(0,0,0,0.2))';
  }
});
</script>
