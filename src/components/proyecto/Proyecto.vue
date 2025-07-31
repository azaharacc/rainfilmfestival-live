<template>
  <div>
    <h2 class="titulo-proyecto">{{ proyecto.titulo }}</h2>

    <!-- Descripció -->
    <div class="cuadro"
         v-if="proyecto.descripcion && mostrarDescripcion"
         :style="{ zIndex: zIndex.descripcion, bottom: descripcionBottom, left: descripcionLeft }">
      <span class="cerrar" @click="cerrarCapa('mostrarDescripcion')">x</span>
      <p>{{ proyecto.descripcion }}</p>
    </div>

    <!-- Nom artista -->
    <div class="cuadro"
         v-if="proyecto.nombreArtista && mostrarNombreArtista"
         :style="{ zIndex: zIndex.nombreArtista, bottom: nombreArtistaBottom, left: nombreArtistaLeft }">
      <span class="cerrar" @click="cerrarCapa('mostrarNombreArtista')">x</span>
      <p>{{ proyecto.nombreArtista }}</p>
    </div>

    <!-- Bio -->
    <div class="cuadro"
         v-if="proyecto.bio && mostrarBio"
         :style="{ zIndex: zIndex.bio, bottom: bioBottom, left: bioLeft }">
      <span class="cerrar" @click="cerrarCapa('mostrarBio')">x</span>
      <p>{{ proyecto.bio }}</p>
    </div>

    <!-- Video 1 -->
    <div class="cuadro"
         v-if="proyecto.videoSrc && mostrarVideo1"
         :style="{ zIndex: zIndex.video1, bottom: video1Bottom, left: video1Left }">
      <span class="cerrar" @click="cerrarCapa('mostrarVideo1')">x</span>
      <video controls :src="proyecto.videoSrc" frameborder="0" allowfullscreen></video>
    </div>

    <!-- Video 2 -->
    <div class="cuadro"
         v-if="proyecto.videoSrc2 && mostrarVideo2"
         :style="{ zIndex: zIndex.video2, bottom: video2Bottom, left: video2Left }">
      <span class="cerrar" @click="cerrarCapa('mostrarVideo2')">x</span>
      <video controls :src="proyecto.videoSrc2" frameborder="0" allowfullscreen></video>
    </div>

    <!-- Imatge 1 -->
    <div class="cuadro"
         v-if="proyecto.imagenSrc && mostrarImagen1"
         :style="{ zIndex: zIndex.imagen1, bottom: imagen1Bottom, left: imagen1Left }">
      <span class="cerrar" @click="cerrarCapa('mostrarImagen1')">x</span>
      <img :src="proyecto.imagenSrc" alt="Imatge 1 del projecte" />
    </div>

    <!-- Imatge 2 -->
    <div class="cuadro"
         v-if="proyecto.imagenSrc2 && mostrarImagen2"
         :style="{ zIndex: zIndex.imagen2, bottom: imagen2Bottom, left: imagen2Left }">
      <span class="cerrar" @click="cerrarCapa('mostrarImagen2')">x</span>
      <img :src="proyecto.imagenSrc2" alt="Imatge 2 del projecte" />
    </div>

    <!-- Footer -->
    <FooterProjecte :palabrasClave="proyecto.palabrasClave" :id="id" />
  </div>
</template>

