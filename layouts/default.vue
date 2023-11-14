<script setup lang="ts">

</script>

<template>
<main>
	<header>
		<h2>Header</h2>
	</header>
	<!-- Output Page Content Here -->
	<main>
		<slot></slot>
	</main>
</main>
</template>

<style scoped>
.router-link-exact-active {
	color: blue;
}
</style>