<template>
  <div>
    <button @click="toggleMenu" class="menu-button">
      &#9776; <!-- Ícono de menú de 3 barras -->
    </button>
    <div v-if="mostrarMenu" class="menu-desplegable">
      <ul>
        <li v-for="proyecto in proyectos" :key="proyecto.id">
          <router-link :to="{ name: 'Proyecto', params: { id: proyecto.id }}">{{ proyecto.titulo }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import proyectos from '@/data/info-sample.js';

export default {
  data() {
    return {
      mostrarMenu: false,
      proyectos: proyectos
    };
  },
  methods: {
    toggleMenu() {
      this.mostrarMenu = !this.mostrarMenu;
    }
  }
};
</script>

<style scoped>
.menu-button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding-right:10px;
}

.menu-desplegable {
  position: absolute;
  top: 40px; /* Ajusta la posición del menú desplegable */
  left: 20px;
  z-index: 999;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 300px; /* Limita la altura del menú desplegable */
  overflow-y: auto; /* Agrega scroll si el menú es demasiado largo */
  width: 200px; /* Ajusta el ancho del menú desplegable */
}

.menu-desplegable ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-desplegable li {
  margin-bottom: 10px;
}

.menu-desplegable li a {
  text-decoration: none;
  color: #000;
}

.menu-desplegable li a:hover {
  text-decoration: underline;
}
</style>
