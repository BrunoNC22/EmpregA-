<script setup lang="ts">
import {ErrorObject} from '@vuelidate/core'

const props = defineProps<{
  title: string,
  placeholder: string | '',
  helpText: string,
  model: string,
  errors: ErrorObject[],
  required?: boolean | false
}>()

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