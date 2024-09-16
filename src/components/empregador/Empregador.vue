<script setup lang="ts">
import { watch, ref } from 'vue';
import { useGetOpportunitiesQuery } from '../../storage/queries/getOpportunities';
import OpportunityCard from './OpportunityCard.vue';
import AddOpportunityForm from './AddOpportunityForm.vue';

const { data: opportunities, isLoading, isError } = useGetOpportunitiesQuery()

const states = {
  ADD: 'add',
  LIST: 'list'
}

const state = ref(states.LIST)

// watch(opportunities, () => {
//   if (!isLoading.value && !isError.value) {
//     console.log(opportunities.value)
//   }
// })
</script>
<template>
  <div class="container">
    <div class="content-header">
      <div v-if="state === states.LIST" class="title">Vagas ofertadas</div>
      <div v-if="state === states.ADD" class="title">Adicionar vaga</div>
      <div class="actions">
        <template v-if="state === states.ADD">
          <img src="/assets/empregador/close icon.svg" @click="() => state = states.LIST" alt="icone fechar" title="Voltar" >
        </template>
        <template v-if="state === states.LIST" >
          <img src="/assets/empregador/add icon.svg" @click="() => state = states.ADD" alt="icone adicionar nova vaga" title="Adicionar nova oportunidade" class="add-icon">
          <img src="/assets/empregador/filter icon.svg" alt="icone filtrar vagas" title="Filtrar vagas" class="filter-icon">
          <img src="/assets/empregador/sort by.svg" alt="icone ordenar por" title="Ordenar" class="sort-by-icon">
        </template>
      </div>      
    </div>
    <AddOpportunityForm v-if="state === states.ADD" />
    <div v-if="state === states.LIST" class="content" :style="isLoading ? {display: 'grid'} : {}">
      <template v-if="isLoading" >
        <ProgressSpinner style="align-self: center;" />
      </template>
      <template v-if="!isLoading && !isError">
        <OpportunityCard v-for="(job, index) in opportunities" :oppotunity="job" :key="index" />
      </template>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-rows: min-content auto;
  padding: 18px;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.content-header {
  display: flex;
  padding-bottom: 3px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #C6C6C6;
}

.title {
  font-size: larger;
}

.actions {
  display: flex;
  gap: 12px;
}

.add-icon {
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 7px;
  margin-top: 14px;
  overflow-y: auto;
}
</style>