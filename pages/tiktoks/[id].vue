<!-- ShowPage /tiktoks/:id -->
<script setup lang="ts" type="module">
/*Display individual tiktok
* Display Individual TikTok
* Get her from clicking on the tiktok image
* This page will help navigate to the music user and hashtag page
* */
import useStore from "~/store";

const store = useStore();
const route = useRoute()

await store.fetchTikTokById(route.params.id);
const data = {
	_tik: store.tiktok.itemList[0]._tik,
	metadata: store.tiktok.itemList[0].metadata,
}
// Can just pull data out of store results
const hashtags = data.metadata.text_extra.map(hash => hash.hashtag_name);
// var regexpHashtag = new RegExp(/#[a-zA-Z\d]+/g);
var regexp = /#\S+/g;
let description = data.metadata.desc;
description = description.replace(regexp, '');
function millisToMinutesAndSeconds(millis) {
	const minutes = Math.floor(millis / 60000);
	const seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

</script>

<template>
	<main class="show-container pb-10">
		<NavBar/>
		<article class="single-item w-[380px] mx-auto mb-4 pt-4">
			<!-- Video Item -->
			<figure class="">
				<video controls :src="data._tik.video" class="w-full h-auto shadow-2xl rounded"></video>
			</figure>
		</article>
		<!-- Video Meta Data -->
		<!-- Icons -->
		<section class="container mx-auto  w-[70%] bg-gray-700 shadow-2xl p-4 px-8">
			<div class="flex gap-10">
				<NuxtLink :to="`/user/${data.metadata.author.unique_id}`" class="avatar-container">
					<img :src="`https://v2-thumbs-tiktok.files.fail/avatar/${data.metadata.author.unique_id}.jpeg`"
					     class="w-36 rounded-full" alt="">
				</NuxtLink>
				<!-- Author Info -->
				<div class="metadata flex flex-col justify-evenly flex-grow">
					<div class="flex items-center gap-2">
						<h2 class="text-lg font-semibold text-white">{{ data.metadata.author.nickname }}</h2>
						<NuxtLink to="`/user/${data.metadata.author.unique_id}`" class="font-semibold text-neutral-400">@{{ data.metadata.author.unique_id }}</NuxtLink>
					</div>
					<div class="flex gap-2 flex-wrap items-center">
						<!-- Description -->
						<p class="text-neutral-400 lead font-normal">{{ description }}</p>
						<!-- Hashtags -->
						<div class="flex flex-wrap gap-2">
							<NuxtLink class="text-blue-500" v-for="hash in hashtags" :to="`/hashtag/${hash}`">
								#{{ hash }}
							</NuxtLink>
						</div>
					</div>
		
			
					<!-- Music Info -->
					<div class="music flex items-center gap-1.5">
						<font-awesome-icon icon="fas fa-music "/>
						<NuxtLink :to="`/music/${data.metadata.music.title}`" class="font-semibold text-lg text-white">{{ data.metadata.music.title }}</NuxtLink>
						<h6 class="text-sm">> {{ data.metadata.music.author }}</h6>
					</div>
					<!-- Icons -->
					<div class="flex items-center justify-between text- flex-wrap=['none']">
						<h6> {{ new Date(data.metadata.create_time_ISO).toLocaleDateString() }}</h6>
						<h6>
							<font-awesome-icon icon="far fa-heart"/>
							{{ data.metadata.statistics.digg_count }}
						</h6>
						<h6>
							<font-awesome-icon icon="fas fa-play" class="mr-1"/>
							{{ data.metadata.statistics.play_count }}
						</h6>
						<h6>
							<font-awesome-icon icon="fas fa-comment"/>
							{{ data.metadata.statistics.comment_count }}
						</h6>
					</div>
				</div>
			</div>
		</section>
		<!-- Video Meta Data -->
	</main>
</template>

<style scoped>
.show-container {
	min-height: 100vh;
}
</style>