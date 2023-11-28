<script setup lang="ts">

</script>

<template>
	<div class="app min-h-screen bg-gray-200 flex flex-col">
		<!-- NavBar -->
		<NavBar/>
		<!-- Main Content Will Go Here -->
		<slot></slot>
		<!-- Footer -->
		<footer class="mt-auto container mx-auto py-12 flex gap-4  justify-between">
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
				<Icon name="mdi:twitter" class="w-6 h-6 text-gray-500"/>
				<Icon name="mdi:github" class="w-6 h-6 text-gray-500"/>
				<Icon name="mdi:instagram" class="w-6 h-6 text-gray-500"/>
				<Icon name="mdi:discord" class="w-6 h-6 text-gray-500"/>
			
			</div>
		</footer>
	</div>
</template>

<style scoped>

</style>