<script setup>
import { computed } from 'vue'
function millisToMinutesAndSeconds(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
const { tiktok: data } = defineProps([ 'tiktok' ]);
const tikok = computed(() => {
	return data._tik
})
const metaData = computed(() => {
	return data.metadata;
})
const stats = computed(() => {
	return data.metadata.statistics;
});
const isLongText = computed(() => {
	return data.metadata.desc.length >= 20;
})
const duration = computed(() => {
	return  millisToMinutesAndSeconds(data.metadata.video.duration);
})
const placeHolderImage = "https://www.webdevdaily.io/_vercel/image?url=https://fmpffrpcrpptmolosdes.supabase.co/storage/v1/object/public/daily-challenges/challenge-11.png&w=1536&q=100"
</script>

<template>
	
	<div class="card shadow-lg cursor-pointer overflow-hidden rounded-md ease-in-out duration-200 hover:scale-[1.04] hover:shadow-xl" :key="tikok.id">
		<figure class="h-[200px] relative">
			<NuxtLink :to="`/tiktoks/${metaData.aweme_id}`">
				<!--				<div class="skeleton background tiktok-image"></div>-->
				<!--				<img :src="tikok.thumbnailDynamic" alt="Shoes" class="background tiktok-image"/>-->
				<img :src="placeHolderImage" alt="Shoes" class="background tiktok-image"/>
				<div class="hover-bg relative">
					<span class="tiktok-badge border-0 badge bg-slate-900 text-white opacity-90 font-medium text-xs">{{ duration }}</span>
				</div>
			
			</NuxtLink>
		</figure>
		<div class="card-body py-2 pb-3 gap-1.5">
			<h2 class="card-title p-0 m-0">{{ metaData.author.nickname }}</h2>
			<p class="card-text text-sm text-gray-500 m-0 p-0">{{ metaData.desc.slice(0, 40)}} {{ isLongText ? "..." : "" }}</p>
			<Transition>
				<div class="flex items-center justify-between text-xs flex-wrap=['none']">
					<h6> {{ new Date(metaData.create_time_ISO).toLocaleDateString() }}</h6>
					<h6>
						<font-awesome-icon icon="far fa-heart"/>
						{{ stats?.digg_count }}
					</h6>
					<h6>
						<font-awesome-icon icon="fas fa-play" class="mr-1"/>
						{{ stats?.play_count }}
					</h6>
					<h6>
						<font-awesome-icon icon="far fa-comment"/>
						{{ stats?.comment_count }}
					</h6>
				</div>
			</Transition>
		
		</div>
	
	
	</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
.tiktok-badge {
	position: absolute;
	bottom: 10px;
	right: 12px;
}
.bg-image {
	background-repeat: no-repeat;
	right: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
	background-position: center center;
}
.hover-bg:hover {
//background: rgba(19,0,96,.3);
}
.hover-bg {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	transition: all 3ms ease-in-out;
}

.background {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
</style>