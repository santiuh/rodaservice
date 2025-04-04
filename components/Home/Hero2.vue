<template>
  <div
    class="flex flex-col bg-[url('img/Hero/Hero2.png')] bg-cover bg-no-repeat justify-end bg-[center_right_60%] lg:bg-center"
  >
    <div
      class="max-w-[1440px] px-4 lg:px-9 w-full justify-end lg:justify-center backdrop-blur-sm lg:backdrop-blur-0 h-full lg:h-1/2 self-center flex flex-col text-primary text-start gap-7 lg:gap-10 pb-28 lg:backdrop-brightness-100"
    >
      <div class="flex flex-col text-4xl lg:text-7xl font-extrabold">
        <p>Compromiso y</p>
        <p>responsabilidad</p>
      </div>
      <span class="font-semibold text-lg lg:text-base"
        >Más de 600 empresas ya confían en Roda Service como sus proveedores de
        confianza.
      </span>
      <VButton
        @click="openWindow()"
        titulo="Contactanos"
        class="!bg-primary !text-white !text-xl"
      ></VButton>
    </div>
  </div>
</template>
<script setup>
const openWindow = () => {
  window.open("https://api.whatsapp.com/send?phone=5493415709283", "_blank");
};
</script>
