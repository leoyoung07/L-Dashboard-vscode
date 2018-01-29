'use strict';
import Vue from 'vue';
export default {
  Mount: (component, componentOptions, options) => {
    options = options || {};
    return new Vue({
      el: document.createElement('div'),
      render: h => h(component, componentOptions)
    });
  }
};
