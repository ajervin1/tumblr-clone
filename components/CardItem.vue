<script setup>
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { computed } from 'vue'

function millisToMinutesAndSeconds( millis ) {
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
const desc = computed(() => {
	var regexp = /#\S+/g;
	let description = data.metadata.desc;
	description = description.replace(regexp, '').trim();
	description = description.replace(/ /g, "-");
	return description;
})
const duration = computed(() => {
	return millisToMinutesAndSeconds(data.metadata.video.duration);
})
const placeHolderImage = "https://www.webdevdaily.io/_vercel/image?url=https://fmpffrpcrpptmolosdes.supabase.co/storage/v1/object/public/daily-challenges/challenge-11.png&w=1536&q=100"
</script>

<template>
	
	<div
		 class="flex flex-col overflow-hidden shadow rounded-xl bg-white hover:scale-[1.04] hover:shadow-2xl ease-in-out duration-200">
		<figure class="relative aspect-w-1 aspect-h-1" style="/*! background: blue; */">
			<NuxtLink :to="`/tiktoks/${desc}-${metaData.aweme_id}`">
				<img :src="tikok.thumbnailDynamic" alt="Shoes"
				     class="absolute w-full h-full object-cover inset-0"/>
			</NuxtLink>
		</figure>
		<div class="flex flex-col justify-between flex-1">
			<div class="flex-1">
				<div class="p-4 space-y-1">
					<h2 class="text-lg font-semibold tracking-tight truncate">
						<NuxtLink :to="`/tiktoks/${desc}-${metaData.aweme_id}`" class="hover:text-primary-600">
							{{ metaData.desc.slice(0, 40) }} {{
								isLongText ? "..." : ""
							}}
						</NuxtLink>
					</h2>
					
					<h3 class="text-gray-500">
						<!-- PlayCount and Duration -->
						<div class="relative">
							<div class="absolute -inset-x-2 bottom-14">
								<div class="flex justify-between">
									<span
										 class="inline-flex gap-1 items-center justify-center font-semibold tracking-tight rounded-full h-6 px-2 text-sm text-white bg-black/80">
										<Icon name="mdi:play" class="w-4 h-4 text-white "/>
										<span>{{ stats?.digg_count }}</span>
									</span>
									<span
										 class="inline-flex items-center justify-center font-semibold tracking-tight rounded-full h-6 px-2 text-sm text-white bg-black/80">
										<span>{{ duration }}</span>
									</span>
								</div>
							</div>
						</div>
						<!-- User Meta -->
						<div class="text-sm">
							<NuxtLink :to="`/user/${metaData.author.unique_id}`" class="font-semibold hover:text-primary-600">
								{{ metaData.author.nickname }}
							</NuxtLink>
							<br>
							<NuxtLink :to="`/user/${metaData.author.unique_id}`" class="font-medium hover:text-primary-600">
								{{ metaData.author.unique_id }}
							</NuxtLink>
							<span aria-hidden="true">·</span>
							{{ formatDistance(new Date(), new Date(metaData.create_time_ISO)) }}
						
						</div>
					</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>


/*
figure {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
}
*/

.tiktok-image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

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