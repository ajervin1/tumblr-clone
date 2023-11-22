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
	<main class="app min-h-screen bg-gray-100">
		<!-- Trending Heading -->
		<div class="container mx-auto py-4 max-w-screen space-y-1">
			<h3 class="text-2xl font-semibold tracking-tight">Trending Clips</h3>
			<p class="text-gray-500">Stay up to date with the latest viral trends that are sweeping across TikTok</p>
		</div>
		
		
		<!-- Main Content -->
		<section class="container mx-auto py-4">
			<div
				 class="grid gap-4 gap-y-8 md:gap-6 md:grid-cols-2 xl:grid-cols-3 grid-cols-5 tablet:grid-cols-2 phone:grid-cols-1">
				<TransitionGroup name="list">
					<CliprItem v-for="tiktok in store.tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
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