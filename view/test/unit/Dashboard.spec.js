'use strict';
import Dashboard from '../../src/components/Dashboard.vue';
import WebSocketServiceMock from '../mock/WebSocketServiceMock';
import chai from 'chai';
import TestUtil from '../util/util';
import VueUtil from '../util/vue-util';

const expect = chai.expect;

Dashboard.init({
  ws: new WebSocketServiceMock()
});

describe('Dashboard.vue', () => {
  it('websocket service should be available', async() => {
    const vm = VueUtil.Mount(Dashboard);
    await TestUtil.waitsFor(() => {
      expect(vm.$el.querySelector('button#debugSend').disabled).equal(false);
    }, 100);
  });
});
