<!-- Music Page /user/:username -->
<script setup lang="ts">
/*
* When user searches this page will handle the request
* */
import useStore from "~/store";

const store = useStore();
const route = useRoute();
const {username}: any = route.params;
const result = await store.searchByUsername(username)

async function loadMore() {
	await store.searchByUsername('foryou', store.pagination.nextCursor);
}

</script>

<template>
	<main class="pb-10">
		<NavBar/>
		<!-- HashTag Heading -->
		<div class="container mx-auto py-4">
			<h2 class="page-heading">Tiktoks for {{ username }}</h2>
			<h6 class="page-subtitle">Display User info here</h6>
		</div>
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<!-- Grid -->
			<div class="super-grid">
				<TikTokItem v-for="tiktok in store.itemList" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
			<!-- Load More Button -->
			<button class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
		</section>
	
	</main>
</template>

<style scoped>

</style>