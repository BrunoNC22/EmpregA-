<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  selectedBenefits: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:selectedBenefits'])

const newBenefit = ref('') // Armazena o novo benefício digitado
const predefinedBenefits = ref([
  'Vale Refeição',
  'Vale Alimentação',
  'Vale Transporte'
])

// Função para adicionar um novo benefício
const addBenefit = () => {
  if (newBenefit.value && !predefinedBenefits.value.includes(newBenefit.value)) {
    predefinedBenefits.value.push(newBenefit.value) // Adiciona o novo benefício
    emit('update:selectedBenefits', [...props.selectedBenefits, newBenefit.value]) // Marca o benefício como selecionado
    newBenefit.value = '' // Limpa o input
  }
}

// Função para lidar com a mudança nas checkboxes
const toggleBenefit = (benefit: string) => {
  const selected = [...props.selectedBenefits]
  const index = selected.indexOf(benefit)
  if (index > -1) {
    selected.splice(index, 1) // Remove se já estiver selecionado
  } else {
    selected.push(benefit) // Adiciona se não estiver selecionado
  }
  emit('update:selectedBenefits', selected)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <label>Benefícios</label>
    <div class="flex flex-col gap-4">
      <div v-for="benefit in predefinedBenefits" :key="benefit" class="flex items-center">
        <Checkbox v-bind:model-value="selectedBenefits"  @change="toggleBenefit(benefit)" :inputId="benefit" name="benefit" :value="benefit" />
        <label :for="benefit" class="ml-2" >{{ benefit }}</label>
      </div>
    </div>
    <div class="flex gap-2">
      <InputText v-model:model-value="newBenefit" placeholder="Digite um novo benefício" fluid />
      <Button icon="pi pi-plus" severity="secondary" @click="addBenefit" aria-label="Adicionar novo beneficio" />
    </div>
  </div>
</template>

<style scoped>
</style>
