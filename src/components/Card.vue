<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const cardProps = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        default: '/'
    }
});

const router = useRouter();

const navigateTo = () => {
    if (cardProps.link) {
        router.push(cardProps.link);
    }
};
</script>

<template>
    <div class="card-container" @click="navigateTo">
        <img :src="cardProps.icon" :alt="cardProps.title">
        <span>{{ cardProps.title }}</span>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    background-color: var(--primary-white-color);
    

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 100px;
    height: 140px;
    border-radius: 10%;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    

    cursor: pointer;
}

.card-container:hover{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

img{
    width: 42px;
}

</style>