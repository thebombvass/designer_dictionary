<template>
  <div id="chat">
    <div id="ReadMessagesContainer" class="pre-scrollable">
    <!-- prints out available messages here from makePostsArray method -->
      <div ref='theul'>
            <div v-for="item in posts" v-bind:ref="item.uid" class="oneItem">
                <span class="users"><b>{{item.user}}</b></span>
                <span class="messages">{{item.message}}</span>
            </div>
      </div>
    </div>
    <!-- write messages and be able to send them by clicking send or my typing enter -->
    <div id="writeMessageContainer" class="d-flex">
      <textarea v-on:keyup.enter="sendMessage" ref='inputmsg' v-model="message" class="form-control" placeholder="Write your message here"></textarea>
      <button @click="sendMessage" class="btn">Send</button>
    </div>
  </div>
</template>

<script>
// importing firebase for chat/db use
import firebase from "firebase";

export default {
  name: "Chat",
  data() {
    return {
      message: "",
      posts: []
    };
  },
  //accessing auth part of firebase to be able to fill in user data in db when you send a message. 
  // This is used to color the current users message and display person sending the message
  computed: {
    user() {
      return firebase.auth().currentUser.email;
    },
    uid() {
      return firebase.auth().currentUser.uid;
    }
  },
  methods: {
    //Function called on enter or on pressing 'send' key to write information to the db
    // This function also calls makePostsArray to refil the messages screen with the new 
    // written message, as well as styleBasedOnUser to color the new message if the current
    // user wrote it. Must be on a timer for later to wait for makePostsArray
    sendMessage: function() {
      console.log("sendMessage")
      firebase
        .database()
        .ref("posts/")
        .push({ user: this.user, message: this.message, uid: this.uid });
      this.message=""
      this.makePostsArray();
        window.setTimeout(()=> {
        this.styleBasedOnUser()
            }, 50)
    },
    //fills in the screen of messages with appropriate information from firebase DB
    makePostsArray: function() {
        console.log("makeposts")
        firebase.database().ref("posts/").on("value", data => {
            this.posts=[]
           let allMessages = data.val();
           let keys = Object.keys(allMessages);
           keys.forEach(element => {
               this.posts.push(allMessages[element])
           });
        });
        //this function is called to style the messages of the current user upon
        // creation of messages screen 
        this.styleBasedOnUser()
    },

    //styling messages from current user differently
    styleBasedOnUser: function() {
        console.log('style')
        let currentuid = this.uid
        console.log(currentuid)
        console.log(this.$refs[currentuid])
        let rorfs = this.$refs[currentuid]
        for(let i=0; i<rorfs.length; i++) {
            rorfs[i].style.backgroundColor = "#ebebeb";
            rorfs[i].style.textAlign = "right";
        }
    },
    //pushin the styleBasedOnUser a little bit later after mount so that it has time to 
    //create/catch the $refs. I believe this component is being loaded asychronously?
    // since refs should be available in mounted() hook
    chronTpyeThing: function() {
        console.log("chron1")
            window.setTimeout(()=> {
                this.styleBasedOnUser()
            }, 1000)
        console.log("chron2")
            window.setTimeout(()=> {
                this.styleBasedOnUser()
            }, 2000)
    },
  },
  created() {
      this.makePostsArray()
  },
  mounted() {
      this.chronTpyeThing()
  }
};
</script>

<style scoped>
ul {
    -webkit-appearance: none;
    list-style-type:none;
}

.oneItem {
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: rgb(253, 208, 208);
    color: black;
    border-radius: 10px;
    padding: 10px;
    box-shadow: #141414;
    text-align: left;
}

#writeMessageContainer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  padding-top: 10px;
  background-color: #141414;
}

#writeMessageContainer button {
  width: 18%;
  background-color: rgb(255, 202, 214);
}

#ReadMessagesContainer {
    max-height: 90%;
    min-height: 90%;
    padding: 10px;
    padding-top: 60px;
}

#chat {
    background-color: #363636;
    position: absolute;
    top:0; right: 0; bottom: 0; left: 0;
}
/* 
@media only screen and (min-height: 660px) and (max-height: 670px) {
    
    #ReadMessagesContainer {
    max-height: 540px;
    min-height: 540px;
    padding: 10px;
    }
} */
</style>