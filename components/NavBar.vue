<script setup lang="ts">



</script>

<template>
	<!-- NavBar -->
	<header class="bg-primary-700 shadow">
		<div class="navbar container mx-auto py-5 px-0 justify-between">
			<div class="logo">
				<NuxtLink class="text-xl font-bold tracking-wider" to="/">
					<h1 class="text-white  text-[23px]">TikTok Flow</h1>
<!--					<img class="w-auto h-8 mt-1 ml-2" src="https://clipr.xyz/img/logo/default-monochrome-white.svg" alt="Clipr">-->
				</NuxtLink>
			</div>
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