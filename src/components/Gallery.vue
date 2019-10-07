<template>
    <div id="gallery">
            <div class="container-fluid container-gallery">

                <!--Carousel Wrapper-->
                    <div id="carousel-example-2" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                    <!--Indicators-->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                        <li data-target="#carousel-example-2" data-slide-to="3"></li>
                        <li data-target="#carousel-example-2" data-slide-to="4"></li>
                        <li data-target="#carousel-example-2" data-slide-to="5"></li>
                        <li data-target="#carousel-example-2" data-slide-to="6"></li>
                        <li data-target="#carousel-example-2" data-slide-to="7"></li>
                        <li data-target="#carousel-example-2" data-slide-to="8"></li>
                        <li data-target="#carousel-example-2" data-slide-to="9"></li>
                    </ol>
                    <!--/.Indicators-->
                    <!--Slides-->
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.cover_photo" alt="cover">
                            <div class="mask rgba-black-light"></div>
                        </div>

                        </div>
                        <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_1" alt="photo1">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_2" alt="photo2">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                         <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_3" alt="photo3">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                         <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_4" alt="photo4">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                         <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_5" alt="photo5">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_6" alt="photo6">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                         <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_7" alt="photo7">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                         <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_8" alt="photo8">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <!--Mask color-->
                        <div class="view">
                            <img class="d-block w-100" v-bind:src="show.photo_9" alt="photo9">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        </div>
                    </div>
                    <!--/.Slides-->
                    <!--Controls-->
                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <!--/.Controls-->
                    </div>
                    <!--/.Carousel Wrapper-->
                    <div class="info container-fluid">
                        <b>{{show.brand}}</b> <br>
                        <i>{{show.season}}, {{show.year}}</i><br>
                    </div>
            </div>
    </div>
</template>

<script>
import LooksCarousel from './LooksCarousel.vue'
import json from '../assets/designDictData.json'

export default {
    name: 'Gallery',
    props: ['selectedBrand'],
    components: {
        LooksCarousel,
    }, 
    computed: {
        show() {
            console.log(this.selectedBrand)
            json.shows.sort((a,b) => (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0))
            return json.shows[this.selectedBrand]
        }
    },
}
</script>

<style scoped>
/* style wo media queries */

#gallery {
    background-color: #141414;
    padding-bottom: 50px;
}

.info {
    font-size: 20px;
    color: pink;
    text-align: center;
    margin-top: 10px;
}

/* CSS dependent on screen size here, and in this order: IXV, I5/SEV, I5S, I6-8+S, IXS */
/* above, I=phone, V= vertical, S= sideways */

/* IphoneX Vertical */
@media only screen and (min-height: 800px) and (max-height: 900px) {
   #gallery {
    background-color: #141414;
    padding-bottom: 130px;
    } 
    #carousel-example-2 {
        margin-top: 40px;
    }
    .info {
        margin-top: 40px;
        font-size: 24px;
    }
    .container-gallery {
    display: flex;
    align-items: center;
    flex-direction: column;
    }
}

/* Iphone5/SE Vertical */
@media only screen and (min-height: 500px) and (max-height: 600px) {
    .info {
        font-size: 16px;
    }
    .carousel-item {
        height: 420px;
    }
    .container-gallery {
    display: flex;
    align-items: center;
    flex-direction: column;
    }
}

/* Iphone5 Sideways */
@media only screen and (min-height: 300px) and (max-height: 350px) {
    .container-gallery {
        display: flex;
        height: 205px;
    }
    #carousel-example-2 {
        height: 240px;
        width: 160px;
        margin-left: 80px;
    }
    .carousel-item {
        margin-top: 5px;
        height: 240px;
        width: 160px;
    }
    .info {
        align-self: center;
    }
}

/* Iphone6/7/8 and 6/7/8+ Sideways */
@media only screen and (min-height: 350px) and (max-height: 400px) {
    .container-gallery {
        display: flex;
        height: 260px;
    }
    #carousel-example-2 {
        height: 290px;
        width: 200px;
        margin-left: 80px;
    }
    .carousel-item {
        margin-top: 5px;
        height: 290px;
        width: 200px;
    }
    .info {
        align-self: center;
    }
}

/* IphoneX Sideways */
@media only screen and (min-height: 400px) and (max-height: 450px) {
    .container-gallery {
        display: flex;
        height: 300px;
    }
    #carousel-example-2 {
        height: 320px;
        width: 220px;
        margin-left: 80px;
    }
    .carousel-item {
        margin-top: 5px;
        height: 320px;
        width: 220px;
    }
    .info {
        align-self: center;
    }
}


</style>