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
	observeLoadMore();
})
</script>
<template>
	<main class="app min-h-screen">
		<NavBar/>
		<!-- Trending Heading -->
		<div class="container mx-auto py-4 max-w-screen">
			<h2 class="page-heading">Trending Clips</h2>
			<h6 class="page-subtitle">Stay up to date with the latest viral trends that are sweeping across TikTok</h6>
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
			<footer class="container mx-auto py-4 flex gap-4 items-center justify-between">
				<div class="logo">
					<img class="w-[75px] h-[75px]"
					     src="https://www.tiktokstalk.com/public/img/template/tiktokhub-footer-logo.svg" alt="">
				</div>
				<div class="links flex items-center gap-3">
					<a href="">Contact</a>
					<a href="">Privacy Policy</a>
					<a href="">Terms of Service</a>
				</div>
				<div class="icons flex items-center gap-10">
					<Icon name="mdi:twitter" color="#" width="20" height="20"/>
					<Icon name="mdi:github" color="#" width="20" height="20"/>
					<Icon name="mdi:instagram" color="#" width="20" height="20"/>
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