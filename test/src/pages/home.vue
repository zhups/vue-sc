<template>
    <div>
        <tabbar></tabbar>
        <router-view />
    </div>
</template>

<script>
import tabbar from '../components/tabbar.vue'
export default {
  components: {
    tabbar
  }
}
</script>

<style>
</style>
