<template>
  <div id="listingPage">
    <a
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
            <select @change="sortBy(shows, $event)" class="form-control" id="selecter">
              <option value="all" selected>Sort By...</option>
              <option value="AZ">Brand Name A-Z</option>
              <option @click="sortBy(shows, 'ZA')" value="ZA">Brand Name Z-A</option>
            </select>
            <div @change="filterForSeason()" class="form-check form-check-inline">
              <input
                checked
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                ref="SPcheck"
              />
              <label class="form-check-label" for="inlineCheckbox1">Spring 2019 Ready to Wear</label>
            </div>
            <div @change="filterForSeason()" class="form-check form-check-inline">
              <input
                checked
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                ref="FLcheck"
              />
              <label class="form-check-label" for="inlineCheckbox2">Fall 2019 Ready to Wear</label>
            </div>
          </div>
          <div class="d-flex justify-content-end">
          <button data-toggle="collapse" href="#filters" class="btn save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>

    <div id="content" class="pre-scrollable">
      <ul class="list-unstyled" id="ulcontainer">
        <li v-for="show in shows" v-bind:key="show.index" v-bind:ref="show.season">
          <div class="d-flex align-items-center">
            <img v-bind:src="show.cover_photo" />
            <span>
              <h5>{{show.brand}}</h5>
              <p>{{show.season}}, {{show.year}}</p>
            </span>
          </div>
          <div class="d-flex justify-content-end">
          <button @click="$emit('see-details', ['Gallery', show.index])">
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
  name: "LooksPage",
  components: {
    MoreDetails
  },
  data() {
    return {
      shows: json.shows
    };
  },
  computed: {
    brand() {
      return json.shows.map(item => {
        return item.brand;
      });
    },
    year() {
      return json.shows.map(item => {
        return item.year;
      });
    },
    season() {
      return json.shows.map(item => {
        return item.season;
      });
    }
  },
  methods: {
    sortBy: function(array, value) {
      let newVal = value.target.value;
      let newArr = array.sort((a, b) =>
        a.brand > b.brand ? 1 : b.brand > a.brand ? -1 : 0
      );
      if (newVal == "AZ") {
        return newArr;
      } else if (newVal == "ZA") {
        return newArr.reverse();
      }
    },
    filterForSeason: function() {
      if (this.$refs["FLcheck"].checked == false) {
        for (let i = 0; i < this.$refs["RTW Fall"].length; i++)
          this.$refs["RTW Fall"][i].hidden = true;
      } else {
        for (let i = 0; i < this.$refs["RTW Fall"].length; i++)
          this.$refs["RTW Fall"][i].hidden = false;
      }
      if (this.$refs["SPcheck"].checked == false) {
        for (let i = 0; i < this.$refs["RTW Spring"].length; i++)
          this.$refs["RTW Spring"][i].hidden = true;
      } else {
        for (let i = 0; i < this.$refs["RTW Spring"].length; i++)
          this.$refs["RTW Spring"][i].hidden = false;
      }
    }
  }
};
</script>

<style scoped>
/* CSS dependent on screen size here, and in this order: I5/SE-XS, I5/SE-XV*/
/* above, I=phone, V= vertical, S= sideways */

/* Iphone5/SE, 6/7/8, 6/7/8+ X sideways*/
@media only screen and (min-height: 300px) and (max-height: 450px) {
    #ulcontainer {
    display: flex;
    justify-content: space-between;
    }

    li {
    min-width: 250px;
    margin: 5px;
    margin-bottom: 20px;
    background-color: white;
    }

    li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    margin-right: 10px;
    position: relative;
    bottom: 10px;
    }

    button i {
    color: rgb(216, 63, 63);
    }

    li img {
    width: 40%;
    margin: 5px;
    }

    #content {
    display: flex;
    align-items: center;
    height: 90%;
}

}

/* Iphone5/SE, 6/7/8, 6/7/8+, X Vertical*/
@media only screen and (min-height: 500px) and (max-height: 900px) {
    li {
    margin: 15px;
    margin-bottom: 20px;
    background-color: white;
    }

    li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    position: absolute;
    right: 25px;
    margin-top: -10%;
    }

    button i {
    color: rgb(216, 63, 63);
    }

    li img {
    width: 25%;
    margin: 5px;
}

    #content {
    margin-top: 10px;
    position: relative;
    max-height: 90%;
    min-height: 90%;
    }

}

/* CSS independent of screen size begins here */

/* tag level selectors  */
form {
  padding: 10px;
}

li span {
  margin-left: 5px;
  margin-bottom: 15px;
}

li h5 {
  font-size: 22px;
  margin-bottom: 0;
  font-family: Georgia, "Times New Roman", Times, serif;
}

li p {
  font-size: 16px;
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
}

/* id level selectors */
#listingPage {
  background-color: #141414;
  padding-bottom: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
  padding-top: 55px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#filters {
  width: 90%;
  margin-left: 5%;
  background-color: rgb(253, 226, 226);
  position: absolute;
  z-index: 1;
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