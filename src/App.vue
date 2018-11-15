<template>
  <div id="app">
    <Navigation />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation
  }
};
</script>

<style>
* {
    margin: 0;
    padding: 0
}
.inner-container {
  width: 960px;
  margin: 0 auto;
  padding: 30px 0;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
