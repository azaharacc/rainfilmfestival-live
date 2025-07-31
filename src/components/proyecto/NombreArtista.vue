<!-- NombreArtista.vue -->
<template>
  <div class="cuadro">
    <span class="cerrar" @click="cerrar">x</span>
    <p>Artista: {{ nombre }}</p>
  </div>
</template>

<script>
export default {
  props: ['nombre'],
  methods: {
    cerrar() {
      this.$emit('cerrar');
    }
  }
};
</script>

<style scoped>
/* Estilos para la capa del nombre del artista */
</style>
