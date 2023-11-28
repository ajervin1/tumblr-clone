<script setup lang="ts" >


import useStore from "~/store.ts";

const store = useStore();
store.initial()
definePageMeta({
	layout: false
})






</script>

<template>
	<main>
		<h2>{{ store.count }}</h2>
		<h2>{{ store.data }}</h2>
		<h2>SandBox</h2>
	</main>
</template>

<style scoped>

</style>