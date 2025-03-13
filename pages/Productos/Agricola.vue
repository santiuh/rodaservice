<template>
  <div class="flex flex-col pt-12 pb-24">
    <div class="grid grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-6 w-full">
      <ProductosProducto
        v-for="producto in productos"
        :key="producto.texto"
        :texto="producto.texto"
        :img="producto.imagen"
      ></ProductosProducto>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Productos Agrícolas - Roda",
  meta: [
    {
      name: "description",
      content:
        "Descubre nuestra amplia gama de productos agrícolas, incluyendo rodamientos, rótulas y soportes de alta calidad.",
    },
    {
      name: "keywords",
      content:
        "productos agrícolas, rodamientos, rótulas, soportes, alta calidad",
    },
  ],
});

const productos = [
  { texto: "Arandelas para manguitos(MB)", imagen: "Agricola1.png" },
  { texto: "Manguitos para rodamientos", imagen: "Agricola2.png" },
  {
    texto: "Rodamientos autocentrantes con interior cuadrado",
    imagen: "Agricola3.png",
  },
  {
    texto: "Rodamientos autocentrantes con interior hexagonal",
    imagen: "Agricola4.png",
  },
  {
    texto: "Rodamientos autocentrantes con prisionero",
    imagen: "Agricola5.png",
  },
  {
    texto: "Rodamientos autocentrantes con virola de ajuste",
    imagen: "Agricola6.png",
  },
  { texto: "Rodamientos una hilera de bolas", imagen: "Agricola7.png" },
  {
    texto: "Rodamientos una hilera de rodillos cónicos",
    imagen: "Agricola8.png",
  },
  { texto: "Rótulas comunes sin perno", imagen: "Agricola9.png" },
  { texto: "Rótulas con perno hembra", imagen: "Agricola10.png" },
  { texto: "Rótulas con perno macho", imagen: "Agricola11.png" },
  { texto: "Rótulas especiales", imagen: "Agricola12.png" },
  {
    texto: "Soporte tensor con rodamiento autocentrante(UCT)",
    imagen: "Agricola13.png",
  },
  {
    texto: "Soportes chapa para rodamiento autocentrante",
    imagen: "Agricola14.png",
  },
  {
    texto: "Soportes cuadrado con rodamiento autocentrante",
    imagen: "Agricola15.png",
  },
  {
    texto: "Soportes de chapa triangular para rodamiento autocentrante",
    imagen: "Agricola16.png",
  },
  {
    texto: "Soportes de pie con rodamiento autocentrante",
    imagen: "Agricola17.png",
  },
  {
    texto: "Soportes ovalados con rodamiento autocentrante",
    imagen: "Agricola18.png",
  },
  { texto: "Tuerca para manguitos(KM)", imagen: "Agricola19.png" },
];
</script>
