<script setup lang="ts">
import { watch } from 'vue';
import { useGetOpportunitiesQuery } from '../../storage/queries/getOpportunities';

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
        <div v-for="(job, index) in opportunities" :key="job.title" class="job-opportunity">
          <div class="line job-opportunity--title">
            <div class="prop">
              <!-- <div class="label">Título:</div> -->
              <div class="value" style="font-size: 0.9rem;">{{ job.title }}</div>
            </div>
            <div class="prop">
              <!-- <div class="label">$</div> -->
              <div class="value">{{ job.type }}</div>
            </div>
          </div>
          <div class="line">
            <div class="prop">
              <div class="label" style="font-weight: bold;">$</div>
              <div class="value">{{ job.salary }}</div>
            </div>
            <div class="prop">
              <div class="label">
                <img src="/assets/empregador/job-opportunity/work schedule.svg" alt="">
              </div>
              <div class="value">{{ job.workSchedule + ' - ' + job.workMode }}</div>
            </div>
          </div>
          <div class="line">
            <div class="prop">
              <div class="label">
                <img src="/assets/empregador/job-opportunity/sector icon.svg" alt="">
              </div>
              <div class="value">{{ job.sector }}</div>
            </div>
            <div class="prop">
              <div class="label">
                <img src="/assets/empregador/job-opportunity/location icon.svg" alt="">
              </div>
              <div class="value">{{ job.location.city + ' - ' + job.location.state }}</div>
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

.job-opportunity {
  text-wrap: nowrap;
  display: grid;
  padding: 8px;
  background-color: #F4F4F4;
  border-radius: 7px;
  gap: 7px;
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