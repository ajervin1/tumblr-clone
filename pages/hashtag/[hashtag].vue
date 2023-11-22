<!-- hashtag Page /music/:hashtag -->
<script setup lang="ts">
/*
* Display list of tiktoks associated with a hashtag
* Get her from clicking on a hashtag on the ShowPage
* */
import useStore from "~/store";

const store = useStore();
const route = useRoute();
const {hashtag}: any = route.params
const result = await store.searchByHashtag(hashtag);

async function loadMore() {
	await store.searchByHashtag(hashtag, store.pagination.nextCursor);
}
</script>

<template>
	<main>
		<NavBar />
		<!-- HashTag Heading -->
		<div class="container mx-auto py-4">
			<div class="bg-white items-center shadow p-4 rounded">
				<h2 class="page-heading text-3xl">Tiktoks for #{{ hashtag }}</h2>
				<h6 class="page-subtitle">There are {{ store.data.total}} number of tiktoks with this hashtag</h6>
			</div>
			
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

<style scoped>

</style>