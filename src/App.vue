<template>
  <div id="app">
  <header ref="header">
    <div class="navbar-expand-lg">
    <nav class="navbar navbar-expand-lg fixed top">
      <a class="navbar-brand" href="#">Designer Dictionary</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse container-fullwidth" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a @click="swapComponent(['ListingPage', selectedBrand])" class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent" href="#">Brands</a>
          </li>
          <li class="nav-item">
            <a @click="swapComponent(['LooksPage', selectedBrand])" class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent" href="#">Shows</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  </header>

    <component
    v-on:see-details.capture="swapComponent"
    v-bind:selectedBrand='selectedBrand'
    :is="currentComponent"
  ></component>

  </div>
</template>

<script>
import LandingHome from './components/LandingHome.vue'
import ListingPage from './components/ListingPage.vue'
import MoreDetails from './components/MoreDetails.vue'
import LooksPage from './components/LooksPage.vue'
import Gallery from './components/Gallery'

export default {
  name: 'app',
  components: {
    LandingHome,
    ListingPage,
    MoreDetails,
    LooksPage,
    Gallery
  },
  data() {
    return {
      currentComponent: 'LandingHome',
      selectedBrand: '',
    }
  },  methods: {
    swapComponent: function(array) {
      this.currentComponent = array[0];
      this.selectedBrand =  array[1];
      this.theStart()
    },
    seeDetails: function(brand, comp) {
      currentComponent(comp)
    },
    theStart: function() {
      if (this.currentComponent == "LandingHome") {
        this.$refs["header"].hidden = true
        console.log("true")
      } else {
        this.$refs["header"].hidden = false
        console.log("false")
      }
    }
  }, mounted() {
    this.theStart()
  }
}
</script>

<style>
/* color scheme
Rich Black - #141414;
White - #FFFFFF;
Melon - #FFBEAA; dont use
Mimi Pink - rgb(255, 202, 214);
Sinopia - #EA410E;
*/

header {
  position: sticky;
  top: 0;
  z-index: 1;
}

button:focus {
  outline: 0;  /* FIX */
}

nav {
  width: 100%;
}

.navbar {
  background-color: #141414;
  padding: 0;
}
.navbar-collapse {
    background-color: rgb(253, 226, 226);
    font-size: 18px;
    width: 100%;
  } 

.nav-item {
  border: 2px solid white;
}

.navbar a {
  color: rgb(255, 202, 214);
  margin: 3%;
}

.navbar-toggler {
  background-color: rgb(255, 203, 215);
  margin: 4%;
}

.navbar-brand {
  font-size: 25px;
  font-style: italic
}

.fa-bars{
  color: #141414;
}

#app {
  font-family: Georgia, 'Times New Roman', Times, serif
}

#navbarSupportedContent a {
  color: black;
}
</style>
