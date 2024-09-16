<script setup lang="ts">
import { Opportunity } from '../../types/opportunitiesTypes';
import { ref, watch } from 'vue';

defineProps<{ oppotunity: Opportunity}>()
const popover = ref()
const selectedAction = ref()
const actions = ref([
  {
    action: 'Editar',
  },
  {
    action: 'Excluir',
  },
  {
    action: 'Fechar'
  }
])

watch(selectedAction, () => {
  console.log('ação selecionada: ', selectedAction.value)
})
</script>
<template>
  <div class="job-opportunity">
    <div class="three-dots-wrapper" @click="popover.toggle">
      <img src="/assets/empregador/job-opportunity/tres pontos.svg" alt="icone de mais opções" title="Opções"  class="three-dots">
      <Popover ref="popover">
        <Listbox v-model="selectedAction" :options="actions" optionLabel="action" /> 
      </Popover>
    </div>
    
    <div class="line job-opportunity--title">
      <div class="prop">
        <!-- <div class="label">Título:</div> -->
        <div class="value" style="font-size: 0.9rem;">{{ oppotunity.title }}</div>
      </div>
      <div class="prop">
        <!-- <div class="label">$</div> -->
        <div class="value">{{ oppotunity.type }}</div>
      </div>
    </div>
    <div class="line">
      <div class="prop">
        <div class="label" style="font-weight: bold;">$</div>
        <div class="value">{{ oppotunity.salary }}</div>
      </div>
      <div class="prop">
        <div class="label">
          <img src="/assets/empregador/job-opportunity/work schedule.svg" alt="">
        </div>
        <div class="value">{{ oppotunity.workSchedule + ' - ' + oppotunity.workMode }}</div>
      </div>
    </div>
    <div class="line">
      <div class="prop">
        <div class="label">
          <img src="/assets/empregador/job-opportunity/sector icon.svg" alt="">
        </div>
        <div class="value">{{ oppotunity.sector }}</div>
      </div>
      <div class="prop">
        <div class="label">
          <img src="/assets/empregador/job-opportunity/location icon.svg" alt="">
        </div>
        <div class="value">{{ oppotunity.location.city + ' - ' + oppotunity.location.state }}</div>
      </div>
    </div>
    <div class="line">
      <div class="prop">
        <div class="label">
          <img src="/assets/empregador/job-opportunity/clock icon.svg" alt="">
        </div>
        <div class="value">há 2 dias</div>
      </div>
      <div class="prop">
        <div class="label">
          <img src="/assets/empregador/job-opportunity/expiration icon.svg" alt="">
        </div>
        <div class="value">em 15 dias</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.job-opportunity {
  position: relative;
  height: fit-content;
  text-wrap: nowrap;
  display: grid;
  padding: 8px;
  background-color: #F4F4F4;
  border-radius: 7px;
  gap: 7px;
}

.three-dots-wrapper {
  position: absolute;
  margin: 0 8px;
  right: 0;
}

.job-opportunity .job-opportunity--title {
  font-size: 0.9rem;
  font-weight: 500;
}

.line {
  display: inline-flex;
}

.prop:first-child {
  margin-right: 25px;
}

.prop {
  align-items: center;
  display: flex;
}

.label {
  margin-right: 8px;
}

.value {
  font-size: .8rem;
}
</style>