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
    font-family: $font-primary;
    @include font-size($base-font-sizes);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: $color-content;
  }

  p {
    text-align: justify;
    margin: $margin/2 0;
  }

  a {
    color: $color-content;
  }

  ul {
    margin: 0;
    padding-left: 25px;
    list-style: none;

    li {
      margin: $margin/2 0;
      text-align: justify;
      position: relative;

      &:before {
        content: "\2022";
        font-size: 24px;
        color: $color-brand;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        position: absolute;
        top: -8px;
        left: 7px;
      }
    }
  }
</style>
