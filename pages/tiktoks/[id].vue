<script setup >

const route = useRoute()
const url = `https://api.tik.fail/v2/search?videoID=${route.params.id}`
// When accessing /posts/1, route.params.id will be 1
const {data} = await useFetch(url, {key: route.params.id, server: true,
	transform: (item) => {
		return item.itemList[0];
	},
	pick: ["_tik", 'metadata']
});

function millisToMinutesAndSeconds(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

</script>

<template>
	<main class="show-container pb-10">
		<article class="single-item w-[380px] mx-auto mb-4">
			<!-- Video Item -->
			<figure class="">
				<video controls :src="data._tik.video" class="w-full h-auto shadow-2xl rounded"></video>
			</figure>
		</article>
		<!-- Video Meta Data -->

		<!-- Icons -->
		<section class="container mx-auto  w-[70%] bg-gray-700 shadow-2xl p-4 px-8">
			<div class="flex gap-10">
				<figure class="avatar-container">
					<img :src="`https://v2-thumbs-tiktok.files.fail/avatar/${data.metadata.author.unique_id}.jpeg`" class="w-36 rounded-full" alt="" >
				</figure>
				<div class="metadata flex flex-col justify-evenly flex-grow">
					<div class="flex items-center gap-2">
						<h2 class="text-lg font-semibold text-white">{{ data.metadata.author.nickname }}</h2>
						<h6 class="font-semibold text-neutral-400">@{{ data.metadata.author.unique_id }}</h6>
					</div>
					<p class="text-neutral-400 lead font-normal">{{ data.metadata.desc }}</p>
					<div class="music flex items-center gap-1.5">
						<font-awesome-icon icon="fas fa-music "/>
						<h2 class="font-semibold text-lg text-white">{{ data.metadata.music.title }}</h2>
						<h6 class="text-sm">> {{ data.metadata.music.author }}</h6>
					</div>
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
							<font-awesome-icon icon="far fa-comment"/>
							{{ data.metadata.statistics.comment_count }}
						</h6>
					</div>
				
				</div>
				
				<!--				<pre>{{ data.metadata}}</pre>-->
<!--				<p>Description {{ data.metadata.desc }}</p>-->

<!--				<h2>Music Duration {{ data.metadata.music.duration }}</h2>-->
			</div>
		
		</section>
	</main>
</template>

<style scoped>
.show-container {
	min-height: 100vh;
}
</style>