
<script setup >
const { data, error } = await useAsyncData(`tiktoks`, () => {
	return $fetch("https://api.tik.fail/v2/search?usernames=avajustin&cursor=0&sortBy=date&legacySearch=true",  );
});
console.log(data.value);
</script>
<template>
	<main class="app container mx-auto py-10 ">
		<div class="grid grid-cols-3 gap-8">
			<TikTokItem v-for="tiktok in data.itemList" :tiktok="tiktok" />
		</div>
	</main>

</template>
