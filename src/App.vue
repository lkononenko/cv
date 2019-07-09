<template>
  <div id="app">
    <first-page />
  </div>
</template>

<script>
import FirstPage from './components/FirstPage.vue'

export default {
  name: 'app',
  components: {
    FirstPage
  }
}
</script>

<style lang="scss">
  @import './assets/styles/main.scss';

  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: $font-primary;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: $color-content;
  }
</style>
