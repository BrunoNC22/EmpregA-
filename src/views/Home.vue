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
  { title: 'Seu Perfil', icon: '/assets/icon-perfil.png', link: '/profile' },
  { title: 'Oportunidades', icon: '/assets/icon-search-y.png', link: '/oportunidades' },
  { title: 'Cursos Gratuitos', icon: '/assets/icon-student.png', link: '/cursos' },
  { title: 'Currículo', icon: '/assets/icon-curriculo.png', link: '/curriculo' },
  { title: 'Empregador', icon: '/assets/icon-empregador.png', link: '/empregador' },
  { title: 'Atendimento', icon: '/assets/icon-atendimento.png', link: '/atendimento' },
]);
</script>

<template>
  <Navigation />
  <main class="profile-container">
    <section class="section-container">
        <div class="user-hi">
            <p>Bem-vindo(a), <span>Matheus</span></p>
        </div>
        <div class="cards-wrapper">
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

<style scoped>
.profile-container {
  background-color: var(--primary-background-color);
  height: 100vh;
  padding: 32px 24px;
  display: flex;
  align-items: flex-start; 
  justify-content: center; 
}

.section-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.user-hi {
  position: absolute;
  top: 20px;
  left: 20px;
  align-self: flex-end;
}

.cards-wrapper {
  margin-top: 60px; 
  display: flex;
  justify-content: center;
  width: 100%;
}

.cards-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--primary-color-white);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-container img {
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
}

.card-container p {
  font-weight: 600;
  margin: 0;
}
</style>