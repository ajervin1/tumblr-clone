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
	<main class="app container mx-auto py-10 ">
		<div class="navbar bg-base-100">
			<div class="flex-1">
				<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="flex-none gap-2">
				<div class="form-control">
					<input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
				</div>
				<!-- DropDown -->
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
				</div>
			</div>
		</div>
		

		<SearchForm @search="handleSubmit"/>
		<div class="grid grid-cols-3 gap-8">
			<TikTokItem v-if="tiktoks" v-for="tiktok in tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
		</div>
		<button class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>
	</main>


</template>
