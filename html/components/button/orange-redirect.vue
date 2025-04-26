<template>
    <a :href="href" target="_blank"
        class="group relative flex overflow-hidden shadow-lg cursor-pointer text-white bg-tangerine-500 p-4 rounded-2xl text-lg font-bold py-3 px-6">
        <span class="absolute pointer-events-none w-0 h-full top-0 -left-5 bg-tangerine-300 z-0 skew-x-35 transition-all duration-300 ease-in-out group-hover:w-[120%] "></span>
        <p class="w-full h-full pointer-events-none text-white text-shadow-md z-10">{{ text }}</p>
    </a>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true,
        default: "test",
    },
    href: {
        type: String,
        required: true,
        default: "/",
    }
});
</script>