<!-- Trending Page -->
<script setup lang="ts">
// Imports at top

import {storeToRefs} from "pinia";
import useAppStore from "~/stores/appstore";

// Use functions here
const config = useRuntimeConfig()

const store = useAppStore();

// State Here
const triggerEl = ref();
const timer = ref()
const fetchingData = ref(false);

// Functions Here
async function loadMore() {
	await store.searchByHashTag('foryou', store.pagination.nextCursor);
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
			
		}
	}, {threshold: 1})
	observer.observe(triggerEl.value)
}





// Run Code At Bottom
await store.searchByHashTag('foryou');

// Dom Code here
onMounted(() => {
	observeLoadMore();
})

useHead({

	link: [
		{
			rel: "canonical",
			href: config.public.baseUrl
		}
	],
	title: `TikTok Online Viewer | TikTokFlow`,
	meta: [
		{name: "description", content: "Anonymous TikTok Viewer. Discover trending videos, viral content and talented creators. TikTokFlow allows you to explore TikTok videos privately without account and app"},
		{name: "keywords", content: "tiktok online,tiktok online viewer , tiktok viewer, tiktok viral, tiktok anonymous, tiktokflow, tiktokflow.tech"  }
	]
})
</script>
<template>
	<main class="home-page">
	
		<!-- Trending Heading -->
		<div class="container mx-auto py-6 space-y-1">
			<h3 class="text-2xl font-semibold tracking-tight">Trending TikToks</h3>
			<p class="text-gray-500">Stay up to date with the latest viral trends that are sweeping across TikTok</p>
		</div>
		
		<!-- Main Content -->
		<ItemList/>
		<!-- Trigger Element For Load More Intersection Observer-->
		<div ref="triggerEl"></div>
		<div class="container mx-auto text-center py-4" v-if="store.nextCursor">
			<LoadingIcon v-if="fetchingData"/>
		</div>
		<div v-else>
			Done Loading Items
		</div>
	</main>
</template>
<style>
.list-move,
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}
.list-leave-from,
.list-enter-to {
	opacity: 1;
	transform: translateX(0);
}
.list-leave-active{
	position: absolute;
}

.tiktok-grid {
	display: grid;
	width: 100%;
	grid-gap: 24px 16px;
	grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
}

</style>