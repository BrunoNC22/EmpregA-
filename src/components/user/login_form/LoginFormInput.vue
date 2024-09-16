<script setup lang="ts">
const props = defineProps({
  model: {
    required: true,
    type: Object
  }
})
</script>
<template>
  <input class="login-form-input" :type="model.type" :placeholder="model.placeholder" v-model="props.model.model" >
</template>
<style scoped>
.login-form-input {
  background-color: var(--primary-white-color);
  height: 55px;
  width: 200px;
  flex-grow: 0;
  margin: 15px 125px 24px 138px;
  padding-left: 20px;
  border-radius: 6px;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  border: none;
}


</style>