<script setup >
const {size} = defineProps(['size']);
let width = size ? size : + "40"
width = "w-" + width;
</script>

<template>
	<button tabindex="0" class="avatar">
		<div :class="width"   >
			<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
		</div>
	</button>
</template>

<style scoped>

</style>