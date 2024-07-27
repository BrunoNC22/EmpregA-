<script setup lang="ts">
import { ref } from 'vue';
import Card from '../components/Card.vue';
import Navigation from '../components/Navigation.vue';



interface OptionsType {
  title: string;
  icon: string;
  link: string;
}

const options = ref<OptionsType[]>([
  { title: 'Perfil', icon: '/assets/icon-perfil.png', link: '' },
  { title: 'Buscar', icon: '/assets/icon-search-y.png', link: '' },
  { title: 'Estudante', icon: '/assets/icon-student.png', link: '' },
  { title: 'Currículo', icon: '/assets/icon-curriculo.png', link: '' },
  { title: 'Empregador', icon: '/assets/icon-empregador.png', link: '' },
  { title: 'Atendimento', icon: '/assets/icon-atendimento.png', link: '' },
]);
</script>

<template>
  <Navigation />
  <main class="profile-container">
    <section>
      <div>
        <p>Bem-vindo(a), <span>Matheus</span></p>
      </div>
      <div>
        <div class="cards-container">
            <Card 
            v-for="(option, index) in options" 
            :key="index"
            :title="option.title" 
            :icon="option.icon" 
            :link="option.link"
            />
        </div>
      </div>
      
    </section>
  </main>
</template>

<style>
    .profile-container{
        background-color: var(--primary-background-color);
        background-color: aqua;
        height: 100vh;
        padding: 32px 24px;
        
    }

    .cards-container {
    display: grid;
    align-items: center; 
    justify-items: center; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    
}

</style>