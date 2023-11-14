<!-- Music Page /music/:musicName -->
<script setup lang="ts">
/*
* Display list of tiktoks associated with a music name
* Get her from on the single page music link
* */
import useStore from "~/store";

const store = useStore();
const route = useRoute();
const {musicName}: any = route.params;
const result = await store.searchByMusicTitle(musicName);
</script>

<template>
	<main>
		<!-- Music Heading -->
		<div class="container mx-auto py-4">
			<h2 class="text-2xl font-semibold text-white mb-2 tracking-wide">Clips for {{ musicName }}</h2>
			<p class="leading-relaxed text-lg">Display the audio track</p>
		</div>
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div class="grid grid-cols-4 gap-8">
				<TikTokItem v-for="tiktok in store.itemList" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
			<!--
						<button v-if="tiktoks" class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
			-->
		</section>
	
	</main>
</template>

<style scoped>

</style>