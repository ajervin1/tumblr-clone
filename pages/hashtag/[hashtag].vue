<script setup lang="ts">
import useStore from "~/store";

const store = useStore();
const route = useRoute();
const {hashtag}:any = route.params
const result = await store.searchByHashtag(hashtag);
</script>

<template>
	<main>
		{{ hashtag }}
		<h2>Hastag Id page</h2>
		{{ result }}
	</main>

</template>

<style scoped>

</style>