<script setup lang="ts">
import SearchForm from "~/components/SearchForm.vue";
import useStore from "~/store";

const store = useStore();


</script>

<template>
	<!-- NavBar -->
	<header class="bg-base-100 shadow">
		<div class="navbar container mx-auto py-3 px-0">
			<div class="flex-1">
				<NuxtLink class="uppercase text-xl font-bold tracking-wider" to="/">
					<img class="w-[75px] h-[75px]" src="https://www.webdevdaily.io/_vercel/image?url=/images/webdevdaily_logo.png&w=320&q=100" alt="">
				</NuxtLink>
			</div>
			<div class="flex-none gap-2">
				<div class="form-control">
					<SearchForm/>
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