<template>
  <div id="app">
  <header>
    <div class="navbar-expand-sm">
    <nav class="navbar navbar-expand-lg fixed top">
      <a class="navbar-brand" href="#">Designer Dictionary</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse container-fullwidth" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Brands<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Shows</a>
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
  <listing-page></listing-page>

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
