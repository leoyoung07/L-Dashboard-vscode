import Vue from 'vue';
import Dashboard from '../../src/components/Dashboard.vue';
import WebSocketService from '../../src/services/WebSocketService';

describe('Dashboard.vue', () => {
  it('pass value by props', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Dashboard, {
        props: {
          ws: new WebSocketService()
        }
      })
    });
    expect(vm.$el.querySelector('h1').textContent).toBe('');
  });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
