<!-- Music Page /user/:username -->
<script setup lang="ts">
/*
* When user searches this page will handle the request
* */
const config = useRuntimeConfig()
import useStore from "~/store";

const store = useStore();
const route = useRoute();

const {username}: any = route.params;
const triggerEl = ref();
const timer = ref()
const fetchingData = ref(false);


async function loadMore() {
	await store.searchByUsername(username, store.pagination.nextCursor);
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


await store.searchByUsername(username)
const singleTok = store.tiktoks[0];
const {unique_id, nickname} = singleTok.metadata.author
useHead({
	// charset: 'utf-8',
	// viewport: 'width=device-width, initial-scale=1',
	link: [
		{
			rel: "canonical",
			href: `${config.public.baseUrl}user/${username}`
		}
	],
	title: `${singleTok.metadata.author.nickname} - @${singleTok.metadata.author.unique_id} - TikTok Viewer`,
	meta: [
		{name: "description", content: `@${singleTok.metadata.author.unique_id} ${singleTok.metadata.author.nickname} ${singleTok.metadata.author.signature}`},
		{name: "keywords", content: `@${unique_id}, ${nickname}, tiktok profile, tiktok account, tiktok overview, tiktok viewer`  }
	]
})
onMounted(() => {
	observeLoadMore();
})
</script>

<template>
	<main class="user-page pb-10">
		<!-- Username Heading -->
		<div class="container mx-auto py-4">
			<div class="bg-white flex gap-10 items-center shadow p-4 rounded-xl">
				<NuxtLink :to="`/user/${singleTok.metadata.author.unique_id}`" class="avatar-container">
					<img :src="`https://v2-thumbs-tiktok.files.fail/avatar/${singleTok.metadata.author.unique_id}.jpeg`"
					     class="w-36 rounded shadow" alt="">
				</NuxtLink>
				<div class="user-info">
					<h1 class="page-heading">{{ singleTok.metadata.author.nickname }}</h1>
					<h2 class="page-subtitle mb-2">{{ singleTok.metadata.author.unique_id }}</h2>
					<p>{{singleTok.metadata.author.signature}}</p>
				</div>
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