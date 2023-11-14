<script setup>
import { computed } from 'vue'

const { tiktok: data } = defineProps([ 'tiktok' ]);
const tikok = computed(() => {
	return data._tik
})
const metaData = computed(() => {
	return data.metadata;
})
const stats = computed(() => {
	return data.metadata.statistics;
})
</script>

<template>
	<div class="card shadow-xl bg-neutral" :key="tikok.id">
		<figure class="h-[375px] relative">
<!--			<div class="bg-image"-->
<!--			:style="{color: 'blue',backgroundImage: `url(${tikok.thumbnailDynamic})`}"-->
<!--			></div>-->
			<NuxtLink :to="`/tiktoks/${metaData.aweme_id}`" >
				<img :src="tikok.thumbnailDynamic" alt="Shoes" class="background"/>
			</NuxtLink>
		</figure>
		<div class="card-body py-2 pb-3">
			<h2 class="card-title">{{ metaData.author.nickname }}</h2>
			<p class="text-sm">{{ metaData.desc }}</p>
			<div class="flex items-center justify-between text-xs flex-wrap=['none']">
				<h6> {{ new Date(metaData.create_time_ISO).toLocaleDateString() }}</h6>
				<h6>
					<font-awesome-icon icon="far fa-heart"/>
					{{ stats.digg_count }}
				</h6>
				<h6>
					<font-awesome-icon icon="fas fa-play" class="mr-1"/>
					{{ stats.play_count }}
				</h6>
				<h6>
					<font-awesome-icon icon="far fa-comment"/>
					{{ stats.comment_count }}
				</h6>
			</div>
		</div>
	
	
	</div>
</template>

<style scoped>
.bg-image {
	background-repeat: no-repeat;
	right: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
	background-position: center center;
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