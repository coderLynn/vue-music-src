<template>
  <div id="app">
    <m-header></m-header>
    <tap></tap>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header'
  import Tap from './components/tap/tap'
  export default {
    name: 'App',
    components:{
      MHeader,
      Tap,
    }
  }
</script>

<style>

</style>
