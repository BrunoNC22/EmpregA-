<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';

const route = useRoute()
</script>
<template>
  <div class="main-frame-container">
    <div class="main-frame-header">
      <RouterLink class="back-to-menu-button" to="/home">
        <img id="main-frame-header-left-arrow" src="/assets/main-frame/Left arrow.svg" alt="Voltar para home">
        <img id="empregae-logo-curta" src="/empregae-logo.png" alt="EmpregAê logo">
      </RouterLink>
    </div>
    <h2 class="main-frame-title">{{ route.name }}</h2>
    <div class="main-frame-content">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.main-frame-container {
  box-sizing: border-box;
  background: var(--primary-background-color);
  height: 100vh;
  display: grid;
  grid-template-rows: min-content min-content auto;
  padding: 43px 36px 43px 36px;
}

.main-frame-header {
  display: flex;
  align-items: center;
}

.back-to-menu-button {
  display: flex;
  align-items: center;
}

#main-frame-header-left-arrow {
  width: 15px;
  height: 32px;
  padding: auto 0;
}

#empregae-logo-curta {
  margin-left: 14px;
  width: 51px;
  height: 49px;
}

.main-frame-title {
  font-size: 41px;
  font-weight: 800;
  color: var(--primary-blue-color);
  margin: 25px 0px;
}

.main-frame-content {
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 28px;
}
</style>