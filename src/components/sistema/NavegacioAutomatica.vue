<template>
  <div>
    <!-- Elemento visual para resaltar la posición del clic -->
    <div v-if="clicVisual" :style="{ position: 'fixed', top: clicVisual.y + 'px', left: clicVisual.x + 'px', width: '14px', height: '14px', backgroundColor: 'blue', borderRadius: '50%', zIndex: '9999' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temporizadorInactivo: null,
      tiempoInactividad: 6000, 
      navegacionAutomaticaActiva: false, // Variable para controlar el estado de la navegación automática
      historialCoordenadasMouse: [], // Historial de coordenadas del mouse
      maxCoordenadas: 1000,
      indiceReproduccion: 0, // Índice de reproducción actual en el historial de coordenadas
      clicVisual: null // Coordenadas del clic visual durante la navegación automática
    };
  },
  mounted() {
    // Captura la actividad del usuario
    window.addEventListener('mousemove', this.detectarActividadUsuario);
    window.addEventListener('keydown', this.detectarActividadUsuario);
    window.addEventListener('scroll', this.detectarActividadUsuario);
    // Inicia el temporizador de inactividad
    this.iniciarTemporizadorInactivo();
  },
  methods: {
    detectarActividadUsuario(evento) {
      // Almacena las coordenadas del mouse al detectar actividad del usuario
      this.historialCoordenadasMouse.push({ x: evento.clientX, y: evento.clientY });
      if (this.historialCoordenadasMouse.length > this.maxCoordenadas) {
      this.historialCoordenadasMouse.shift(); // Elimina la coordenada más antigua
    }
      // Si la navegación automática está activa, detenemos la reproducción y mostramos el clic visual
      if (this.navegacionAutomaticaActiva) {
        clearTimeout(this.temporizadorInactivo);
        this.navegacionAutomaticaActiva = false;
        this.mostrarClicVisual(evento.clientX, evento.clientY);
        console.log('Navegació automàtica aturada.');
      }
      
      // Reinicia el temporizador de inactividad
      this.resetTemporizadorInactivo();
    },
    resetTemporizadorInactivo() {
      // Reinicia el temporizador de inactividad cada vez que se detecta actividad del usuario
      clearTimeout(this.temporizadorInactivo);
      this.iniciarTemporizadorInactivo();
    },
    iniciarTemporizadorInactivo() {
      this.temporizadorInactivo = setTimeout(this.activarModoAutomatico, this.tiempoInactividad);
    },
    activarModoAutomatico() {
      console.log('Navegació automàtica activada');
      this.navegacionAutomaticaActiva = true; // Marcamos que la navegación automática está activa
      this.reproducirMovimientos();
    },
    reproducirMovimientos() {
  const velocidadReproduccion = 600; // Velocidad de reproducción en milisegundos
  
  const reproduccion = setInterval(() => {
    if (!this.navegacionAutomaticaActiva) {
      // Si la navegación automática está desactivada, detenemos el temporizador
      clearInterval(reproduccion);
      console.log('Reproducció aturada');
      return;
    }
    
    const coordenadas = this.historialCoordenadasMouse[this.indiceReproduccion];
    this.indiceReproduccion++;
    
    if (this.indiceReproduccion >= this.historialCoordenadasMouse.length) {
      // Vuelve al inicio del historial cuando llega al final
      this.indiceReproduccion = 0;
    }
    
    const deberiaHacerClic = Math.random() < 0.2; // Probabilidad de hacer clic: 30%
    
    if (deberiaHacerClic) {
      this.simularClic(coordenadas.x, coordenadas.y);
    } else {
      this.mostrarClicVisual(coordenadas.x, coordenadas.y);
    }
  }, velocidadReproduccion);
},
    simularClic(posX, posY) {
  // Mostramos el clic visual durante la navegación automática
  this.mostrarClicVisual(posX, posY);
  
  // Simular el clic en la posición dada
  const elemento = document.elementFromPoint(posX, posY);
  const eventoClic = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: posX,
    clientY: posY
  });
  
  elemento.dispatchEvent(eventoClic);
  
  // Verificar si el elemento clicado es un video
  if (elemento.tagName === 'VIDEO') {
    // Realizar alguna acción específica, como reproducir o pausar el video
    if (elemento.paused) {
      elemento.play();
    } else {
      elemento.pause();
    }
  }
},

    mostrarClicVisual(x, y) {
      // Mostrar un elemento visual en la posición del clic
      this.clicVisual = { x, y };
      // Ocultar el clic visual después de un corto período de tiempo
      setTimeout(() => {
        this.clicVisual = null;
      }, 500);
    }
  },
  beforeUnmount() {
    // Elimina los event listeners para evitar fugas de memoria
    window.removeEventListener('mousemove', this.detectarActividadUsuario);
    window.removeEventListener('keydown', this.detectarActividadUsuario);
    window.removeEventListener('scroll', this.detectarActividadUsuario);
  }
};
</script>

