<script setup lang="ts">
import useStore from "~/store";

const store = useStore();
const route = useRoute();
const {musicName}:any = route.params;
const result = await store.searchByMusicTitle(musicName);
</script>

<template>
<main>
	{{ musicName }}
	<h2>Music</h2>
	{{ result }}
</main>
</template>

<style scoped>

</style>