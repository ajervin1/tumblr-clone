<script setup lang="ts">

import {storeToRefs} from "pinia";
import useAppStore from "~/stores/appstore";
const store = useAppStore()

</script>

<template>
	<section class="container mx-auto py-4">
		<div class="grid gap-4 gap-y-8 md:gap-6 md:grid-cols-2 xl:grid-cols-3 grid-cols-5 tablet:grid-cols-2 phone:grid-cols-1">
			<TransitionGroup name="list" appear>
				<CardItem v-for="tiktok in store.tiktoks" :tiktok="tiktok" :key="tiktok._tik.id"/>
			</TransitionGroup>
		</div>
	</section>
</template>

<style scoped>

</style>