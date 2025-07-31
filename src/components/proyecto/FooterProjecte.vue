<template>
  <footer class="footer">
    <h3>Paraules clau:</h3>
    <ul class="palabras-clave">
      <li v-for="palabraClave in palabrasClaveMuestra" :key="palabraClave">
        <router-link :to="getLinkByPalabraClave(palabraClave)">{{ palabraClave }}</router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import proyectos from '@/data/info-sample.js';

export default {
  name: 'FooterProjecte',
  props: ['palabrasClave', 'id'],
  computed: {
    palabrasClaveMuestra() {
      // Clonamos el array para no modificar el original
      let palabrasClonadas = [...this.palabrasClave];
      // Barajamos el array de palabras clave
      for (let i = palabrasClonadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [palabrasClonadas[i], palabrasClonadas[j]] = [palabrasClonadas[j], palabrasClonadas[i]];
      }
      // Retornamos solo las primeras 8 palabras clave (o menos si hay menos de 8)
      return palabrasClonadas.slice(0, 8);
    }
  },
  methods: {
    getLinkByPalabraClave(palabraClave) {
      const proyectosConPalabraClave = proyectos.filter(p => p.id !== parseInt(this.id) && p.palabrasClave.includes(palabraClave));
      if (proyectosConPalabraClave.length > 0) {
        // Si hay proyectos con la palabra clave, elegimos uno aleatoriamente
        const proyectoAleatorio = proyectosConPalabraClave[Math.floor(Math.random() * proyectosConPalabraClave.length)];
        return { name: 'Proyecto', params: { id: proyectoAleatorio.id } };
      } else {
        // Si no hay proyectos con la palabra clave, simplemente devolvemos un "#" para no hacer nada
        return { path: '#' };
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para el footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
  box-sizing: border-box;
}

/* Estilos para la lista de palabras clave */
.palabras-clave {
  list-style-type: none;
  /* Elimina los marcadores de lista */
  padding: 0;
  margin: 0;
}

.palabras-clave li {
  display: inline;
  /* Muestra los elementos en línea */
  margin-right: 10px;
  /* Espaciado entre los elementos */
}
</style>
