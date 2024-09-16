<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

type SelectOptions = {
  title: string,
  helpText: string | '',
  required: boolean | false,
  options: Object[] | [
    {
      name: 'Selecione'
    }
  ],
  optionLabel: string | 'name',
  model: any
}



const props = defineProps<SelectOptions>()

const emit = defineEmits(['update:model'])

const selectRef = ref(props.model)

const updateModel = (newValue: any) => {
  emit('update:model', newValue)
}

watch(selectRef, () => {
  updateModel(selectRef.value)
})
</script>
<template>
  <div class="add-opportunity-select-input">
    <label for="select-input">
      {{ title }}
      <b v-if="required" style="color: red;" >*</b>
    </label>
    <Select v-model:model-value="selectRef" id="select-input" :options="options" placeholder="Selecione" :option-label="optionLabel" v-bind="model" />
    <small>{{ helpText }}</small>
  </div>
</template>
<style scoped>
.add-opportunity-select-input {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

small {
  font-size: smaller;
}
</style>