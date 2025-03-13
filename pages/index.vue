<template>
  <div class="flex flex-col">
    <HomeHero></HomeHero>
    <HomeSec1></HomeSec1>
    <HomeSec2></HomeSec2>
    <HomeSec3></HomeSec3>
    <HomeSec4></HomeSec4>
  </div>
</template>
<script setup>
useHead({
  title: "Roda Service",
  meta: [
    {
      name: "description",
      content:
        "Descubre las marcas que distribuimos en Roda Service, incluyendo DBH, ETMA, FERSA, HCH, IKO, KOYO, KUGELL, LOCTITE, MBS, NACHI, NSK, NTN, PESARO, ROLLWAY, y VAR-NTN.",
    },
    {
      name: "keywords",
      content:
        "marcas, DBH, ETMA, FERSA, HCH, IKO, KOYO, KUGELL, LOCTITE, MBS, NACHI, NSK, NTN, PESARO, ROLLWAY, VAR-NTN, Roda Service, rodamientos, autopartes",
    },
    { name: "author", content: "Roda Service" },
    { property: "og:title", content: "Marcas - Roda Service" },
    {
      property: "og:description",
      content: "Descubre las marcas que distribuimos en Roda Service.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.rodaservice.com/marcas" },
    {
      property: "og:image",
      content: "https://www.rodaservice.com/img/og-image.jpg",
    },
  ],
});
</script>
