<template>
  <div id="dashborad" class="dashboard">
    <div class="dashboard-wrapper">
      <div class="dashboard-left">
        <dashboard-nav v-bind:items="items"></dashboard-nav>
      </div>
      <div class="dashboard-right">
        <router-view></router-view>
      </div>
    </div>
    <div class="dashboard-debug">
      <h1>{{response}}</h1>
      <input type="text" v-model="msg">
      <button @click="sendMsg();" v-bind:disabled="!wsEnabled">send</button>
    </div>
  </div>
</template>

<script>
"use strict";
import DashboardNav from "./DashboardNav.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import DashboardRoute from "../routes/DashboardRoute";

Vue.use(VueRouter);

const router = new VueRouter(DashboardRoute);
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
          name: "Monitors",
          path: "/dashboard/monitors",
          icon: "icon-monitors"
        },
        {
          id: "to_do_list",
          name: "To Do List",
          path: "/dashboard/to_do_list",
          icon: "icon-to_do_list"
        },
        {
          id: "reg_exp_tool",
          name: "RegExp Tool",
          path: "/dashboard/reg_exp_tool",
          icon: "icon-reg_exp_tool"
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
  },
  router: router,
  components: {
    DashboardNav
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
.dashboard-wrapper {
  display: flex;
  flex-grow: 8;
  justify-content: center;
}
.dashboard-left,
.dashboard-right {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
.dashboard-left {
  flex-grow: 1;
  order: 1;
  border-right: 1px solid white;
}
.dashboard-right {
  flex-grow: 9;
  order: 2;
}
.dashboard-debug {
  border-top: 1px solid white;
  flex-grow: 2;
}
</style>
