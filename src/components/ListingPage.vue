<template>
    <div id="listingPage">
    
    <a class="btn btn-light filter-btn" data-toggle="collapse" href="#filters" collapsed aria-expanded="false">
        Filter content
    </a>

    <div class="collapse in" id="filters">
        <div>
        <form>
            <div class="form-group">
                <select class="form-control" id="selecter">
                    <option value="all" selected>Sort By...</option>
                    <option value ="AZ">Brand Name A-Z</option>
                    <option value ="ZA">Brand Name Z-A</option>
                    <option value ="old">Year Founded (oldest)</option>
                    <option value ="new">Year Founded (newest)</option>
                </select>
                <p>Filter brands by country they were founded in:</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="IT">
                    <label class="form-check-label" for="inlineCheckbox1">Italian</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="FR">
                    <label class="form-check-label" for="inlineCheckbox2">French</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="US">
                    <label class="form-check-label" for="inlineCheckbox3">American</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="UK">
                    <label class="form-check-label" for="inlineCheckbox3">English</label>
                </div>
            </div>
        </form>
        </div>
    </div>

    <div id="content">
        <ul class="list-unstyled">
            <li v-for="brand in brands" v-bind:key="brand.idex">
                <img v-bind:src="brand.brand_logo"> 
                <span>{{brand.name}}</span>
                <button @click="$emit('see-details', ['MoreDetails', brand.index])">See Details <i class="fas fa-arrow-right"></i></button>
            </li>
        </ul>
    </div>

    </div>
</template>


<script>
import MoreDetails from './MoreDetails.vue'
import json from '../assets/designDictData.json'


export default {
    name: 'ListingPage',
    components: {
        MoreDetails,
    },
    data() {
        return {
            brands: json.brands,
            viaJS: '/assets/prada_logo.jpg'
        }
    },
    computed: {
        index() {
            return json.brands.map((item) => {
                return item.index
            })
        },
        names() {
            return json.brands.map((item) => {
            return item.name;
            })
        },
        brand_logo() {
            return json.brands.map((item) => {
            return '/assets/' + item.brand_logo
            })
        },
    }
}
</script>

<style scoped>
#listingPage {
    background-color: #141414;
    padding-bottom: 30px;
}

form {
    padding: 10px;
}

li {
    margin: 15px;
    margin-bottom: 20px;
    background-color: white;
}

li img {
    width: 25%;
    margin: 5px;
}

li span {
    font-size: 20px;
    margin-left: 5px;
}

li button {
    border: 2px solid rgb(255, 202, 214);
    border-bottom: 2px solid rgb(216, 63, 63);
    background-color: rgb(255, 202, 214);
    position: absolute;
    right: 25px;
    margin-top: 15%;
}

button i {
    color: rgb(216, 63, 63);
}

.filter-btn {
    font-size: 18px;
    margin-top: 20px;
    width: 90%;
    margin-left: 5%;
    height: 40px;
}

#content {
  position: relative;
}

#filters {
  position: absolute;
  z-index: 1;
}

#filters {
    width: 90%;
    margin-left: 5%;
    background-color: rgb(216, 222, 230);
}

#selecter {
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    background-size: .6em;
    background-position: calc(100% - 1.3em) center;
    background-repeat: no-repeat;
    width: 80%;
    margin-bottom: 15px;
}

</style>