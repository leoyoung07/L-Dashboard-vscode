'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default {
  Mount: (component, componentOptions, options) => {
    options = options || {};
    return new Vue({
      el: document.createElement('div'),
      render: h => h(component, componentOptions),
      router: options.router
    });
  }
};
