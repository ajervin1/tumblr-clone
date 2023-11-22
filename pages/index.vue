<!-- Trending Page -->
<script setup lang="ts">
useHead({
	title: `TikTokFlow | Trending TikToks`,
	meta: [
		{name: "description", content: "Trending TikToks"}
	]
})
import useStore from "~/store";


const store = useStore();
await store.searchByHashtag('foryou');

const fetchingData = ref(false);

async function loadMore() {
	
	await store.searchByHashtag('foryou', store.pagination.nextCursor);
	fetchingData.value = false;
}

const triggerEl = ref();
const timer = ref()

function observeLoadMore() {
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			fetchingData.value = true;
			clearTimeout(timer.value);
			timer.value = setTimeout(() => {
				loadMore();
			}, 300)
			// loadMore()
		}
	}, {threshold: 1})
	observer.observe(triggerEl.value)
}

onMounted(() => {
	// observeLoadMore();
})
</script>
<template>
	<main class="app min-h-screen">
		<NavBar/>
		<!-- Trending Heading -->
		<div class="container mx-auto py-4 max-w-screen space-y-1">
			<h3 class="text-2xl font-semibold tracking-tight">Trending Clips</h3>
			<p class="text-gray-500">Stay up to date with the latest viral trends that are sweeping across TikTok</p>
		</div>
		
		
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div class="tiktok-grid">
				<TransitionGroup name="list">
					<TikTokItem v-for="tiktok in store.tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
				</TransitionGroup>
			</div>
			<!--			<button class="btn btn-primary btn-md my-10" @click="loadMore">Load More</button>-->
		</section>
		<!-- Trigger Element For Load More Intersection Observer-->
		<div ref="triggerEl"></div>
		<div class="container mx-auto text-center py-4">
			<Icon
				 v-if="fetchingData"
				 name="line-md:loading-alt-loop"
				 color="#ff731d"
				 width="60"
				 height="60"
			/>
		</div>
		<div class="bg-white border border-t border-slate-300 ">
			<footer class="container mx-auto py-12 flex gap-4  justify-between">
				<div class="logo">
					<p class="text-base  text-gray-500">
						This site is in no way affilated with TikTok.
						<br>
						<a href="https://clipr.xyz/privacy-policy" class="text-primary-600">
							Privacy Policy
						</a>
						<span aria-hidden="true">·</span>
						<a href="https://clipr.xyz/page/terms-of-service" class="text-primary-600">
							Terms of Service
						</a>
					</p>
				</div>
				<div class="icons flex items-center gap-10">
					<Icon name="mdi:twitter" class="w-6 h-6 text-gray-500" />
					<Icon name="mdi:github" class="w-6 h-6 text-gray-500" />
					<Icon name="mdi:instagram" class="w-6 h-6 text-gray-500" />
					<Icon name="mdi:discord" color="#" width="20" height="20"/>
				</div>
			</footer>
		
		</div>
	
	
	</main>


</template>
<style>
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.tiktok-grid {
	display: grid;
	width: 100%;
	grid-gap: 24px 16px;
	grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
}
</style>