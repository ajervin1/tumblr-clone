<script setup lang="ts">
import useStore from "~/store";

const store = useStore()




async function handleEnter(e : any) {
	e.preventDefault();
	// const result = await store.searchByUsername(store.term);
	await navigateTo(`/user/${store.term}`);
}
</script>

<template>
	<form @submit="handleEnter">
		<input type="text" class="input input-bordered w-24 md:w-auto" v-model="store.term" placeholder="Search Username"/>
	</form>
</template>

<style scoped>

</style>