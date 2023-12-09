<script setup lang="ts">



import useAppStore from "~/stores/appstore";

const store = useAppStore()
const config = useRuntimeConfig()

const route = useRoute();
const {musicName}: any = route.params;
const triggerEl = ref();
const timer = ref()
const fetchingData = ref(false);
async function loadMore() {
	await store.searchByMusicTitle(musicName, store.pagination.nextCursor);
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
await store.searchByMusicTitle(musicName);
const tiktok = store.result.itemList[0];
const {metadata} = tiktok;
const {author, owner_handle} = metadata.music;

onMounted(() => {
	observeLoadMore();
})
// Setup Head
useHead({
	// charset: 'utf-8',
	// viewport: 'width=device-width, initial-scale=1',
	link: [
		{
			rel: "canonical",
			href: `${config.public.baseUrl}/music/${musicName}`
		}
	],
	title: `${musicName} - ${author} | Tiktok viewer with song | TikTokFlow`,
	meta: [
		{name: "description", content: `Tiktok video viewer with song ${musicName} - ${author}`},
		{name: "keywords", content: `tiktok videos, tiktok music, tiktok song, ${author}, ${owner_handle}, ${musicName}, tiktok music viewer`  }
	]
})

</script>

<template>
	<main class="show-page pb-10">
		<!-- Music Heading -->
		<div class="container mx-auto py-4">
			<div class="bg-white header-card">
				<div class="flex gap-4 mb-3">
					<h2 class="page-heading text-3xl">{{ author }} - </h2>
					<h2 class="page-heading text-3xl">{{ musicName }}</h2>
				</div>
			
				<h6 class="page-subtitle mb-5">There are {{ store.total}} TikToks with this sound</h6>
				<audio controls :src="tiktok.metadata.music.play_url.uri" />
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

<style>
.header-card {
	@apply border border-gray-300 rounded-xl shadow p-6
}
</style>