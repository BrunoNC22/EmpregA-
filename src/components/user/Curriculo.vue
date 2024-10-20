<script setup lang="ts">
import { ref } from 'vue';

// Reactive form data
const name = ref('Matheus Santos da Silva');
const age = ref('20 anos');
const city = ref('Campos dos Goytacazes');
const tel = ref('(22) 99994-0304');
const email = ref('matheus.santos@gmail.com');
const profileImage = ref<File | null>(null);

// Helper function to create Object URL safely
const imageURL = () => {
	return profileImage.value ? URL.createObjectURL(profileImage.value) : null;
};

// Functions to unlock inputs
const isNameEditable = ref(false);
const isAgeEditable = ref(false);
const isCityEditable = ref(false);
const isEmailEditable = ref(false);

const toggleEdit = (editableField: string) => {
	switch (editableField) {
		case 'name':
			isNameEditable.value = !isNameEditable.value;
			break;
		case 'age':
			isAgeEditable.value = !isAgeEditable.value;
			break;
		case 'city':
			isCityEditable.value = !isCityEditable.value;
			break;
		case 'email':
			isEmailEditable.value = !isEmailEditable.value;
			break;
	}
};
</script>

<template>
	<div class="flex p-4">
		<RouterLink class="flex space-x-2" to="/home">
			<img class="w-[16px]" id="main-frame-header-left-arrow" src="/assets/main-frame/Left arrow.svg"
				alt="Voltar para home">
			<img class="w-[48px]" id="empregae-logo-curta" src="/empregae-logo.png" alt="EmpregAê logo">
		</RouterLink>
	</div>
	<div class="min-h-screen flex flex-col items-center justify-start p-6">
		<div class="w-full max-w-md bg-yellow-300 p-6 rounded-lg shadow-md">
			<!-- Header -->


			<!-- Profile Picture and Info -->
			<div class="flex items-center mb-6">
				<div class="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
					<img v-if="imageURL()" :src="imageURL()" alt="Profile Picture" class="w-full h-full object-cover" />
					<!-- Placeholder for profile picture -->
					<svg v-else class="w-full h-full text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path
							d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
					</svg>
				</div>
				<div>
					<p class="font-bold">{{ name }}</p>
					<p class="text-gray-600">{{ age }}</p>
					<p class="text-gray-600">{{ city }}</p>
					<p class="text-gray-600">{{ tel }}</p>
					<p class="text-gray-600">{{ email }}</p>
				</div>
			</div>

			<!-- Academic Formation Section -->
			<h2 class="text-blue-600 font-bold text-xl mb-4">Formação acadêmica</h2>
			<form class="space-y-4">
				<input type="text" placeholder="Ex: Ensino médio completo"
					class="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none">
				<input type="text" placeholder="Ex: Curso Técnico em Informática"
					class="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none">
				<input type="text" placeholder="Ex: Inglês básico"
					class="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none">
			</form>
		</div>
	</div>
</template>

<style scoped>
/* Adjustments for better positioning of elements */
input:focus {
	outline: none;
	border-color: blue;
}
</style>
