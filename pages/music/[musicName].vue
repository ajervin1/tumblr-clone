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
async function loadMore() {
	await store.searchByMusicTitle(musicName, store.pagination.nextCursor);
}

const tiktok = store.data.itemList[0];
</script>

<template>
	<main class="pb-10">
		<NavBar/>
		<!-- Music Heading -->
		<div class="container mx-auto py-4">
			<div class="bg-white items-center shadow p-4 rounded">
				<h2 class="page-heading text-3xl">{{ musicName }}</h2>
				<h6 class="page-subtitle mb-5">There are {{ store.data.total}} number of tiktoks with this sound</h6>
			
				<audio controls :src="tiktok.metadata.music.play_url.uri" />
				
			</div>
		
		</div>
		
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div class="super-grid">
				<TikTokItem v-for="tiktok in store.itemList" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
			<button class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
		</section>
	
	</main>
</template>

<style scoped>

</style>