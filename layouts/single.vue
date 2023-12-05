<script setup lang="ts">

import Footer from "~/components/Footer.vue";
</script>

<template>
	<div class="app min-h-screen bg-gray-200 flex flex-col">
		<!-- NavBar -->
		<NavBar/>
		<!-- Main Content Will Go Here -->
		<slot></slot>
		<!-- Footer -->
		<Footer />
	</div>
</template>

<style scoped>

</style>