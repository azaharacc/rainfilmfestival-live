<!-- DescripcionProyecto.vue -->
<template>
  <div class="cuadro">
    <span class="cerrar" @click="cerrar">x</span>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script>
export default {
  props: ['descripcion'],
  methods: {
    cerrar() {
      this.$emit('cerrar');
    }
  }
};
</script>

<style scoped>
/* Estilos para la capa de descripción del proyecto */
</style>
