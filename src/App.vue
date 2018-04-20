<template>
  <div id="app">
    <tabbar v-show="bot" ></tabbar>
    <router-view />
  </div>
</template>

<script>
import tabbar from './components/tabbar.vue'
export default {
  name: 'App',
  data () {
    return {
      bot: true
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
      if (to.path === '/productInfo' || to.path === '/register') {
        this.bot = false
      } else {
        this.bot = true
      }
    }
  },
  components: {
    tabbar
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
}
</style>
