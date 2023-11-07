<script setup >
const term = ref('emelyelikeslemonade');
const tiktoks = ref(null);
const emit = defineEmits(['search'])


async function handleEnter(e) {
	e.preventDefault();
	emit('search', term.value);
	term.value = "";
}
</script>

<template>
	<form @submit="handleEnter">
		<input type="text" class="input input-bordered w-64 input-primary" v-model="term" placeholder="Search Username">
	</form>
</template>

<style scoped>

</style>