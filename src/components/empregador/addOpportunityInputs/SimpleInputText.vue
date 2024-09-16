<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  placeholder: {
    required: false,
    default: '',
    type: String
  },
  helpText: {
    required: true,
    type: String
  },
  model: {
    required: true,
    type: String
  },
  errors: {
    required: false,
  },
  required: {
    required: false,
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['update:model'])

const updateModel = (newValue: string) => {
  emit('update:model', newValue)
}
</script>
<template>
  <div class="flex flex-col gap-2">
    <label :for="`input${title}`">
      {{ title }}
      <b v-if="required" style="color: red;" >*</b>
    </label>
    <InputText :value="model" @:keyup="updateModel($event.target?.value)" :id="`input${title}`" :placeholder="placeholder" aria-describedby="username-help" />
    <small :id="`username-help${title}`">{{ helpText }}</small>
    <small class="error-help" v-for="error of errors" :key="error.$uid" >{{ error.$message }} </small>
  </div>
</template>
<style scoped>
.error-help {
  color: red;
}
</style>