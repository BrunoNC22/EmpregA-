<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  requirements: {
    type: Array,
    required: true
  },
  title: {
    required: true,
    type: String
  },
  placeholder: {
    required: true,
    type: String
  },
  helpText: {
    required: true,
    type: String
  }
});

const emit = defineEmits(['update:requirements']);

const newRequirement = ref(''); // Armazena o novo requisito digitado

// Função para adicionar um novo requisito à lista
const addRequirement = () => {
  if (newRequirement.value.trim()) {
    emit('update:requirements', [...props.requirements, newRequirement.value.trim()]);
    newRequirement.value = ''; // Limpa o input
  }
}

// Função para remover um requisito da lista
const removeRequirement = (index: number) => {
  const updatedRequirements = [...props.requirements];
  updatedRequirements.splice(index, 1); // Remove o requisito pelo índice
  emit('update:requirements', updatedRequirements);
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <label>{{ title }}</label>

    

    <!-- Renderiza a lista de requisitos adicionados -->
    <div v-for="(requirement, index) in requirements" :key="index" class="requirement-item">
      <InputText disabled :value="requirement" />
      <Button icon="pi pi-minus" severity="secondary" @click="removeRequirement(index)" aria-label="Remover requisito" ></Button>
    </div>
    <!-- Input para adicionar novos requisitos -->
    <div class="add-new-requirement">
      <InputText v-model:model-value="newRequirement" :placeholder="placeholder" fluid />
      <Button icon="pi pi-plus" severity="secondary" @click="addRequirement" aria-label="Adicionar novo requisito" ></Button>
    </div>
    <small :id="`add-to-list-input-help-${title}`" >{{ helpText }}</small>
  </div>
</template>

<style scoped>
.add-new-requirement {
  display: flex;
  gap: 0.5rem;
}

.requirement-item {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.requirement-item input {
  width: 100%;
}
</style>
