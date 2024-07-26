<script setup  lang="ts">
import { reactive, ref } from 'vue';
import LoginFormInput from './login_form/LoginFormInput.vue';

type LoginFormType = [
  username: {
    model: String,
    placeholder: 'Nome',
    type: 'text'
  },
  age: {
    model: Number | undefined,
    placeholder: 'Idade',
    type: 'number'
  },
  city: {
    model: String,
    placeholder: 'Cidade',
    type: 'text'
  },
]

const form: LoginFormType = reactive([
  {
    model: '',
    placeholder: 'Nome',
    type: 'text'
  },
  {
    model: undefined,
    placeholder: 'Idade',
    type: 'number'
  },
  {
    model: '',
    placeholder: 'Cidade',
    type: 'text'
  }
])

const handleSubmit = () => {
  console.log('Form submited')
  alert("submit buttom pressed")
}
</script>
<template>
  <div class="login-container">
    <div class="login-header">
      <img src="../../assets/empregae-text-logo.png" alt="EmpregAE logo" class="empregae-text-logo" > 
    </div>
    <form class="login-form" @submit.prevent="handleSubmit">
      <img src="../../assets/login-user-icon.svg">
      <LoginFormInput v-for="obj in form" :key="obj.placeholder" :model="obj"/>
      <button class="login-submit-buttom" type="submit" >CONFIRMAR</button>
    </form>
  </div>
</template>
<style scoped>
.login-container {
  background: var(--primary-blue-color);
  height: 100vh;
}

.login-header {
  height: 117px;
  background-color: var(--primary-white-color);
  display: grid;
  align-items: center;
  border-bottom-left-radius: 39px;
  border-bottom-right-radius: 39px;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.25);
}

.empregae-text-logo {
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(195px - 117px);
}

.login-submit-buttom {
  background-color: var(--primary-yellow-color);
  height: 55px;
  width: 220px;
  flex-grow: 0;
  margin: 15px 125px 24px 138px;
  border-radius: 6px;
  font-family: "Kanit";
  font-size: 23px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  border: none;
}
</style>