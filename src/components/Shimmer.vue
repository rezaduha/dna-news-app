<template>
  <div v-if="type === 'list'" v-for="i in count" class="w-full rounded-lg p-2 bg-gray-50 my-4" :key="i">
    <div class="flex animate-pulse gap-4">
      <div class="w-2/6 h-28 bg-gray-200 rounded-md mb-2"></div>
      <div class="flex-1">
        <div class="h-2 bg-gray-200 rounded-full w-3/5"></div>
        <div class="h-2 bg-gray-200 rounded-full my-2"></div>
        <div class="h-2 bg-gray-200 rounded-full w-2/5"></div>
      </div>
    </div>
  </div>

  <div v-if="type === 'masonry'" class="flex flex-col sm:flex-row sm:flex-wrap">
    <div class="flex w-full sm:w-1/2 flex-wrap lg:flex-row [&>div:first-child]:w-full [&>div>div>div>div:first-child]:h-72">
      <div v-for="i in 5" class="w-full lg:w-1/2 min-h-12 p-2" :key="i">
        <div class="p-2 rounded-lg bg-gray-50">
          <div class="flex flex-col gap-2 animate-pulse">
            <div class="h-40 bg-gray-200 rounded-md mb-2"></div>
            <div class="h-2 bg-gray-200 rounded-full w-3/5"></div>
            <div class="h-2 bg-gray-200 rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full sm:w-1/2 flex-wrap lg:flex-row [&>div:last-child]:w-full [&>div>div>div>div:first-child]:h-72">
      <div v-for="i in 5" class="w-full lg:w-1/2 min-h-12 p-2" :key="i">
        <div class="p-2 rounded-lg bg-gray-50">
          <div class="flex flex-col gap-2 animate-pulse">
            <div class="h-40 bg-gray-200 rounded-md mb-2"></div>
            <div class="h-2 bg-gray-200 rounded-full w-3/5"></div>
            <div class="h-2 bg-gray-200 rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: { // list | masonry
    type: String,
    required: true
  },
  count: { // only for shimmer card type
    type: Number,
    default: 1
  }
});
</script>
