<script setup>
const term = ref();

function handleSubmit( e ) {
	alert(`Search for ${term.value}`);
	term.value = ""
}

</script>
<template>
	<main class="app container mx-auto py-10 ">
		<form @submit.prevent="handleSubmit">
			<input type="text" class="input input-bordered w-64 input-primary" v-model="term" placeholder="Search Username">
		</form>
	</main>

</template>
