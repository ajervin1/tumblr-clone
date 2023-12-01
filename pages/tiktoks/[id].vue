<!-- ShowPage /tiktoks/:id -->
<script setup>
/*Display individual tiktok
* Display Individual TikTok
* Get her from clicking on the tiktok image
* This page will help navigate to the music user and hashtag page
* */


import useAppStore from "~/stores/appstore.js";

const config = useRuntimeConfig()
definePageMeta({
	layout: 'single'
})
const store = useAppStore();
const route = useRoute();
const strings = route.params.id.split("-");
const tiktokId = strings[strings.length - 1];
await store.fetchTikTokById(tiktokId);
const data = {
	_tik: store.tiktok.itemList[0]._tik,
	metadata: store.tiktok.itemList[0].metadata,
}
// Can just pull data out of store results
let hashtags = data.metadata.text_extra.filter(hash => hash.hashtag_name);
if ( hashtags.length ){
	hashtags = data.metadata.text_extra.map(hash => hash.hashtag_name);
}
// var regexpHashtag = new RegExp(/#[a-zA-Z\d]+/g);
var regexp = /#\S+/g;
let description = data.metadata.desc;
description = description.replace(regexp, '').trim()

useHead({
	link: [
		{
			rel: "canonical",
			href: `${ config.public.baseUrl}/tiktoks/${ route.params.id }`
		}
	],
	title: `${ description } @${ data.metadata.author.unique_id } - Tiktok Viewer`,
	meta: [
		{ name: "description", content: `${ data.metadata.desc } - @${ data.metadata.author.unique_id }` },
		{
			name: "keywords",
			content: `@${ data.metadata.author.unique_id }, ${ data.metadata.author.nickname }, tiktok movie, tiktok video, tiktok viewer, tiktok player`
		}
	]
})

console.log(hashtags.length)
function millisToMinutesAndSeconds( millis ) {
	const minutes = Math.floor(millis / 60000);
	const seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

</script>

<template>
	<main class="show-page">
		<section class="container mx-auto pt-5">
			<!-- Grid Container -->
			<div class="grid grid-cols-2 gap-10">
				<!-- Video Item -->
				<article class="single-item rounded-3xl">
					<!-- Video Item -->
					<figure class="w-[55%] mx-auto">
						<video controls :src="data._tik.video" class="w-full h-auto shadow-2xl rounded"></video>
					</figure>
				</article>
				<!-- Video Meta Data -->
				<section class="">
					<div class="flex gap-10 shadow-xl bg-white p-4 border border-gray-300 rounded-xl">
						<!-- Avatar -->
						<NuxtLink :to="`/user/${data.metadata.author.unique_id}`" class="avatar-container">
							<img :src="`https://v2-thumbs-tiktok.files.fail/avatar/${data.metadata.author.unique_id}.jpeg`"
							     class="w-36 rounded-full" alt="">
						</NuxtLink>
						<!-- Author Info -->
						<div class="metadata flex flex-col justify-evenly flex-grow gap-4">
							<!-- UserName Info -->
							<div class="flex items-center gap-2">
								<NuxtLink :to="`/user/${data.metadata.author.unique_id}`" class="text-lg font-semibold hover:text-primary-700">{{ data.metadata.author.nickname }}</NuxtLink>
								<NuxtLink :to="`/user/${data.metadata.author.unique_id}`"
								          class="text-gray-500 font-medium hover:text-primary-700">
									@{{ data.metadata.author.unique_id }}
								</NuxtLink>
							</div>
							<!-- Description Hashtags -->
							<div class="flex flex-wrap gap-2 items-center">
								<!-- Description -->
								<p v-if="description !== ''" class="text-neutral-400 lead font-normal">{{ description }}</p>
								<!-- Hashtags -->
								<div class="flex flex-wrap gap-2">
									<NuxtLink class="text-blue-500 hover:text-gray-500" v-if="hashtags.length" v-for="hash in hashtags"
									          :to="`/hashtag/${hash}`">
										#{{ hash }}
									</NuxtLink>
								</div>
							</div>
							<!-- Music Info -->
							<div class="music flex items-center gap-3 flex-wrap">
								<NuxtLink :to="`/music/${data.metadata.music.title}`"
								          class="font-semibold text-lg tracking-wide hover:text-primary-700 flex items-center gap-1">
									<Icon name="mdi:music" class="w-6 h-6"/>
									{{ data.metadata.music.title }} -
								</NuxtLink>
								<h6 class="text-gray-500 font-medium">{{ data.metadata.music.author }}</h6>
							</div>
							<!-- Icons -->
							<div class="flex items-center justify-between text- flex-wrap=['none']">
								<h6 class="flex items-center gap-2">
									<Icon name="mdi:calendar" class="w-5 h-5"/>
									{{ new Date(data.metadata.create_time_ISO).toLocaleDateString() }}
								</h6>
								<h6 class="flex items-center gap-2">
									<Icon name="mdi:heart" class="w-5 h-5"/>
									{{ data.metadata.statistics.digg_count }}
								</h6>
								<h6 class="flex items-center gap-2">
									<Icon name="mdi:play" class="w-5 h-5"/>
									{{ data.metadata.statistics.play_count }}
								</h6>
								<h6 class="flex items-center gap-2">
									<Icon name="mdi:comment" class="w-5 h-5"/>
									{{ data.metadata.statistics.comment_count }}
								</h6>
							</div>
						</div>
					</div>
				</section>
				<!-- Video Meta Data -->
			</div>
		</section>
	
	</main>
</template>

<style scoped>
.single-item {
	box-shadow: 0 0 4px red;
	background: #222;
	background-image: url("http://localhost:3000/background.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	
	width: 100%;
	height: 100%;
}

.show-container {
	min-height: 100vh;
}
</style>