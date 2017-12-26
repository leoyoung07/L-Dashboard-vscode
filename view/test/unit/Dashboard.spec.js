'use strict';
import Vue from 'vue';
import Dashboard from '../../src/components/Dashboard.vue';
import WebSocketServiceMock from '../mock/WebSocketServiceMock';
import chai from 'chai';
import TestUtil from '../util/util';

const expect = chai.expect;

Dashboard.init({
  ws: new WebSocketServiceMock()
});

describe('Dashboard.vue', () => {
  it('websocket service should be available', async() => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Dashboard)
    });
    await TestUtil.waitsFor(() => {
      expect(vm.$el.querySelector('button#debugSend').disabled).equal(false);
    }, 100);
  });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
