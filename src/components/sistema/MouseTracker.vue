<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cuadroX: null,
      cuadroY: null,
      tiempoInicio: Date.now()
    };
  },
  methods: {
    obtenerPosicionCursor(event) {
      this.cuadroX = event.clientX;
      this.cuadroY = event.clientY;
      this.mostrarPosicionCursor();
    },
    mostrarPosicionCursor() {
      console.log("Posició del cursor X: " + this.cuadroX + " Y: " + this.cuadroY);
    },
    mostrarTiempoTranscurrido() {
      var tiempoActual = Date.now();
      var tiempoTranscurrido = tiempoActual - this.tiempoInicio;
      console.log("Temps transcorregut a l'arxiu': " + (tiempoTranscurrido / 1000) + " segons");
    },
    registrarClick(event) {
      console.log("Clic a la posició X: " + event.clientX + " Y: " + event.clientY);
    }
  },
  created() {
    document.addEventListener('mousemove', this.obtenerPosicionCursor);
    document.addEventListener('click', this.registrarClick); // Agregar event listener para clics
    setInterval(this.mostrarTiempoTranscurrido, 10000); // Llama a la función cada 10 segundos
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.obtenerPosicionCursor);
    document.removeEventListener('click', this.registrarClick); // Remover event listener para clics
  }
};
</script>

<style scoped>
</style>
