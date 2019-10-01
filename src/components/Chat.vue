<template>
  <div id="chat">
    <div id="ReadMessagesContainer">
      <div ref='theul'>
            <div v-for="item in posts" class="oneItem">
                <span class="users"><b>{{item.user}}</b></span>
                <span class="messages">{{item.message}}</span>
            </div>
      </div>
    </div>
    <div id="writeMessageContainer" class="d-flex">
      <textarea ref='inputmsg' v-model="message" class="form-control" placeholder="Write your message here"></textarea>
      <button @click="sendMessage" class="btn">Send</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Chat",
  data() {
    return {
      message: "",
      posts: []
    };
  },
  computed: {
    user() {
      return firebase.auth().currentUser.displayName;
    },
  },
  methods: {
    sendMessage: function() {
      firebase
        .database()
        .ref("posts/")
        .push({ user: this.user, message: this.message });
      console.log(this.newKey);
      console.log(this.message);
      console.log(this.user);
      this.makePostsArray();
      this.message=""
    },
    makePostsArray: function() {
        this.posts=[]
        firebase.database().ref("posts/").once("value", data => {
           let allMessages = data.val();
           let keys = Object.keys(allMessages);
           keys.forEach(element => {
               this.posts.push(allMessages[element])
           });   
        });
    }
  },
  created() {
      this.makePostsArray()
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
    background-color: rgb(255, 202, 214);
    color: black;
    border-radius: 10px;
    padding: 10px;
    box-shadow: #141414;
    text-align: right;
    width: auto;
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
    background-color: #363636;
    height: 600px;
    color: lightgray;
    padding: 10px;
}
</style>