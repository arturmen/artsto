<template>
  <div id="app">
    <main-header/>
    <router-view class="content-wrap" :myJson="myJson"></router-view>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import json from './artsto_data.json'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  },
  data(){
    return{
      myJson: json
    }
  }
}
</script>

<style>
.content-wrap {
  max-width: 100%;
  position: relative;
  min-height: calc(100vh - 9.5rem);
  padding-top: 2rem;
  margin-bottom:7rem;
}
</style>
