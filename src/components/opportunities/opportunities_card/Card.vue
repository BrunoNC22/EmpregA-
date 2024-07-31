<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const cardProps = defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    employer: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    job_hours: {
        type: String,
        required: true
    },
    value: {
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

    <div class="card-info">
      <div class="image-container">
        <img :src="cardProps.image" :alt="cardProps.title">
      </div>

      <div class="job-information">
        <p>{{cardProps.title}}</p>
        <p>{{cardProps.employer}}</p>
        <p>{{cardProps.date}} - {{cardProps.job_hours}}</p>
      </div>

      <div class="job-value">
        <p>R$ {{cardProps.value}}</p>
      </div>

    </div>
        
  </div>
</template>

<style scoped>
.card-container {
    background-color: var(--primary-white-color);
    box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 100%;
    height: 80px;
    padding: 16px;
    border-radius: 10px;
    display: flex;
    align-content: center;
    cursor: pointer;
}

.card-container:hover{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.card-info{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    
}
.image-container{
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px; 
}

img{
    width: 60px;
}

</style>