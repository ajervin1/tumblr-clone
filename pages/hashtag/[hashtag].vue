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
</script>

<template>
	<main>
		<!-- HashTag Heading -->
		<div class="container mx-auto py-4">
			<h2 class="text-2xl font-semibold text-white mb-2 tracking-wide">Tiktoks for #{{ hashtag }}</h2>
			<p class="leading-relaxed text-lg">Display amount of results for hashtag</p>
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