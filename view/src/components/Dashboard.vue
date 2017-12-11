<template>
  <div id="dashborad" class="dashboard">
    <div class="wrapper">
      <div class="left">
        <h2 class="sidebar-title">L-Dashboard</h2>
        <dashboard-nav v-bind:items="items"></dashboard-nav>
      </div>
      <div class="right">
        <h1>Panel</h1>
        <router-view></router-view>
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

import DashboardNav from "./DashboardNav.vue";
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Monitor = {
  template: '<div>monitor</div>'
};
const ToDoList = {
  template: '<div>to do list</div>'
};
const RegExpTool = {
  template: '<div>regExp tool</div>'
};
const router = new VueRouter({
  routes: [
    { path: '/dashboard/monitors', component: Monitor },
    { path: '/dashboard/to_do_list', component: ToDoList },
    { path: '/dashboard/reg_exp_tool', component: RegExpTool }
  ]
})
export default {
  name: "dashborad",
  props: {
    ws: Object
  },
  router: router,
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
</style>
