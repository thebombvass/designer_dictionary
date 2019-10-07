<template>
  <div id="listingPage">
    <a
      id="filterbtn"
      class="btn filter-btn"
      data-toggle="collapse"
      href="#filters"
      collapsed
      aria-expanded="false"
    >Filter content</a>

    <div class="collapse in" id="filters">
      <div>
        <form>
          <div class="form-group">
            <select @change="sortBy(brands, $event)" class="form-control" id="selecter">
              <option value="all" selected>Sort By...</option>
              <option value="AZ">Brand Name A-Z</option>
              <option value="ZA">Brand Name Z-A</option>
              <option value="old">Year Founded (oldest)</option>
              <option value="new">Year Founded (newest)</option>
            </select>
            <div @change="filterForCountry()" class="form-check form-check-inline">
              <input
                checked
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                ref="ITcheck"
                value="IT"
              />
              <label class="form-check-label" for="inlineCheckbox1">Italian</label>
            </div>
            <div @change="filterForCountry()" class="form-check form-check-inline">
              <input
                checked
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                ref="FRcheck"
                value="FR"
              />
              <label class="form-check-label" for="inlineCheckbox2">French</label>
            </div>
            <div @change="filterForCountry()" class="form-check form-check-inline">
              <input
                checked
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                ref="UScheck"
                value="US"
              />
              <label class="form-check-label" for="inlineCheckbox3">American</label>
            </div>
            <div @change="filterForCountry()" class="form-check form-check-inline">
              <input
                checked
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                ref="UKcheck"
                value="UK"
              />
              <label class="form-check-label" for="inlineCheckbox3">English</label>
            </div>
            <div @change="filterForCountry()" class="form-check form-check-inline">
              <input
                checked
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                ref="EScheck"
                value="ES"
              />
              <label class="form-check-label" for="inlineCheckbox3">Spanish</label>
            </div>
          </div>
        </form>
        <div class="d-flex justify-content-end">
        <button data-toggle="collapse" href="#filters" class="btn save-btn">Save</button>
        </div>
      </div>
    </div>

    <div id="content" class="pre-scrollable">
      <ul class="list-unstyled">
        <li v-for="brand in brands" v-bind:key="brand.index" v-bind:ref="brand.country">
          <img v-bind:src="brand.brand_logo" />
          <div id="infoContainer">
          <span>{{brand.name}}</span>
          <button @click="$emit('see-details', ['MoreDetails', brand.index])">
            See Details
            <i class="fas fa-arrow-right"></i>
          </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import MoreDetails from "./MoreDetails.vue";
import json from "../assets/designDictData.json";

export default {
  name: "ListingPage",
  components: {
    MoreDetails
  },
  data() {
    return {
      brands: json.brands
    };
  },
  computed: {
    index() {
      return json.brands.map(item => {
        return item.index;
      });
    },
    names() {
      return json.brands.map(item => {
        return item.name;
      });
    },
    brand_logo() {
      return json.brands.map(item => {
        return item.brand_logo;
      });
    }
  },
  methods: {
    sortBy: function(array, value) {
      let newVal = value.target.value;
      console.log(newVal);
      if (newVal == "AZ" || newVal == "ZA") {
        console.log("brand");
        let newArr = array.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        if (newVal == "AZ") {
          console.log(newArr);
        } else if (newVal == "ZA") {
          console.log(newArr.reverse());
        }
      } else {
        console.log("year");
        let newArr = array.sort((a, b) =>
          a.year_founded > b.year_founded
            ? 1
            : b.year_founded > a.year_founded
            ? -1
            : 0
        );
        if (newVal == "old") {
          console.log(newArr);
        } else if (newVal == "new") {
          console.log(newArr.reverse());
        }
      }
    },
    filterForCountry: function() {
      if (this.$refs["ITcheck"].checked == false) {
        for (let i = 0; i < this.$refs["IT"].length; i++)
          this.$refs["IT"][i].hidden = true;
      } else {
        for (let i = 0; i < this.$refs["IT"].length; i++)
          this.$refs["IT"][i].hidden = false;
      }
      if (this.$refs["EScheck"].checked == false) {
        for (let i = 0; i < this.$refs["ES"].length; i++)
          this.$refs["ES"][i].hidden = true;
      } else {
        for (let i = 0; i < this.$refs["ES"].length; i++)
          this.$refs["ES"][i].hidden = false;
      }
      if (this.$refs["FRcheck"].checked == false) {
        for (let i = 0; i < this.$refs["FR"].length; i++)
          this.$refs["FR"][i].hidden = true;
      } else {
        for (let i = 0; i < this.$refs["FR"].length; i++)
          this.$refs["FR"][i].hidden = false;
      }
      if (this.$refs["UScheck"].checked == false) {
        for (let i = 0; i < this.$refs["US"].length; i++)
          this.$refs["US"][i].hidden = true;
      } else {
        for (let i = 0; i < this.$refs["US"].length; i++)
          this.$refs["US"][i].hidden = false;
      }
      if (this.$refs["UKcheck"].checked == false) {
        for (let i = 0; i < this.$refs["UK"].length; i++)
          this.$refs["UK"][i].hidden = true;
      } else {
        for (let i = 0; i < this.$refs["UK"].length; i++)
          this.$refs["UK"][i].hidden = false;
      }
    }
  }
};
</script>

