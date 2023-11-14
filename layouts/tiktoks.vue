<script setup lang="ts">

</script>

<template>
	<main>
		<header>
			<h2>Header</h2>
		</header>
		<main>
			<slot>
				<!-- Output Page Content Here -->
			</slot>
		</main>
		<footer>
			<h2>Footer</h2>
		</footer>
	</main>
</template>

<style scoped>
.router-link-exact-active {
	color: blue;
}
</style>