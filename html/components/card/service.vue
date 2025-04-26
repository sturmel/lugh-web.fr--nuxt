<template>
    <div class="relative card__service w-10/12 md:w-80 md:h-96 bg-white border-2 rounded-xl" ref="card">
        <div class="backface-hidden w-full h-full  p-4 flex flex-col items-center justify-center rounded-xl">
            <img :src="imageUrl" alt="Lugh Web Logo"
                class="m-auto absolute h-48 -top-[5rem] -right-[6rem] object-cover drop-shadow-[0rem_0rem_0.15rem_rgba(0,0,0,0.15)]"
                ref="img" />
            <h3
                class="text-2xl m-auto mt-0 mb-0 ml-0 font-semibold text-tangerine-500 uppercase text-shadow-white  h-16 z-10">
                {{ title }}</h3>
            <p class="text-xl m-auto mt-3 z-10"> {{ text }}</p>
            <ButtonBlueRedirect text="En savoir plus" :href="redirectUrl"
                class="card__service__button m-auto mt-5 md:mt-auto ml-0 mb-0 z-10 drop-shadow-[0rem_0rem_0.25rem_rgba(0,0,0,0.25)]"
                ref="button" />

        </div>
    </div>
</template>

<script setup lang="ts">
import { hexToRgb } from '@/composables/misc'
const { $gsap: gsap } = useNuxtApp();

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    hexColor: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
});

const card = ref<HTMLElement | null>(null);

const setColor = () => {
    if (!card.value) return;

    gsap.set(card.value, {
        borderColor: props.hexColor,
        boxShadow: `0rem 0rem 1rem rgba(${hexToRgb(props.hexColor)[0]}, ${hexToRgb(props.hexColor)[1]}, ${hexToRgb(props.hexColor)[2]}, 0.25)`,
    });
};

onMounted(() => {
    setColor();
});
</script>