<!-- Trending Page -->
<script setup lang="ts">
// Imports at top
const config = useRuntimeConfig()
import useStore from "~/store";
import LoadingIcon from "~/components/LoadingIcon.vue";
// Use functions here
useHead({
	// charset: 'utf-8',
	// viewport: 'width=device-width, initial-scale=1',
	link: [
		{
			rel: "canonical",
			href: config.baseUrl
		}
	],
	title: `TikTok Online Viewer - TikTokFlow`,
	meta: [
		{name: "description", content: "New expirience with anonymous TikTok Viewer. Discover trending videos, viral content and talented creators. Explore TikTok videos privately without account and app"},
		{name: "keywords", content: "tiktok online, tiktok viewer, tiktok viral, tiktok anonymous, tiktokflow, tiktokflow.com"  }
	]
})
const store = useStore();
const {sayHello} = useHelpers();
// State Here
const triggerEl = ref();
const timer = ref()
const fetchingData = ref(false);

// Functions Here
async function loadMore() {
	
	await store.searchByHashtag('foryou', store.pagination.nextCursor);
	fetchingData.value = false;
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

// Run Code Here
await store.searchByHashtag('foryou');

// Dom Code here
onMounted(() => {
	observeLoadMore();
})
</script>
<template>
	<main class="home-page">
		<SeoKit/>
		<!-- Trending Heading -->
		<div class="container mx-auto py-6 space-y-1">
			<h3 class="text-2xl font-semibold tracking-tight">Trending Clips</h3>
			<p class="text-gray-500">Stay up to date with the latest viral trends that are sweeping across TikTok</p>
		</div>
		
		
		<!-- Main Content -->
		<ItemList/>
		<!-- Trigger Element For Load More Intersection Observer-->
		<div ref="triggerEl"></div>
		<div class="container mx-auto text-center py-4">
			<LoadingIcon v-if="fetchingData"/>
		</div>
	</main>
</template>
<style>
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.tiktok-grid {
	display: grid;
	width: 100%;
	grid-gap: 24px 16px;
	grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
}

</style>