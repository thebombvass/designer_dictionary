<template>
  <div id="mc">
    <header ref="header">
      <div class="navbar-expand-lg">
        <nav class="navbar navbar-expand-lg fixed top">
          <a class="navbar-brand" href="#">Designer Dictionary</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse container-fullwidth" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a
                  @click="swapComponent(['ListingPage', selectedBrand])"
                  class="nav-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  href="#"
                >Brands</a>
              </li>
              <li class="nav-item">
                <a
                  @click="swapComponent(['LooksPage', selectedBrand])"
                  class="nav-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  href="#"
                >Shows</a>
              </li>
              <li class="nav-item">
                <a
                @click="swapComponent(['Chat', selectedBrand])"
                  class="nav-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  href="#"
                >Chat Now</a>
              </li>
              <li class="nav-item">
                <a
                  @click="signOut"
                  class="nav-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  href="#"
                >Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <component
      v-on:see-details.capture="swapComponent"
      v-bind:selectedBrand="selectedBrand"
      :is="currentComponent"
    ></component>
  </div>
</template>

<script>
import ListingPage from "./ListingPage";
import MoreDetails from "./MoreDetails.vue";
import LooksPage from "./LooksPage.vue";
import Gallery from "./Gallery.vue";
import Chat from "./Chat"
import firebase from 'firebase'

export default {
  name: "MainContent",
  components: {
    ListingPage,
    MoreDetails,
    LooksPage,
    Gallery,
    Chat,
  },
  data() {
    return {
      currentComponent: "ListingPage",
      selectedBrand: ""
    };
  },
  methods: {
    swapComponent: function(array) {
      this.currentComponent = array[0];
      this.selectedBrand = array[1];
    },
    seeDetails: function(brand, comp) {
      currentComponent(comp);
    },
    signOut: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
/* color scheme
Rich Black - #141414;
White - #FFFFFF;
Melon - #FFBEAA; dont use
Mimi Pink - rgb(255, 202, 214);
Sinopia - #EA410E;
*/

/* Iphone5/SE, 6/7/8, 6/7/8+ X sideways*/
@media only screen and (min-height: 300px) and (max-height: 450px) {
header {
  position: sticky;
  top: 0;
  height: 66px;
  z-index: 1;
  border-bottom: 1px solid gray;
}

.navbar {
  background-color: #141414;
  padding: 0;
  height: 65px;
}

}

/* Iphone5/SE, 6/7/8, 6/7/8+ X vertical*/
@media only screen and (min-height: 500px) and (max-height: 900px) {
  header {
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid gray;
}

.navbar {
  background-color: #141414;
  padding: 0;
}

}


button:focus {
  outline: 0; /* FIX */
}

nav {
  width: 100%;
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
  font-style: italic;
}

.fa-bars {
  color: #141414;
}

#navbarSupportedContent a {
  color: black;
}
</style>
