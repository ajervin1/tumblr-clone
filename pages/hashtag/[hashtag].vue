<script setup lang="ts">
/*
* Display list of tiktoks associated with a hashtag
* Get her from clicking on a hashtag on the ShowPage
* */

import useAppStore from "~/stores/appstore";

const config = useRuntimeConfig()
const store = useAppStore()
const route = useRoute();
const {hashtag}: any = route.params
const triggerEl = ref();
const timer = ref()
const fetchingData = ref(false);

async function loadMore() {
	await store.searchByHashTag(hashtag, store.pagination.nextCursor);
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



await store.searchByHashTag(hashtag);
onMounted(() => {
	observeLoadMore()
})
// Setup SEO
useHead({
	link: [
		{
			rel: "canonical",
			href: `${config.public.baseUrl}/hashtag/${hashtag}`
		}
	],
	title: `#${hashtag} | TikTok Online Viewer Hashtag | TikTokFlow`,
	meta: [
		{name: "description", content: `#${hashtag} - Easily browse the tiktok videos with #${hashtag} on TikTokFlow`},
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
				<h6 class="page-subtitle">There are {{ store.total}} tiktoks with this hashtag</h6>
			</div>
			
		</div>
		<!-- Main Content -->
		<ItemList />
		<!-- Trigger Element For Load More Intersection Observer-->
		<div ref="triggerEl"></div>
		<div class="container mx-auto text-center py-4" >
			<LoadingIcon  v-if="fetchingData === true && store.nextCursor !== false"/>
			<div class="badge badge-primary py-3 font-medium" v-else>
				Done Loading Items
			</div>
		</div>
	
	</main>
</template>

<style scoped>

</style>