<template>
  <div class="flex bg-primary place-content-center pt-24 pb-32 z-40">
    <div
      class="flex-col lg:flex-row gap-6 lg:gap-0 items-center lg:items-start text-center lg:text-start flex text-white lg:justify-around w-full max-w-[1440px]"
    >
      <NuxtImg class="!h-14 self-center" src="/svg/logo.svg"></NuxtImg>
      <div class="flex flex-col gap-3 lg:gap-6">
        <div class="font-bold text-2xl">Contactanos</div>
        <div class="flex flex-row text-lg gap-6 items-center">
          <NuxtImg class="h-5" src="svg/footergps.svg"></NuxtImg>
          <div class="flex flex-col">
            <span>San Martín 2437 - Rosario </span>
            <span>Prov. de Santa Fé - Argentina </span>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row text-lg gap-3 items-center">
          <button
            @click="openWindow()"
            class="flex flex-row gap-3 items-center"
          >
            <NuxtImg class="h-5" src="svg/footerwsp.svg"></NuxtImg>
            <span>+54 9 341 5709283</span>
          </button>
          <button class="flex flex-row gap-3 items-center">
            <NuxtImg class="h-5" src="svg/footerphone.svg"></NuxtImg>
            <span>0341 5278954</span>
          </button>
        </div>
        <a
          href="mailto:rosario@rodaservice.com.ar"
          class="flex flex-row text-lg gap-3 items-center"
        >
          <NuxtImg class="h-5" src="svg/footermail.svg"></NuxtImg>
          <span>rosario@rodaservice.com.ar</span>
        </a>
      </div>
      <div class="flex flex-col gap-3 lg:gap-6 items-center lg:items-start">
        <div class="font-bold text-2xl flex">Redes Sociales</div>
        <div class="flex flex-row gap-3">
          <NuxtLink to="https://www.instagram.com/rodaservice/" target="_blank"
            ><svgo-ig class="!h-7 !w-7"></svgo-ig
          ></NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/company/86398638/admin/page-posts/published/"
            target="_blank"
            ><svgo-li class="!h-7 !w-7"></svgo-li
          ></NuxtLink>
          <NuxtLink
            to="https://www.facebook.com/rodaservice/?locale=es_LA"
            target="_blank"
            ><svgo-fb class="!h-7 !w-7"></svgo-fb
          ></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const openWindow = () => {
  window.open("https://api.whatsapp.com/send?phone=5493415709283", "_blank");
};
</script>
