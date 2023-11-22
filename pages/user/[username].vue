<!-- Music Page /user/:username -->
<script setup lang="ts">
/*
* When user searches this page will handle the request
* */
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

onMounted(() => {
	observeLoadMore();
})
</script>

<template>
	<main class="user-page pb-10">
		<!-- Username Heading -->
		<div class="container mx-auto py-4">
			<div class="bg-white flex gap-10 items-center shadow p-4 rounded">
				<NuxtLink :to="`/user/${singleTok.metadata.author.unique_id}`" class="avatar-container">
					<img :src="`https://v2-thumbs-tiktok.files.fail/avatar/${singleTok.metadata.author.unique_id}.jpeg`"
					     class="w-36 rounded shadow" alt="">
				</NuxtLink>
				<div class="user-info">
					<h2 class="page-heading">{{ singleTok.metadata.author.nickname }}</h2>
					<h6 class="page-subtitle mb-2">{{ singleTok.metadata.author.unique_id }}</h6>
					<p>{{singleTok.metadata.author.signature}}</p>
				</div>
			</div>


		</div>
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<!-- Grid -->
			<div class="super-grid">
				<TikTokItem v-for="tiktok in store.tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
			<!-- Load More Button -->
			<button class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
		</section>
		<!-- Trigger Element For Load More Intersection Observer-->
		<div ref="triggerEl"></div>
		<div class="container mx-auto text-center py-4">
			<Icon
				 v-if="fetchingData"
				 name="line-md:loading-alt-loop"
				 color="#ff731d"
				 width="60"
				 height="60"
			/>
		</div>
	</main>
</template>

<style scoped>

</style>