<template>
  <div id="app">
    <router-view />
    <MouseTracker />
  </div>
</template>

<script>
import MouseTracker from '@/components/sistema/MouseTracker.vue';

export default {
  name: 'App',
  components: {
    MouseTracker
  }
};
</script>

<style>
</style>
