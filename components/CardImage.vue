<script setup lang="ts">
const {desc, digg_count, image, duration, tiktokId } = defineProps(['desc', 'tiktokId', 'digg_count', 'duration', 'image'])
</script>

<template>
  <NuxtLink class="relative aspect-w-1 aspect-h-1" :to="`/tiktoks/${desc}-${tiktokId}`">
    <img :src="image" alt="Shoes"
         class="absolute w-full h-full object-cover"/>
    <div class="badges">
      <div class="absolute bottom-4 right-3 left-3">
        <div class="flex justify-between">
									<span
                      class="inline-flex gap-1 items-center justify-center font-semibold tracking-tight rounded-full h-6 px-2 text-sm text-white bg-black/80">
										<Icon name="mdi:play" class="w-4 h-4 text-white "/>
										<span>{{ digg_count }}</span>
									</span>
          <span
              class="inline-flex items-center justify-center font-semibold tracking-tight rounded-full h-6 px-2 text-sm text-white bg-black/80">
										<span>{{ duration }}</span>
									</span>
        </div>
      </div>
    </div>
  </NuxtLink>

</template>

<style scoped>

</style>