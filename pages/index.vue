<!-- Trending Page -->
<script setup lang="ts" >
import useStore from "~/store.js";
const store = useStore();
await store.searchByHashtag('foryou');











async function loadMore() {
	await store.searchByHashtag('foryou', store.pagination.nextCursor);
	
}

</script>
<template>
	<main class="app pb-10">
	
		<NavBar />
		<!-- Trending Heading -->
		<div class="container mx-auto py-4">
			
			<h2 class="text-2xl font-semibold text-white mb-2 tracking-wide">Trending Clips</h2>
			<p class="leading-relaxed text-lg">Stay up to date with the latest viral trends that are sweeping across TikTok</p>
		</div>
	
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div class="grid grid-cols-4 gap-8">
				<TikTokItem v-for="tiktok in store.tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
			<button class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
		</section>
	
	
	</main>


</template>
