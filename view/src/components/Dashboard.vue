<template>
  <div id="dashborad">
    <h1>{{response}}</h1>
    <input type="text" v-model="msg">
    <button @click="sendMsg();" v-bind:disabled="!wsEnabled">send</button>
  </div>
</template>

<script>
export default {
  name: "dashborad",
  props: {
    ws: Object
  },
  data() {
    return {
      msg: '',
      wsEnabled: false,
      response: ''
    };
  },
  created: function() {
    this.ws.init('ws://localhost:7269');
    this.ws.onmessage = (e) => {
      this.response = e.data;
    };
    this.ws.onopen = (e) => {
      this.wsEnabled = true;
    };
  },
  methods: {
    sendMsg: function() {
      this.ws.send(this.msg);
    }
  }
};
</script>
