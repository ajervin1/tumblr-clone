<script setup lang="ts">
/*
* Display list of tiktoks associated with a hashtag
* Get her from clicking on a hashtag on the ShowPage
* */

import useStore from "~/store";

const config = useRuntimeConfig()
const store = useStore();
const route = useRoute();
const {hashtag}: any = route.params
const triggerEl = ref();
const timer = ref()
const fetchingData = ref(false);

async function loadMore() {
	await store.searchByHashtag(hashtag, store.pagination.nextCursor);
}
function observeLoadMore() {
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			fetchingData.value = true;
			clearTimeout(timer.value);
			timer.value = setTimeout(() => {
				loadMore();
			}, 300)
			// loadMore()
		}
	}, {threshold: 1})
	observer.observe(triggerEl.value)
}



await store.searchByHashtag(hashtag);
onMounted(() => {
	observeLoadMore()
})
// Setup SEO
useHead({
	link: [
		{
			rel: "canonical",
			href: `${config.public.baseUrl}hashtag/${hashtag}`
		}
	],
	title: `Tiktok video viewer hashtag - #${hashtag}`,
	meta: [
		{name: "description", content: `#${hashtag} - Easily browse the tiktok videos with #${hashtag} hashtag`},
		{name: "keywords", content: `tiktok hash, tiktok hashtag, tiktok hashtags, tiktok hashtag viewer, hashtag tiktok viewer, tiktok #${hashtag}, #${hashtag}`  }
	]
})
</script>

<template>
	<main class="hash-page">
		<!-- HashTag Heading -->
		<div class="container mx-auto py-4">
			<div class="bg-white header-card">
				<h2 class="page-heading text-3xl">Tiktoks for #{{ hashtag }}</h2>
				<h6 class="page-subtitle">There are {{ store.data.total}} tiktoks with this hashtag</h6>
			</div>
			
		</div>
		<!-- Main Content -->
		<ItemList />
		<!-- Trigger Element For Load More Intersection Observer-->
		<div ref="triggerEl"></div>
		<div class="container mx-auto text-center py-4">
			<LoadingIcon v-if="fetchingData"/>
		</div>
	</main>
</template>

<style scoped>

</style>