<style scoped>
/* CSS dependent on screen size here, and in this order: I5/SE-XS, I5/SEV, I6/7/8V, I6/7/8+V, IXV */
/* above, I=phone, V= vertical, S= sideways */

/* Iphone5/SE, 6/7/8, 6/7/8+ X sideways */
@media only screen and (min-height: 300px) and (max-height: 450px) {
  ul {
    display: flex; 
    justify-content: space-between;
  }

  li {
    margin: 15px;
    background-color: white;
    min-width: 300px;
    display: flex;
    padding-bottom: 20px;
  }

  li img {
    width: 40%;
    margin: 5px;
  }

  li span {
    font-size: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    margin-top: 20px;
  }

  #listingPage {
    background-color: #141414;
    padding-bottom: 30px;
    padding-top: 55px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
   
  #content {
    display: flex;
    align-items: center;
    height: 90%;
  }

  #infoContainer {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }

}

/* Iphone5/SE Vertical*/
@media only screen and (min-height: 500px) and (max-height: 600px) {
  li {
    margin: 15px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
  }

  li img {
    width: 25%;
    margin: 5px;
  }

  li span {
    font-size: 20px;
    margin-left: 10px;
    position: relative;
    top: 20px;
  }

  li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    position: absolute;
    right: 25px;
    margin-top: 15%;
  }

  #listingPage {
    background-color: #141414;
    padding-bottom: 30px;
    padding-top: 50px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
   
  #content {
  margin-top: 10px;
  position: relative;
  max-height: 90%;
  min-height: 90%;
  }

}

/* Iphone6/7/8 Vertical*/
@media only screen and (min-height: 600px) and (max-height: 700px) {
  li {
    margin: 15px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
  }

  li img {
    width: 25%;
    margin: 5px;
  }

  li span {
    font-size: 20px;
    margin-left: 10px;
    position: relative;
    top: 30px;
  }

  li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    position: absolute;
    right: 25px;
    margin-top: 15%;
  }

  #listingPage {
    background-color: #141414;
    padding-bottom: 30px;
    padding-top: 50px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
   
  #content {
  margin-top: 10px;
  position: relative;
  max-height: 90%;
  min-height: 90%;
  }

}

/* Iphone6/7/8+ Vertical*/
@media only screen and (min-height: 700px) and (max-height: 800px) {
  li {
    margin: 15px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
  }

  li img {
    width: 25%;
    margin: 5px;
  }

  li span {
    font-size: 20px;
    margin-left: 10px;
    position: relative;
    top: 30px;
  }

  li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    position: absolute;
    right: 25px;
    margin-top: 15%;
  }


  #listingPage {
    background-color: #141414;
    padding-bottom: 30px;
    padding-top: 50px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
   
  #content {
  margin-top: 10px;
  position: relative;
  max-height: 90%;
  min-height: 90%;
  }

}

/* IphoneX Vertical*/
@media only screen and (min-height: 800px) and (max-height: 900px) {
  li {
    margin: 15px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
  }

  li img {
    width: 30%;
    margin: 5px;
  }

  li span {
    font-size: 20px;
    margin-left: 10px;
    position: relative;
    top: 30px;
  }

  li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    position: absolute;
    right: 25px;
    margin-top: 15%;
  }


  #listingPage {
    background-color: #141414;
    padding-bottom: 30px;
    padding-top: 50px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  #content {
  margin-top: 10px;
  position: relative;
  max-height: 90%;
  min-height: 90%;
  }

  #infoContainer {
    
  }

}

/* CSS independent of screen size begins here */

/* tag level selectors  */
form {
  padding: 10px;
}

button i {
  color: rgb(216, 63, 63);
}

/* class level selectors */
.filter-btn {
  font-size: 18px;
  margin-top: 20px;
  width: 90%;
  margin-left: 5%;
  height: 40px;
  background-color: rgb(253, 226, 226);
  color: #141414;
}

.save-btn {
    background-color: #141414;
    color: rgb(223, 223, 223);
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
  }

/* id level selectors */

#filters {
  position: absolute;
  z-index: 1;
}

#filters {
  width: 90%;
  margin-left: 5%;
  background-color: rgb(253, 226, 226);
}

#selecter {
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: 0.6em;
  background-position: calc(100% - 1.3em) center;
  background-repeat: no-repeat;
  width: 80%;
  margin-bottom: 15px;
}
</style>