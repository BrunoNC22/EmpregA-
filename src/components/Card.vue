<script setup lang="ts">

const cardProps = defineProps({

    title: String,
    icon: String,
    link: String,
})

</script>

<template>
    <div class="card-container">
        <img :src="cardProps.icon" :alt="cardProps.title">
    </div>
</template>

<style>
.card-container {
    background-color: var(--primary-white-color);
    filter: drop-shadow(rgb(100, 100, 100) -2px 2px 3px);
    width: 100px;
    height: 140px;
    border-radius: 10%;
}

.img{
    width: 100%;
    height: 100%;
    background-color: aqua;
}

</style>