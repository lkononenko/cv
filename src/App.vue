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

  html, body {
    margin: 0;
    padding: 0;
    font-family: $font-primary;
    background: $color-white;
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
    @include font-size($base-font-sizes);
    color: $color-content;
    position: relative;
    width: 100%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }

  #app {
    text-align: left;
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

  ul.tags {
    padding-left: 0!important;

    li {
      margin: 3px 5px 4px 0;
      display: inline-block;
      padding: 3px 5px;
      position: relative;
      border-radius: 6px;
      border: 1px solid $color-brand;

      &:before {
        content: none;
      }
    }
  }
</style>
