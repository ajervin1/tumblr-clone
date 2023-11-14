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
</script>

<template>
	<main class="pb-10">
		<NavBar />
		<!-- HashTag Heading -->
		<div class="container mx-auto py-4">
			<h2 class="text-2xl font-semibold text-white mb-2 tracking-wide">Tiktoks for {{ username }}</h2>
			<p class="leading-relaxed text-lg">Display User info here</p>
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