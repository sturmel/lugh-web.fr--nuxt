<template>
    <div class="group relative card__service w-72 h-80 bg-white border-2 rounded-xl" ref="card">
        <div class="backface-hidden w-full h-full p-4 flex flex-col items-center justify-center rounded-xl">
            <div
                class="w-24 h-24 p-2 absolute shadow-[0_0_1rem_rgba(46,204,113,0.5)] rounded-xl transition-all duration-300 m-auto group-hover:-top-[3rem] -top-[2rem] -right-[2rem] bg-white border-2 border-emerald-500 flex items-center justify-center">
                <img :src="imageUrl" :alt="imageAlt" class="m-auto object-cover" ref="img" />
            </div>
            <h3
                class="text-2xl m-auto mt-0 mb-0 ml-0 font-semibold text-tangerine-500 uppercase text-shadow-white h-16 z-10">
                {{ title }}</h3>
            <p class="text-xl m-auto mt-3 z-10"> {{ text }}</p>
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
    imageAlt: {
        type: String,
        required: true,
    },
});

const card = ref<HTMLElement | null>(null);
const img = ref<HTMLImageElement | null>(null);
const button = ref<HTMLButtonElement | null>(null);

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