<script>
import proyectos from '@/data/info-sample.js';
import FooterProjecte from '@/components/proyecto/FooterProjecte.vue';
export default {
  props: ['id'],
  components: {
    FooterProjecte
  },
  data() {
    return {
      esMovil: false,
      mostrarDescripcion: true,
      mostrarNombreArtista: true,
      mostrarBio: true,
      mostrarVideo1: true,
      mostrarVideo2: true,
      mostrarImagen1: true,
      mostrarImagen2: true,
      zIndex: {
        descripcion: 100,
        nombreArtista: 90,
        bio: 80,
        video1: 70,
        video2: 60,
        imagen1: 50,
        imagen2: 40,
      },
      descripcionBottom: '10%',
      descripcionLeft: '10%',
      nombreArtistaBottom: '10%',
      nombreArtistaLeft: '10%',
      bioBottom: '10%',
      bioLeft: '10%',
      video1Bottom: '10%',
      video1Left: '10%',
      video2Bottom: '10%',
      video2Left: '10%',
      imagen1Bottom: '10%',
      imagen1Left: '10%',
      imagen2Bottom: '10%',
      imagen2Left: '10%',
    };
  },
  computed: {
    proyecto() {
      return proyectos.find(p => p.id === parseInt(this.id));
    }
  },
  watch: {
    id() {
      this.mostrarDescripcion = true;
      this.mostrarNombreArtista = true;
      this.mostrarBio = true;
      this.mostrarVideo1 = true;
      this.mostrarVideo2 = true;
      this.mostrarImagen1 = true;
      this.mostrarImagen2 = true;

      this.zIndex = {
        descripcion: 100,
        nombreArtista: 90,
        bio: 80,
        video1: 70,
        video2: 60,
        imagen1: 50,
        imagen2: 40,
      };

      // Recalcular posicions
      this.recalculaPosicions();
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
    this.recalculaPosicions();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.esMovil = window.innerWidth <= 768;
    },
    recalculaPosicions() {
      this.descripcionBottom = this.getRandomBottom();
      this.descripcionLeft = this.getRandomLeft();
      this.nombreArtistaBottom = this.getRandomBottom();
      this.nombreArtistaLeft = this.getRandomLeft();
      this.bioBottom = this.getRandomBottom();
      this.bioLeft = this.getRandomLeft();
      this.video1Bottom = this.getRandomBottom();
      this.video1Left = this.getRandomLeft();
      this.video2Bottom = this.getRandomBottom();
      this.video2Left = this.getRandomLeft();
      this.imagen1Bottom = this.getRandomBottom();
      this.imagen1Left = this.getRandomLeft();
      this.imagen2Bottom = this.getRandomBottom();
      this.imagen2Left = this.getRandomLeft();
    },
    cerrarCapa(capa) {
      this[capa] = false;

      const map = {
        mostrarDescripcion: 'descripcion',
        mostrarNombreArtista: 'nombreArtista',
        mostrarBio: 'bio',
        mostrarVideo1: 'video1',
        mostrarVideo2: 'video2',
        mostrarImagen1: 'imagen1',
        mostrarImagen2: 'imagen2',
      };

      if (map[capa]) {
        this.zIndex[map[capa]] = 0;
      }

      if (
        !this.mostrarDescripcion &&
        !this.mostrarNombreArtista &&
        !this.mostrarBio &&
        !this.mostrarVideo1 &&
        !this.mostrarVideo2 &&
        !this.mostrarImagen1 &&
        !this.mostrarImagen2
      ) {
        const randomIndex = Math.floor(Math.random() * proyectos.length);
        const randomProjectId = proyectos[randomIndex].id;
        this.$router.push({ name: 'Proyecto', params: { id: randomProjectId } });
      }
    },
  getRandomBottom() {
    if (this.esMovil) {
      // entre 15% i 70% (no gaire amunt ni avall)
      const min = 12;
      const max = 20;
      return (Math.floor(Math.random() * (max - min)) + min) + '%';
    } else {
      // desktop: entre 10% i 50%
      const min = 10;
      const max = 25;
      return (Math.floor(Math.random() * (max - min)) + min) + '%';
    }
  },

  getRandomLeft() {
    if (this.esMovil) {
      // entre 10% i 80% (no massa a la dreta)
      const min = 5;
      const max = 10;
      return (Math.floor(Math.random() * (max - min)) + min) + '%';
    } else {
      // desktop: entre 20% i 60% (no massa a la dreta)
      const min = 5;
      const max = 30;
      return (Math.floor(Math.random() * (max - min)) + min) + '%';
    }
  }
  }
};

</script>

<style scoped>
.cuadro {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 800px;
  max-height: 80%;
  overflow: auto;
  margin: 1%;
}

.cuadro video {
  width: 100%;
  height: auto;
}

.cuadro img {
  max-width: 100%;
  height: auto;
}

.cerrar {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}

.titulo-proyecto {
  margin-top: 70px;
  margin-left: 0px;
}
</style>
