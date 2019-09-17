<template>
  <div id="app">
  <header>
    The Fashion App is this
  </header>

  </div>
</template>

<script>
import LandingHome from './components/LandingHome.vue'
import ListingPage from './components/ListingPage.vue'

export default {
  name: 'app',
  components: {
    LandingHome,
    ListingPage,
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
