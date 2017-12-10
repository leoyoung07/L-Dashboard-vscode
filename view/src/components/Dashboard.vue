<template>
  <div id="dashborad" class="dashboard">
    <div class="wrapper">
      <div class="left">
        <h2 class="sidebar-title">L-Dashboard</h2>
        <ul class="nav">
          <li v-for="item in items" v-bind:key="item.id">
            <a href="#">
              <i></i>
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="right">
        <h1>Panel</h1>
      </div>
    </div>
    <div class="debug">
      <h1>{{response}}</h1>
      <input type="text" v-model="msg">
      <button @click="sendMsg();" v-bind:disabled="!wsEnabled">send</button>
    </div>
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
      msg: "",
      wsEnabled: false,
      response: "",
      items: [
        {
          id: "monitors",
          name: "Monitors"
        },
        {
          id: "to_do_list",
          name: "To Do List"
        },
        {
          id: "reg_exp_tool",
          name: "RegExp Tool"
        }
      ]
    };
  },
  created: function() {
    this.ws.init("ws://localhost:7269");
    this.ws.onmessage = e => {
      this.response = e.data;
    };
    this.ws.onopen = e => {
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
<style>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.wrapper {
  border: 1px white solid;
  display: flex;
  flex-grow: 8;
  justify-content: center;
}
.left,
.right {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
.left {
  flex-grow: 1;
  order: 1;
  border-right: 1px solid white;
}
.right {
  flex-grow: 9;
  order: 2;
}
.debug {
  border: 1px solid white;
  flex-grow: 2;
}
.sidebar-title {
  border-bottom: 1px solid white;
  text-align: center;
  padding: 13px 0;
  margin: 0 20px;
}
.nav {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li a {
  color: white;
  text-decoration: none;
  margin: 10px 0px;
  padding-left: 25px;
  padding-right: 25px;
  opacity: 0.7;
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li p {
  margin: 0;
  line-height: 30px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
