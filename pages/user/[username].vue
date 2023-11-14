<script setup lang="ts">
import useStore from "~/store";

const store = useStore();
const route = useRoute();
const {username}:any = route.params;
const result = await store.searchByUsername(username)
</script>

<template>
<main>
	<h2>{{ username }}</h2>
	<h2>User Page</h2>
	<pre>{{ result }}</pre>
</main>
</template>

<style scoped>

</style>