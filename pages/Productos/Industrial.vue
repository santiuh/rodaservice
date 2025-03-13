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
useHead({
  title: "Productos Industriales - Roda",
  meta: [
    {
      name: "description",
      content:
        "Descubre nuestra amplia gama de productos industriales, incluyendo rodamientos, bolas de acero, y más.",
    },
    {
      name: "keywords",
      content:
        "productos industriales, rodamientos, bolas de acero, rodamientos de agujas, rodamientos de rodillos",
    },
  ],
});

const productos = [
  {
    texto: "Bolas de acero milimetricas y en pulgadas",
    imagen: "Industrial.png",
  },
  {
    texto: "Rodamientos axiales crapodina de una hilera de bolas",
    imagen: "Industrial2.png",
  },
  {
    texto: "Rodamientos axiales de rodillos esfericos",
    imagen: "Industrial3.png",
  },
  {
    texto: "Rodamientos de agujas con anillo interior",
    imagen: "Industrial4.png",
  },
  { texto: "Rodamientos de agujas en pulgadas", imagen: "Industrial5.png" },
  { texto: "Rodamientos de agujas milimetricos", imagen: "Industrial6.png" },
  {
    texto: "Rodamientos de dos hileras de bolas de contacto angular",
    imagen: "Industrial7.png",
  },
  {
    texto: "Rodamientos de dos hileras de bolas de contacto radial",
    imagen: "Industrial8.png",
  },
  {
    texto: "Rodamientos de dos hileras de rodillos esfericos",
    imagen: "Industrial9.png",
  },
  {
    texto: "Rodamientos de una hilera de bolas de contacto angular",
    imagen: "Industrial10.png",
  },
  {
    texto: "Rodamientos de una hilera de rodillos cilindricos",
    imagen: "Industrial11.png",
  },
  {
    texto: "Rodamientos de una hilera de rodillos conico milimetrico",
    imagen: "Industrial12.png",
  },
  { texto: "Rodamientos miniaturas", imagen: "Industrial13.png" },
  {
    texto: "Rodamientos oscilante de dos hileras de bolas",
    imagen: "Industrial14.png",
  },
  {
    texto:
      "Rodamientos oscilantes de dos hileras de bolas con interior partido",
    imagen: "Industrial15.png",
  },
  {
    texto: "Rodamientos una hilera bolas",
    imagen: "Industrial16.png",
  },
  {
    texto: "Rodillos de acero en milimetros y en pulgadas",
    imagen: "Industrial17.png",
  },
  { texto: "Rotulas con perno hembra", imagen: "Industrial18.png" },
  { texto: "Rotulas con perno macho(POSB)", imagen: "Industrial19.png" },
  { texto: "Seguros seeger", imagen: "Industrial20.png" },
  { texto: "Soportes bipartidos", imagen: "Industrial21.png" },
];
</script>
