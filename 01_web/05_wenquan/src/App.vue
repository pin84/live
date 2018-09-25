<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Top />
    <Banner />
    <Ad />
    <Nav />
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
import Top from './components/top.vue'
import Banner from './components/banner.vue'
import Ad from './components/ad.vue'
import Nav from './components/nav.vue'
import Foot from './components/foot.vue'


export default {
  name: 'app',
  components: {
    Top,
    Banner,
    Ad,
    Nav,
    Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin-bottom: 50px;
  background: #eeeeee
}
</style>
