// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js'; // Importa tu archivo de configuración de Vue Router

import proyectos from './data/info-sample.js'; // Importa los datos de proyectos

createApp(App)
  .use(router)
  .mount('#app');

// Espera a que el enrutador esté listo antes de realizar la redirección
router.isReady().then(() => {
  // Elige un proyecto aleatorio
  const proyectoAleatorio = proyectos[Math.floor(Math.random() * proyectos.length)];

  // Redirige al usuario a la ruta del proyecto seleccionado
  router.push({ name: 'Proyecto', params: { id: proyectoAleatorio.id } });
});

