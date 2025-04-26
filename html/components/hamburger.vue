<template>
    <svg class="hamburger_menu ham hamRotate ham4 w-16 h-16" :class="position" viewBox="0 0 100 100">
        <path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
        <path class="line middle" d="m 70,50 h -40" />
        <path class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
    </svg>
</template>

<style scoped>
.ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 300ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.hamRotate.open {
    transform: rotate(45deg);
}

.line {
    fill: none;
    transition: stroke-dasharray 300ms, stroke-dashoffset 300ms;
    stroke: #000;
    stroke-width: 2.5;
    stroke-linecap: round;
}

.ham4 .top {
    stroke-dasharray: 40 121;
}

.ham4 .bottom {
    stroke-dasharray: 40 121;
}

.ham4.open .top {
    stroke-dashoffset: -68px;
}

.ham4.open .bottom {
    stroke-dashoffset: -68px;
}
</style>

<script setup lang="ts">
const props = defineProps({
    position: {
        type: String,
        required: true,
        default: "close",
    }
});
</script>