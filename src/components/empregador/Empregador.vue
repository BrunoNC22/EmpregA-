<script setup lang="ts">
import { watch } from 'vue';
import { useGetOpportunitiesQuery } from '../../storage/queries/getOpportunities';
import OpportunityCard from './OpportunityCard.vue';

const { data: opportunities, isLoading, isError } = useGetOpportunitiesQuery()

watch(opportunities, () => {
  if (!isLoading.value && !isError.value) {
    console.log(opportunities.value)
  }
})
</script>
<template>
  <div class="container">
    <div class="content-header">
      <div class="title">Vagas ofertadas</div>
      <div class="actions">
        <img src="/assets/empregador/add icon.svg" alt="icone adicionar nova vaga" title="Adicionar nova oportunidade" class="add-icon">
        <img src="/assets/empregador/filter icon.svg" alt="icone filtrar vagas" title="Filtrar vagas" class="filter-icon">
        <img src="/assets/empregador/sort by.svg" alt="icone ordenar por" title="Ordenar" class="sort-by-icon">
      </div>      
    </div>
    <div class="content">
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

.content {
  display: grid;
  gap: 6px;
  border-radius: 7px;
  margin-top: 14px;
  overflow-y: auto;
}
</style>