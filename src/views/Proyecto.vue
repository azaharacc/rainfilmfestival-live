<template>
  <div>
    <div class="barra-busqueda">
      <MenuDesplegable />
      <BarraCerca @buscar="buscarProyectos" />
    </div>
    <div class="proyecto-container">
      <Proyecto :id="id" />
    </div>
    <div v-if="resultados.length > 0" class="resultados-busqueda">
      <ul>
        <li v-for="resultado in resultados" :key="resultado.id">
          <router-link :to="{ name: 'Proyecto', params: { id: resultado.id }}">{{ resultado.titulo }}</router-link>
        </li>
      </ul>
    </div>
    <NavegacioAutomatica />
  </div>
</template>

<script>
import Proyecto from '@/components/proyecto/Proyecto.vue';
import BarraCerca from '@/components/ui/BarraCerca.vue';
import NavegacioAutomatica from '@/components/sistema/NavegacioAutomatica.vue';
import MenuDesplegable from '@/components/ui/MenuDesplegable.vue';
import proyectos from '@/data/info-sample.js';

export default {
  components: {
    Proyecto,
    BarraCerca,
    NavegacioAutomatica,
    MenuDesplegable
  },
  props: ['id'],
  data() {
    return {
      resultados: []
    };
  },
  methods: {
    buscarProyectos(termino) {
      if (termino.trim() !== '') {
        this.resultados = proyectos.filter(proyecto =>
          proyecto.titulo.toLowerCase().includes(termino.toLowerCase())
        );
      } else {
        this.resultados = [];
      }
    }
  }
};
</script>

<style scoped>
.barra-busqueda {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
}

input{
  color:#0000fe;
}

.proyecto-container {
  margin-top: 100px;
  margin-left: 20px;
}

.resultados-busqueda {
  position: absolute;
  top: 70px; /* Ajusta la posición de los resultados de la búsqueda */
  left: 20px;
  z-index: 999;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 200px; /* Limita la altura de los resultados de la búsqueda */
  overflow-y: auto; /* Agrega scroll si los resultados son demasiado largos */
  width: 300px; /* Ajusta el ancho de los resultados de la búsqueda */
}
</style>
