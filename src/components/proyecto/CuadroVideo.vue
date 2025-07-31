<!-- CuadroVideo.vue -->
<template>
  <div class="cuadro">
    <span class="cerrar" @click="cerrar">x</span>
    <iframe :src="videoSrc" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: ['videoSrc'],
  methods: {
    cerrar() {
      this.$emit('cerrar');
    }
  }
};
</script>

<style scoped>
</style>
