import Vue from 'vue';
import Dashboard from '../../src/components/Dashboard.vue';
import WebSocketServiceMock from '../mock/WebSocketServiceMock';
import chai from 'chai';

const expect = chai.expect;

Dashboard.init({
  ws: new WebSocketServiceMock()
});

const waitsFor = (func, timeout) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      func();
      resolve();
    } catch (error) {
      reject(error);
    }
  }, timeout);
});

describe('Dashboard.vue', () => {
  it('pass value by props', async() => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Dashboard)
    });
    await waitsFor(() => {
      expect(vm.$el.querySelector('button#debugSend').disabled).equal(false);
    }, 100);
  });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
