<script setup lang="ts">
import SearchForm from "~/components/SearchForm.vue";


// async function handleSubmit( username ) {
// 	const data = await $fetch(`https://api.tik.fail/v2/search?usernames=${ username }&cursor=0&sortBy=date&legacySearch=true`, {});
// 	term.value = username
// 	tiktoks.value = data.itemList;
// 	cursor.value = data.lookup.pagination.nextCursor;
// 	total.value = data.lookup.pagination.total;
// }
</script>

<template>
	<!-- NavBar -->
	<header class="bg-base-300">
		<div class="navbar container mx-auto py-3">
			<div class="flex-1">
				<NuxtLink class="btn btn-ghost normal-case text-xl" to="/">TikTok Flow</NuxtLink>
			</div>
			<div class="flex-none gap-2">
				<div class="form-control">
<!--					<SearchForm @search="handleSubmit"/>-->
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
</template>

<style scoped>

</style>