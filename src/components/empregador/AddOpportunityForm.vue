<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minValue } from '@vuelidate/validators'

import SimpleInputText from './addOpportunityInputs/SimpleInputText.vue';
import SimpleSelect from './addOpportunityInputs/SimpleSelect.vue';
import SimpleInputTextWithIcon from './addOpportunityInputs/SimpleInputTextWithIcon.vue';
import BenefitsCheckbox from './addOpportunityInputs/BenefitsCheckbox.vue';
import RequirementsList from './addOpportunityInputs/RequirementsList.vue';

const state = reactive({
  location: {
    state: "",
    city: ""
  },
  title: "",
  type: "",
  salary: 0,
  benefits: [],
  requirements: [],
  description: "",
  publicationDate: "",
  applicationDeadline: "",
  workSchedule: "",
  workMode: "",
  sector: "",
  level: "",
  contact: {
    email: "",
    phone: ""
  },
  desiredSkills: [],
  education: "",
  experience: ""
})

const rules = {
  location: {
    state: { required },
    city: { required }
  },
  title: { required },
  type: { required },
  salary: { required },
  benefits: { required },
  requirements: { required },
  description: { required },
  publicationDate: { required },
  applicationDeadline: { required },
  workSchedule: { required },
  workMode: { required },
  sector: { required },
  level: { required },
  contact: {
    email: { required, email },
    phone: { required }
  },
  desiredSkills: { required },
  education: { required },
  experience: {}
}

const form = useVuelidate(rules, state)

const jobTypes = [
  {
    name: 'Carteira Assinada'
  },
  {
    name: 'Pessoa Jurídica'
  },
  {
    name: 'Estágio'
  },
  {
    name: 'Bolsa'
  }
]

const jornadaTypes = [
  {
    name: 'Integral'
  },
  {
    name: 'Meio período'
  }
]

const workModeTypes = [
  {
    name: 'Presencial'
  },
  {
    name: 'Remoto'
  },
  {
    name: 'Híbrido'
  }
]

const experienceLevels = [
  {
    name: 'Junior'
  },
  {
    name: 'Pleno'
  },
  {
    name: 'Senior'
  },
  {
    name: 'Lider'
  }
]

watch(() => form.value.benefits.$model, () => {
  console.log(form.value.benefits.$model)
})
</script>
<template>
  <form class="add-opportunity-form">
    <SimpleInputText style="margin-top: 0.5rem;" v-model:model="form.title.$model" :errors="form.title.$errors" :required="true" title="Título"
      placeholder="Desenvolvedor full stack" help-text="Título da oportunidade de trabalho." />
    <SimpleInputText v-model:model="form.description.$model" :errors="form.description.$errors" :required="true"
      title="Descrição" placeholder="Buscamos um desenvolvedor fullstack..." help-text="Descrição detalhada da vaga." />
    <SimpleSelect v-model:model="form.type.$model" :errors="form.type.$errors" title="Tipo"
      help-text="Tipo de contrato da vaga." :required="true" :options="jobTypes" :option-label="'name'" />
    <SimpleInputTextWithIcon v-model:model="form.salary.$model" :errors="form.salary.$errors" :required="true" 
      title="Salario" placeholder="R$ 5.000" help-text="Pagamento mensal da vaga." />
    <BenefitsCheckbox v-model:selected-benefits="form.benefits.$model" />
    <RequirementsList v-model:requirements="form.requirements.$model" title="Requisitos" 
      placeholder="Experiência com TDD" help-text="Lista de requisitos para a vaga." />
    <SimpleSelect v-model:model="form.workSchedule.$model" :errors="form.workSchedule.$errors" title="Jornada"
      :required="true" :options="jornadaTypes" help-text="Horário de trabalho da vaga." :option-label="'name'" />
    <SimpleSelect v-model:model="form.workMode.$model" :errors="form.workMode.$errors" title="Modo de trabalho" 
      :required="true" :options="workModeTypes" :option-label="'name'" help-text="Modo de trabalho da vaga." />
    <SimpleInputText v-model:model="form.sector.$model" :errors="form.sector.$errors" :required="true" title="Setor"
      placeholder="TI" help-text="Setor da empresa responsável pela vaga." />
    <SimpleSelect v-model:model="form.level.$model" :errosr="form.level.$errors" title="Nível de experiência" 
      :required="true" :options="experienceLevels" :option-label="'name'" help-text="Nível de experiência requerido para a vaga." />
    <RequirementsList v-model:requirements="form.desiredSkills.$model" title="Habilidades desejadas" 
      placeholder="Boa comunicação" help-text="Lista de habilidades desejadas para a vaga." />
    <SimpleInputText v-model:model="form.education.$model" :errors="form.education.$errors" title="Escolaridade" :required="true"
      placeholder="Ensino superior completo" help-text="Nível de escolaridade requerido para a vaga." />
    <SimpleInputText v-model:model="form.experience.$model" :errors="form.experience.$errors" title="Experiência"
      placeholder="2 anos de experiência com python" help-text="Experiencia requerida para a vaga." />

    
    <div class="flex flex-wrap gap-4 justify-center">
      <Button label="Criar nova vaga" icon="pi pi-check" iconPos="right" />
    </div>
    
  </form>
</template>
<style scoped>
.add-opportunity-form {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow-y: auto;
  max-width: 600px;
  margin: 0 auto;
  width: -webkit-fill-available;
}
</style>