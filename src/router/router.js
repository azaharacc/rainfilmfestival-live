import { createRouter, createWebHistory } from 'vue-router';
import Proyecto from '../views/Proyecto.vue'; // Importa la vista de proyecto

const routes = [
  {
    path: '/proyecto/:id', // Utiliza un segmento de ruta dinámico para el ID del proyecto
    name: 'Proyecto',
    component: Proyecto,
    props: true // Habilita el paso de props a la vista de proyecto
  },
  // Otras rutas si es necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
