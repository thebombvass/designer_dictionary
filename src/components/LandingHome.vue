<template>
    <div id="landscape-orient">
    <div id="landingHome">
        <div>
            <p> Designer Dictionary </p>
            <div id="btn-container" class="d-flex justify-content-center align-items-end">
                <button @click="signIn" class="btn">Sign In</button>
            </div>
         </div>
    </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import {config} from '../helpers/firebaseConfig'

export default {
    name: 'LandingHome',
    methods: {
        signIn: function() {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        },
    },
}
</script>

<style scoped>
/* CSS dependent on screen size here, and in this order: I5/SE-XS, I5/SE-XV*/
/* above, I=phone, V= vertical, S= sideways */

/* Iphone 5/SE Vertical */
@media only screen and (min-height: 500px) and (max-height: 600px) {
    #landingHome {
    background-image: url(https://i.imgur.com/hqda4cw.png);
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

/* Iphone 6/7/8 Vertical */
@media only screen and (min-height: 600px) and (max-height: 700px) {
    #landingHome {
    background-image: url(https://i.imgur.com/hqda4cw.png);
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

/* Iphone 6/7/8+ Vertical */
@media only screen and (min-height:700px) and (max-height: 800px) {
    #landingHome {
    background-image: url(https://i.imgur.com/hqda4cw.png);
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

/* Iphone X Vertical */
@media only screen and (min-height:800px) and (max-height: 900px) {
    #landingHome {
    background-image: url(https://i.imgur.com/hqda4cw.png);
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

/* Iphone 6/7/8, X Vertical */
@media only screen and (min-height: 350px) and (max-height: 400px) {
    #landingHome {
    background-image: url(https://i.imgur.com/EB01bjD.png);
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

/* Iphone 5/SE Vertical */
@media only screen and (min-height: 300px) and (max-height: 350px) {
    #landingHome {
    background-image: url(https://i.imgur.com/EB01bjD.png);
    background-size: 200px 260px;
    background-position: center;
    background-repeat: no-repeat;
    height: 320px;
    top: 0;
    }

    #landscape-orient {
        background-image: -webkit-radial-gradient(circle, white 50%, rgb(133, 131, 131) 70%, rgb(14, 14, 14) 80%);
    }

    #btn-container {
        height: 250px;
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

/* Iphone 6/7/8+ Vertical */
@media only screen and (min-height: 400px) and (max-height: 450px) {
    #landingHome {
    background-image: url(https://i.imgur.com/EB01bjD.png);
    background-size: 260px 300px;
    background-position: center;
    background-repeat: no-repeat;
    height: 415px;
    top: 0;
    }

    #landscape-orient {
        background-image: -webkit-radial-gradient(circle, white 50%, rgb(133, 131, 131) 70%, rgb(14, 14, 14) 80%);
    }

    #btn-container {
        height: 330px;
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