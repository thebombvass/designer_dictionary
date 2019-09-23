<template>
  <div id="app">
  <header>
    <div class="navbar-expand-sm">
    <nav class="navbar navbar-expand-lg fixed top">
      <a class="navbar-brand" href="#">Designer Dictionary</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- add when click brands or shows it also collapses -->

      <div class="collapse navbar-collapse container-fullwidth" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a @click="swapComponent(['ListingPage', selectedBrand])" class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent" href="#">Brands</a>
          </li>
          <li class="nav-item">
            <a @click="swapComponent(['LooksPage', selectedBrand])" class="nav-link" data-toggle="collapse" data-target="#navbarSupportedContent" href="#">Shows</a>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
    </div>
  </header>
      <component
      v-on:see-details.capture="swapComponent"
      v-bind:selectedBrand='selectedBrand'
      :is="currentComponent"
    ></component>
  <!-- <listing-page></listing-page> -->
  <!-- <more-details></more-details> -->

  </div>
</template>

<script>
import LandingHome from './components/LandingHome.vue'
import ListingPage from './components/ListingPage.vue'
import MoreDetails from './components/MoreDetails.vue'
import LooksPage from './components/LooksPage.vue'

export default {
  name: 'app',
  components: {
    LandingHome,
    ListingPage,
    MoreDetails,
    LooksPage,
  },
  data() {
    return {
      currentComponent: 'ListingPage',
      selectedBrand: ''
    }
  },  methods: {
    swapComponent: function(array) {
      this.currentComponent = array[0];
      this.selectedBrand =  array[1];
      console.log(this.selectedBrand)
    },
    seeDetails: function(brand, comp) {
      currentComponent(comp)
    },
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
  position: sticky; /*fix */
}

button:focus {
  outline: 0;
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

.fa-bars{
  color: #141414;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
}

#navbarSupportedContent a {
  color: black;
}
</style>
