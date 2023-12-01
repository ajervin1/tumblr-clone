<script setup lang="ts">
import useAppStore from "~/stores/appstore";


const store = useAppStore()





async function handleEnter(e : any) {
	e.preventDefault();
	// const result = await store.searchByUsername(store.term);
	await navigateTo(`/user/${store.term}`);
}
</script>

<template>
	<form @submit="handleEnter">
		<input type="text" class="input input-bordered input-md h-10 w-60 md:w-auto" v-model="store.term" placeholder="Search Username"/>
	</form>
</template>

<style scoped>

</style>