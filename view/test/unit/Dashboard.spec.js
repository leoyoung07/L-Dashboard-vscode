import Vue from 'vue';
import Dashboard from '../../src/components/Dashboard.vue';
import WebSocketServiceMock from '../mock/WebSocketServiceMock';

Dashboard.init({
  ws: new WebSocketServiceMock()
});

describe('Dashboard.vue', () => {
  it('pass value by props', (done) => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Dashboard)
    });
    setTimeout(() => {
      expect(vm.$el.querySelector('button#debugSend').disabled).toBe(false);
      done();
    }, 100);
  });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
