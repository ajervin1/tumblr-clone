<script setup lang="ts">
import SearchForm from "~/components/SearchForm.vue";
import useStore from "~/store";

const store = useStore();


</script>

<template>
	<!-- NavBar -->
	<header class="bg-primary-700 shadow">
		<div class="navbar container mx-auto py-5 px-0 justify-between">
			<div class="logo">
				<NuxtLink class="uppercase text-xl font-bold tracking-wider" to="/">
					<img class="w-auto h-8 mt-1 ml-2" src="https://clipr.xyz/img/logo/default-monochrome-white.svg" alt="Clipr">
				</NuxtLink>
			</div>
<!--			<div class="space-x-8 lg:flex">
				<a href="https://clipr.xyz" class="text-base font-medium text-white hover:text-gray-300">
					Home
				</a>
				<a href="https://clipr.xyz/trending" class="text-base font-medium text-white hover:text-gray-300">
					Trending
				</a>
				<a href="https://clipr.xyz/blog" class="text-base font-medium text-white hover:text-gray-300">
					Blog
				</a>
				<a href="javascript: u = document.location.href; void(window.open('https://clipr.xyz' + window.location.pathname, '_blank', 'width=725,height=500,status=yes,resizable=yes,scrollbars=yes'));" class="text-base font-medium text-white hover:text-gray-300">
					Bookmarklet
				</a>
				<a href="https://clipr.xyz/donate" class="text-base font-medium text-white hover:text-gray-300">
					Donate
				</a>
			</div>-->
			<div class="flex-none gap-2">
				<div class="form-control">
					<SearchForm/>
				</div>
			</div>
		</div>
	
	</header>
</template>

<style scoped>

</style>