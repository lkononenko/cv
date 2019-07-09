<template>
  <div class="page">
    <div class="row page-row">
      <div class="col col-left">
        test left
      </div>
      <div class="col col-right">
        <h1>Liubov Kononenko</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  /*h3 {*/
  /*  margin: 40px 0 0;*/
  /*}*/
  /*ul {*/
  /*  list-style-type: none;*/
  /*  padding: 0;*/
  /*}*/
  /*li {*/
  /*  display: inline-block;*/
  /*  margin: 0 10px;*/
  /*}*/
  /*a {*/
  /*  color: #42b983;*/
  /*}*/

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;

    @include breakpoint-down(md) {
      flex-direction: column;
    }
  }
/*
  .col {
    display: flex;
    flex-direction: column;

    &.centered {
       justify-content: center;
     }
  }
*/
  .page {
    width: 210mm;
    height: 297mm;
    margin: 0 auto;
    border: 1px solid $color-gray-30;

    &-row {
      height: 100%;
    }
  }

  .col {
    padding: 3*$margin;

    &-left {
      width: 30%;
      background-color: $color-brand-bg;
    }

    &-right {

    }
  }

</style>
