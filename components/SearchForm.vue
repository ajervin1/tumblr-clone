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
		<input type="text" class="input input-bordered w-24 md:w-auto" v-model="term" placeholder="Search Username">
	</form>
</template>

<style scoped>

</style>