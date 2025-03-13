<template>
  <div
    class="flex flex-col shadow-xl rounded-lg overflow-hidden border-[#e4e4e4] border hover:scale-105 transition-all duration-300"
  >
    <NuxtImg
      class="w-full aspect-square drop-shadow-lg"
      :src="'img/Productos/' + img"
      :alt="texto"
    ></NuxtImg>
    <div
      class="lg:pb-9 lg:px-9 lg:pt-5 flex flex-col px-2 py-1 lg:text-lg font-medium text-center lg:text-start"
    >
      {{ texto }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["img", "texto"]);
</script>
