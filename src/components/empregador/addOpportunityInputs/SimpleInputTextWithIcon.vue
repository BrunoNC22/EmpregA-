<script setup lang="ts">
import {ErrorObject} from '@vuelidate/core'

const props = defineProps<{
  title: string,
  placeholder: string | '',
  helpText: string,
  model: number | null,
  errors: ErrorObject[],
  required: boolean | false
}>()

const emit = defineEmits(['update:model'])

// Função para limpar a string e converter para número.
// Essa função é necessária pois o retorno do input vem no formato 'R$ 000,000.00'
const cleanCurrencyString = (value: string): number => {
  if (!value) return 0
  // Remove o símbolo de moeda e separadores, mantendo apenas números e ponto decimal
  const cleanString = value.replace(/[^\d,.-]/g, '').replace(',', '.');
  
  return parseFloat(cleanString);
}

const updateModel = (newValue: string) => {
  const number = cleanCurrencyString(newValue)
  emit('update:model', number)
}
</script>
<template>
  <div class="flex flex-col gap-2">
    <label :for="`currency${title}`">
      {{ title }}
      <b v-if="required" style="color: red;" >*</b>
    </label>
    <InputNumber v-bind:model-value="model" @blur="($event) => updateModel($event.value)" :placeholder="placeholder" :input-id="`currency${title}`" :mode="'currency'" :currency="'BRL'" :locale="'pt-BR'" fluid />
    <small :id="`username-help${title}`">{{ helpText }}</small>
    <small class="error-help" v-for="error of errors" :key="error.$uid" >{{ error.$message }} </small>
  </div>
</template>
<style scoped>
.error-help {
  color: red;
}
</style>