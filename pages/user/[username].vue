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
	await store.searchByUsername(username, store.pagination.nextCursor);
}
const singleTok = store.tiktoks[0];

</script>

<template>
	<main class="pb-10">
		<NavBar/>
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
	
	</main>
</template>

<style scoped>

</style>