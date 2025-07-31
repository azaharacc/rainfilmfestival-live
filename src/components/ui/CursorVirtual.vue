<template>
  <div ref="cursorVirtual" class="virtual-cursor"></div>
</template>

<script>
export default {
  mounted() {
    // Iniciar movimiento aleatorio del cursor virtual
    this.moverCursorVirtual();
  },
  methods: {
    moverCursorVirtual() {
      setInterval(() => {
        // Generar posiciones aleatorias dentro del área visible de la pantalla
        const newX = Math.random() * window.innerWidth;
        const newY = Math.random() * window.innerHeight;

        // Actualizar posición del cursor virtual
        this.$refs.cursorVirtual.style.left = newX + 'px';
        this.$refs.cursorVirtual.style.top = newY + 'px';
      }, 1000); // Mover el cursor virtual cada segundo
    }
  }
};
</script>

<style scoped>
.virtual-cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  z-index: 9999;
  /* Ocultar el cursor real del usuario */
  cursor: none;
}
</style>
