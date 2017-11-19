<template>
  <div id="app">
    <h1>{{response}}</h1>
    <input type="text" v-model="msg">
    <button @click="sendMsg();" v-bind:disabled="!wsEnabled">send</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      ws: null,
      msg: "",
      wsEnabled: false,
      response: "Hello, world"
    };
  },
  created: function() {
    var that = this;
    this.ws = new WebSocket("ws://localhost:7269");
    this.ws.onmessage = function(e) {
      that.response = e.data;
    };
    this.ws.onopen = function(e) {
      that.wsEnabled = true;
    };
  },
  methods: {
    sendMsg: function() {
      this.ws.send(this.msg);
    }
  }
};
</script>
