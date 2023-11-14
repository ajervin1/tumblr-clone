<!-- Trending Page -->
<script setup lang="ts" >

import useStore from "~/store";
import {definePageMeta} from "#imports";

definePageMeta({
	layout: "tiktoks",
})

const store = useStore();
// await store.searchByHashtag('foryou');

const {data} = await useFetch('/api/ninja');












async function loadMore() {
	await store.searchByHashtag('foryou', store.pagination.nextCursor);
}

</script>
<template>
	<main class="app pb-10 bg-base-200/10">
		{{ data.itemList[0]._tik }}
		<NavBar />
		<!-- Trending Heading -->
		<div class="container mx-auto py-4">
			<h2 class="page-heading">Trending Clips</h2>
			<h6 class="page-subtitle">Stay up to date with the latest viral trends that are sweeping across TikTok</h6>
		</div>
	
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div class="super-grid">
				<TikTokItem v-for="tiktok in store.tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
			<button class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
		</section>
	
	
	</main>


</template>
