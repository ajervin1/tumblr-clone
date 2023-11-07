<script setup>
import SearchForm from "~/components/SearchForm.vue";


const tiktoks = ref(null);
const cursor = ref(0);
const total = ref(null)
const term = ref(null)


async function handleSubmit( username) {
	const data = await $fetch(`https://api.tik.fail/v2/search?usernames=${ username }&cursor=0&sortBy=date&legacySearch=true`, {});
	term.value = username
	tiktoks.value = data.itemList;
	cursor.value = data.lookup.pagination.nextCursor;
	total.value = data.lookup.pagination.total;
	
}
async function loadMore(  ) {
	const data = await $fetch(`https://api.tik.fail/v2/search?usernames=${term.value}&cursor=${cursor.value}&sortBy=date&legacySearch=true`, {});
	tiktoks.value = [...tiktoks.value, ...data.itemList]
	cursor.value = data.lookup.pagination.nextCursor;
}

</script>
<template>
	<main class="app container mx-auto py-10">
		<div class="hero min-h-screen bg-base-200">
			<div class="lg:flex-row  flex items-center">
				<div class="w-[40%] p-10">
					<img  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="w-3/4 mx-auto" />
				</div>
				<div class="w-[40%] p-10 flex-grow pl-16">
					<h1 class="text-5xl font-bold">Box Office News!</h1>
					<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	</main>


</template>
