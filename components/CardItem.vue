<script setup>
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const { tiktok: data } = defineProps([ 'tiktok' ]);

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const tikok = computed(() => {
  return data._tik
})
const metaData = computed(() => {
  return data.metadata;
})
const stats = computed(() => {
  return data.metadata.statistics;
});
const isLongText = computed(() => {
  return data.metadata.desc.length >= 20;
})
const desc = computed(() => {
  var regexp = /#\S+/g;
  let description = data.metadata.desc;
  description = description.replace(regexp, '').trim();
  description = description.replace(/ /g, "-");
  return description;
})
const duration = computed(() => {
  return millisToMinutesAndSeconds(data.metadata.video.duration);
})
</script>

<template>
  <div class="flex flex-col card-item">
    <!-- Image -->
    <CardImage :desc="desc"  :digg_count="stats?.digg_count" :duration="duration" :tiktok-id="metaData.aweme_id" :image="tikok.thumbnailDynamic" />
    <div class="flex flex-col justify-between">
      <div class="p-4 space-y-1">
        <!-- Card Description -->
        <h2 class="text-lg font-semibold tracking-tight truncate">
          <NuxtLink :to="`/tiktoks/${desc}-${metaData.aweme_id}`" class="hover:text-primary-600">
            {{ metaData.desc.slice(0, 40) }} {{ isLongText ? "..." : "" }}
          </NuxtLink>
        </h2>
        <!-- Card Info -->
        <div class="card-info text-gray-500">
          <!-- User Meta -->
          <div class="text-sm">
            <NuxtLink :to="`/user/${metaData.author.unique_id}`" class="font-semibold hover:text-primary-600">
              {{ metaData.author.nickname }}
            </NuxtLink>
            <br>
            <NuxtLink :to="`/user/${metaData.author.unique_id}`" class="font-medium hover:text-primary-600">
              {{ metaData.author.unique_id }}
            </NuxtLink>
            <span aria-hidden="true">·</span>
            {{ formatDistance(new Date(), new Date(metaData.create_time_ISO)) }}
          </div>
        </div>
        <!-- Card Info -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  @apply border border-gray-400 overflow-hidden shadow rounded-xl bg-white hover:scale-[1.04] hover:shadow-2xl ease-in-out duration-200
}

.tiktok-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.tiktok-badge {
  position: absolute;
  bottom: 10px;
  right: 12px;
}

.bg-image {
  background-repeat: no-repeat;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-position: center center;
}

.hover-bg:hover {
//background: rgba(19,0,96,.3);
}

.hover-bg {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: all 3ms ease-in-out;
}


.background {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>