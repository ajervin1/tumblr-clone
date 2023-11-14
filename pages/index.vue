<script setup>
import SearchForm from "~/components/SearchForm.vue";
import useStore from "~/store.js";


const tiktoks = ref(null);
const cursor = ref(0);
const total = ref(null)
const term = ref(null)

const store = useStore();
console.log(store.count)
async function handleSubmit( username ) {
	const data = await $fetch(`https://api.tik.fail/v2/search?usernames=${ username }&cursor=0&sortBy=date&legacySearch=true`, {});
	term.value = username
	tiktoks.value = data.itemList;
	cursor.value = data.lookup.pagination.nextCursor;
	total.value = data.lookup.pagination.total;
	
}
async function loadMore() {
	const data = await $fetch(`https://api.tik.fail/v2/search?usernames=${ term.value }&cursor=${ cursor.value }&sortBy=date&legacySearch=true`, {});
	tiktoks.value = [ ...tiktoks.value, ...data.itemList ]
	cursor.value = data.lookup.pagination.nextCursor;
}



</script>
<template>
	<main class="app pb-10a">

		<!-- NavBar -->
		<header class="bg-base-300">
			<div class="navbar container mx-auto py-3">
				<div class="flex-1">
					<a class="btn btn-ghost normal-case text-xl">TikTok Flow</a>
				</div>
				<div class="flex-none gap-2">
					<div class="form-control">
						<SearchForm @search="handleSubmit"/>
					</div>
					<!-- Avatar -->
					<button tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
						</div>
					</button>
				
				</div>
			</div>
		
		</header>
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div class="grid grid-cols-4 gap-8">
				<TikTokItem v-if="tiktoks" v-for="tiktok in tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</div>
			<button v-if="tiktoks" class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
		</section>
	
	
	</main>


</template>
