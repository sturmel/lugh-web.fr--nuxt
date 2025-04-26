<template>
  <div class="w-full flex flex-col items-center justify-center relative">
    <NuxtLayout name="navigation" @scrollTo="handleScrollTo" class="z-20"/>
    <NuxtParticles id="mainParticles" :options="options" class="opacity-30 z-0" />
    <div class="w-10/12 sm:w-11/12 max-w-[1400px] m-auto mt-24 mb-24 z-10 flex flex-col items-center justify-center">
      <slot :scrollTo="handleScrollTo"/>
    </div>
    <NuxtLayout name="footer" class="z-10" />
  </div>
</template>



<script setup lang="ts">
import { loadFull } from 'tsparticles'
import { tsParticles } from '@tsparticles/engine'

await loadFull(tsParticles)

const options =
{
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "transparent"
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 200
    },
    links: {
      color: '#000',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
  }
}

const emit = defineEmits(['scrollTo']);

const handleScrollTo = (targetId: string) => {
  emit('scrollTo', targetId);
};

</script>