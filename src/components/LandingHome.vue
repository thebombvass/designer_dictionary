<template>
    <div id="landscape-orient">
    <div id="landingHome">
        <div>
            <p> Designer Dictionary </p>
            <div id="btn-container" class="d-flex justify-content-center align-items-end">
                <button @click="$emit('see-details', ['ListingPage',''])" class="btn">Get Started</button>
            </div>
         </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'LandingHome',
}
</script>

<style scoped>
@media only screen and (min-height: 500px) and (max-height: 600px) {
    #landingHome {
    background-image: url(/assets/sketch.png);
    background-size: 360px 550px;
    background-color: #141414;
    background-position: center;
    height: 570px;
    top: 0;
}

#btn-container {
    height: 410px;
}

p {
    font-size: 25px;
    font-style: italic;
    color: rgb(255, 202, 214);
    text-align: center;
    padding-top: 15px;
}
}

@media only screen and (min-height: 600px) and (max-height: 700px) {
    #landingHome {
    background-image: url(/assets/sketch.png);
    background-color: #141414;
    background-repeat: repeat-y;
    background-position: center;
    height: 670px;
    top: 0;
}

#btn-container {
    height: 470px;
}

p {
    font-size: 25px;
    font-style: italic;
    color: rgb(255, 202, 214);
    text-align: center;
    padding-top: 15px;
}
}

@media only screen and (min-height:700px) and (max-height: 800px) {
    #landingHome {
    background-image: url(/assets/sketch.png);
    background-color: #141414;
    background-repeat: no-repeat;
    background-position: center;
    height: 740px;
    top: 0;
}

#btn-container {
    height: 500px;
}

p {
    font-size: 30px;
    font-style: italic;
    color: rgb(255, 202, 214);
    text-align: center;
    padding-top: 25px;
}
}

@media only screen and (min-height:800px) and (max-height: 900px) {
    #landingHome {
    background-image: url(/assets/sketch.png);
    background-color: #141414;
    background-repeat: no-repeat;
    background-position: center;
    height: 815px;
    top: 0;
}

#btn-container {
    height: 530px;
}

p {
    font-size: 30px;
    font-style: italic;
    color: rgb(255, 202, 214);
    text-align: center;
    padding-top: 25px;
}
}

@media only screen and (min-height: 300px) and (max-height: 450px) {
    #landingHome {
    background-image: url(/assets/sketch_border.png);
    background-size: 260px 300px;
    background-position: center;
    background-repeat: no-repeat;
    height: 380px;
    top: 0;
    }

    #landscape-orient {
        background-image: -webkit-radial-gradient(circle, white 50%, rgb(133, 131, 131) 70%, rgb(14, 14, 14) 80%);
    }

    #btn-container {
        height: 290px;
    }

    p {
        font-size: 25px;
        font-style: italic;
        color: #141414;
        text-shadow: 2px 2px rgb(255, 202, 214);
        text-align: center;
        padding-top: 15px;
    }
}

button {
    background-color: rgb(255, 202, 214);
}

</style>