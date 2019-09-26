<template>
    <div id="moreDetails">
            <div class="container-fluid container-info">
                    <div id="logoAndShop">
                    <img v-bind:src="brand.brand_logo">
                    <a v-bind:href="brand.site_url">Shop {{brand.name}}</a>
                    </div>
                    <div id="keyInfo">
                    <h5 class="align-self-start">Key Info:</h5>
                    <div class="info container-fluid">
                        <b>Founded:</b> {{brand.year_founded}} in {{brand.city_founded}}<br>
                        <b>Pronounciation: </b><i>{{brand.pronounciation}}</i><br>
                        <b>Famous Designers:</b> {{brand.designers}}<br>
                    </div>
                    </div>
                </div>
                 <h5>Bio:</h5>
                <div id="bio">                    <p>{{bioPtOne}}<span ref="dots">...</span><span ref="more" hidden>{{bioPtTwo}}</span></p>
                    <button id="rmBtn" ref="rmBtn" @click="readMore">Read More</button>
                </div>
    </div>
</template>

<script>
import LooksCarousel from './LooksCarousel.vue'
import json from '../assets/designDictData.json'

export default {
    name: 'MoreDetails',
    props: ['selectedBrand'],
    components: {
        LooksCarousel,
    },
    computed: {
        brand() {
            json.brands.sort((a,b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0))
            return json.brands[this.selectedBrand]
        },
        bioPtOne() { 
            return this.brand.bio.slice(0,90)
        },
        bioPtTwo() { 
            return this.brand.bio.slice(90,700)
        },
    },
    methods: {
        readMore() {
            if (this.$refs["more"].hidden) {
                this.$refs["more"].hidden = false
                this.$refs["dots"].hidden = true
                this.$refs["rmBtn"].innerHTML = "Read Less"
            } else {
                this.$refs["more"].hidden = true
                this.$refs["dots"].hidden = false
                this.$refs["rmBtn"].innerHTML = "Read More"
            }
        }
    }
}
</script>

<style scoped>
@media only screen and (min-height: 550px) and (max-height: 900px) {
    .container-info {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    #logoAndShop {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .info {
        background-color:#141414;
        color: whitesmoke;
        padding: 15px;
        margin-bottom: 20px;
        border-left: 4px solid pink;
        border-right: 4px solid pink;
    }
    img {
    width: 170px;
    height: 170px;
    margin: 10px;
}

}

@media only screen and (min-height: 300px) and (max-height: 450px) {
    .container-info {
        display: flex;
    }
    #logoAndShop {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 30px;
        margin-left: 30px;
    }
    .info {
        background-color:#141414;
        color: whitesmoke;
        padding: 15px;
        margin-bottom: 20px;
        border-top: 4px solid pink;
        border-bottom: 4px solid pink;
        margin: 5px;
    }
    #keyInfo {
        align-self: center;
        margin-right: 20px;
        margin-left: 20px;
    }
    img {
        width: 130px;
        height: 130px;
        margin: 10px;
    }
    #bio {
        display: flex;
    }
    #bio p {
        width: 500px;
        margin-left: 10px;
    }
    h5 {
        margin-left: 10px;
    }

}

h5 {
    font-weight: 600;
}

a {
    padding: 4px;
    font-size: 18px;
    background-color: pink;
    border-bottom: 4px solid red;
    color: black;
    margin-bottom: 30px;
}

#rmBtn {
    position: absolute;
    right: 20px;
    background-color: #141414;
    color: whitesmoke;
    border: none;
    margin-bottom: 30px;
}

</style>