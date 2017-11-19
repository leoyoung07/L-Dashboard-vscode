import Vue from "vue";
import dashboardApp from "./dashboard-app.vue";

const app = new Vue({
  el: '#dashboardContainer',
  render: function (createElement) {
    return createElement(dashboardApp);
  }
});
