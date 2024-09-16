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
        <div>
          <p id="title">{{cardProps.title}}</p>

          <div class="job-value-employer">
            <p id="employer">{{cardProps.employer}}</p>
            <p id="value">R$ {{cardProps.value}}</p>
          </div>
          
          <p id="date-hour">{{cardProps.date}} - {{cardProps.job_hours}}</p>
        </div> 
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  background-color: var(--primary-white-color);
  box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 300px;
  height: 80px;
  padding: 16px 16px;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: start;
}

.card-container:hover{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.card-info{
  display: flex;
  align-items: center;
  gap: 8px;
 
}

.job-information{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
}

#title{
  font-weight: bold;
  font-size: 20px;
}

.job-value-employer{
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 4px;
}

#date-hour{
  font-size: 12px;
  margin-top: 4px;
}

.image-container{
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px; 
}

img{
    width: 100%;
}

</style>