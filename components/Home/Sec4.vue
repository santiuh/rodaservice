<template>
  <div
    class="flex flex-col items-center"
    style="
      background: rgb(28, 38, 70);
      background: linear-gradient(
        90deg,
        rgba(28, 38, 70, 1) 0%,
        rgba(35, 50, 86, 1) 22%,
        rgba(55, 82, 128, 1) 100%
      );
    "
  >
    <div
      class="flex-col lg:flex-row flex text-white max-w-[1440px] px-10 pt-40 pb-4 lg:pb-32 w-full"
    >
      <div class="flex flex-col lg:w-4/5">
        <div class="flex flex-col gap-3 mb-12 lg:w-3/5">
          <h1 class="font-extrabold text-4xl lg:text-6xl text-nowrap">
            Más de 50 años
          </h1>
          <h1 class="font-extrabold text-4xl lg:text-6xl text-nowrap">
            en el mercado
          </h1>
          <p class="text-xl lg:text-2xl">
            Nuestro objetivo es brindar el mejor servicio, por eso contamos con
            gran stock de las mejores marcas.
          </p>
        </div>

        <VButton
          class="!text-primary w-full lg:w-fit"
          titulo="Conocé nuestra&nbsp;historia"
          @click="router.push('/Empresa')"
        ></VButton>
      </div>
      <!-- arranca acá -->

      <div
        data-aos="slide-up"
        class="flex flex-col z-20 lg:w-2/5 relative mt-10 lg:mt-0"
      >
        <div
          class="border-b-white relative border-b font-extrabold text-4xl px-11 pb-3"
        >
          {{ datos.year }}
          <span
            class="absolute rounded-full z-10 h-8 w-8 bg-sky-500 -bottom-4 -left-3 animate-ping hover:cursor-pointer"
            @click="router.push('/Empresa')"
          ></span>
          <span
            class="absolute rounded-full z-10 h-8 w-8 bg-sky-500 -bottom-4 -left-3 hover:cursor-pointer"
            @click="router.push('/Empresa')"
          ></span>
        </div>
        <div class="text-xl lg:text-4xl px-11 z-0 slide-left border-l-8 pt-5">
          {{ datos.info }}
        </div>
        <div
          style="height: 250%"
          class="absolute top-10 h-full bg-primary border-l-8 flex"
        ></div>
      </div>

      <!-- termina acá -->
    </div>
    <div
      class="flex flex-col lg:flex-row place-content-center lg:pt-10 pb-28 w-full z-20 bg-no-repeat bg-cover bg-[url('/svg/Sec4BG.svg')]"
    >
      <div
        class="flex flex-col lg:flex-row max-w-[1440px] px-10 py-10 w-full items-center justify-between"
      >
        <NuxtImg class="lg:!w-1/2" src="svg/Sec4Laptop.svg"></NuxtImg>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col">
            <p class="text-4xl lg:pt-0 pt-6">Nuevo</p>
            <p class="text-4xl font-semibold">Catálogo Digital</p>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex flex-row gap-3 font-medium text-lg">
              <NuxtImg src="svg/Sec4Check.svg"></NuxtImg>
              <p>Rapidez en la consulta de stock</p>
            </div>
            <div class="flex flex-row gap-3 font-medium text-lg">
              <NuxtImg src="svg/Sec4Check.svg"></NuxtImg>
              <p>Precios y stock actualizados las 24 hs.</p>
            </div>
            <div class="flex flex-row gap-3 font-medium text-lg">
              <NuxtImg src="svg/Sec4Check.svg"></NuxtImg>
              <p>Pedidos por carrito</p>
            </div>
          </div>
          <div class="hidden lg:flex flex-row gap-3">
            <NuxtLink target="_blank" to="https://catalogo.rodaservice.com.ar/">
              <VButton
                titulo="Acceso Clientes"
                class="!bg-primary !text-white !text-xl border-primary border-2"
              ></VButton>
            </NuxtLink>

            <VButton
              @click="openWindow()"
              titulo="Solicitar Manual de uso"
              class="!bg-white !border-2 !border-primary !text-xl"
            ></VButton>
          </div>
        </div>
      </div>
      <div class="flex lg:hidden flex-col lg:flex-row gap-3 items-center">
        <NuxtLink
          class="!w-2/3"
          target="_blank"
          to="https://catalogo.rodaservice.com.ar/"
        >
          <VButton
            titulo="Acceso Clientes"
            class="!bg-primary !text-white !justify-center"
          ></VButton>
        </NuxtLink>

        <VButton
          @click="openWindow()"
          titulo="Solicitar Manual&nbsp;de&nbsp;uso"
          class="!bg-white !border-2 !border-primary !w-2/3 !justify-center"
        ></VButton>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const datos = ref({
  year: "1960",
  info: "Jacinto Amatriain realiza la primer importación de rodamientos desde Inglaterra.",
});
const openWindow = () => {
  window.open("https://api.whatsapp.com/send?phone=5493415709283", "_blank");
};
</script>
