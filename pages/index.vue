<script setup >
import SearchForm from "~/components/SearchForm.vue";
import useStore from "~/store.ts";

const store = useStore();
await store.searchByUsername('iamoliviaponton');









async function loadMore() {
	const data = await $fetch(`https://api.tik.fail/v2/search?usernames=${ term.value }&cursor=${ cursor.value }&sortBy=date&legacySearch=true`, {});
	tiktoks.value = [ ...tiktoks.value, ...data.itemList ]
	cursor.value = data.lookup.pagination.nextCursor;
}

</script>
<template>
	<main class="app pb-10">
		<NavBar />
		<!-- Trending Heading -->
		<div class="container mx-auto py-4">
			
			<h2 class="text-2xl font-semibold text-white mb-2 tracking-wide">Trending Clips</h2>
			<p class="leading-relaxed text-lg">Stay up to date with the latest viral trends that are sweeping across TikTok</p>
		</div>
	
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div class="grid grid-cols-4 gap-8">
				<TikTokItem v-for="tiktok in store.itemList" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
<!--			<button v-if="tiktoks" class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>-->
		</section>
	
	
	</main>


</template>
