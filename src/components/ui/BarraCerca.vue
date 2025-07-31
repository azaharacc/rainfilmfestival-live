<template>
  <input type="text" v-model="busqueda" @input="buscarProyectos" placeholder="Cerca projectes">
</template>

<script>
export default {
  data() {
    return {
      busqueda: ''
    };
  },
  methods: {
    buscarProyectos() {
      // Emitir el término de búsqueda al componente padre
      this.$emit('buscar', this.busqueda.trim());
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-family: unset;
}
</style>
