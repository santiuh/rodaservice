<template>
  <NuxtLayout class="font-raleway">
    <NuxtPage class="" />
  </NuxtLayout>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk
      ? `${titleChunk} | Roda Service`
      : "Roda Service - Venta de Rodamientos",
  meta: [
    {
      name: "description",
      content:
        "Compra rodamientos industriales, automotrices y agrícolas al mejor precio. Gran stock y entrega rápida.",
    },
    {
      name: "keywords",
      content:
        "rodamientos, industriales, automotrices, agrícolas, SKF, NSK, FAG, venta online",
    },
    {
      property: "og:title",
      content: "Roda Service - Rodamientos Industriales y Automotrices",
    },
    {
      property: "og:description",
      content:
        "Stock amplio de rodamientos para la industria y el agro. Envíos a todo el país.",
    },
    {
      property: "og:image",
      content: "https://tu-sitio.com/img/rodamientos.jpg",
    },
    { property: "og:url", content: "https://tu-sitio.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Roda Service - Venta de Rodamientos" },
    {
      name: "twitter:description",
      content: "Especialistas en rodamientos industriales y automotrices.",
    },
    {
      name: "twitter:image",
      content: "https://tu-sitio.com/img/rodamientos.jpg",
    },
  ],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
