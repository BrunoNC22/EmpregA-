<script setup lang="ts">
import Navigation from '../Navigation.vue';
import Card from './opportunities_card/Card.vue';
import { ref } from 'vue';

interface OptionsType {
    image: string,
    title: string,
    employer: string,
    date: string,
    job_hours: string,
    value: string,
    link: string
}

const options = ref<OptionsType[]>([
  { title: 'Vendedor', employer: 'C&A', image: "https://cea.vtexassets.com/arquivos/header-logo-update.png", 
    date: "", job_hours:"30h/semana", value:"1600", link: '/detail' 
  },
  
]);
</script>
<template>
  <Navigation />
  <main class="profile-main">
    <div class="title-container">
      <h1>Oportunidades</h1>
    </div>
  
    <div class="opportunities-container">
        <div class="search-box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=" "
        />
        <label for="search">Oportunidades</label>
      </div>
  
      <div class="opportunities-wrapper">
        <Card 
          v-for="(option, index) in options" 
          :key="index"
          :title="option.title" 
          :employer="option.employer"
          :image="option.image"
          :date="option.date"
          :job_hours="option.job_hours"
          :value="option.value"
          :link="option.link"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-inline: 12px; 
  
}

.title-container {
  font-size: 32px;
  margin: 24px 0;
  color: var(--primary-blue-color);
  text-align: center;
}

.opportunities-container {
  background-color: var(--primary-yellow-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 16px; 
  border-radius: 16px;
  max-width: 800px; 
 
}

.search-box {
  position: relative;
  margin-bottom: 1.25rem; /* Adiciona margem inferior */
  margin-right: 14px;
  margin-top: 8px;
}

.search-box input {
  height: 2rem;
  width: 100%;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 60px; 
  color: #333;
  background-color: #fff;
  transition: border-color 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  
}

.search-box input::placeholder {
  color: transparent;
}

.search-box label {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1rem;
  background-color: white;
  padding: 0 0.25rem;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
}

.search-box input:focus + label,
.search-box input:not(:placeholder-shown) + label {
  top: -0.55rem;
  left: 0.75rem;
  font-size: 14px; 
  background-color: transparent;
  color: #333;
}



.opportunities-wrapper {
  max-width: 800px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
}



</style>