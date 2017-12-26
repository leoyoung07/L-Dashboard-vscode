'use strict';
import chai from 'chai';
import DashboardRoute from '../../src/routes/DashboardRoute';
import DashboardView from '../../src/components/DashboardView.vue';
import VueRouter from 'vue-router';
import VueUtil from '../util/vue-util';

const expect = chai.expect;
const router = new VueRouter(DashboardRoute);

describe('DashboardView.vue', () => {
  it('should render correct title', () => {
    const title = 'Monitor';
    const vm = VueUtil.Mount(DashboardView, {
      props: {
        title: title
      }
    }, {
      router: router
    });
    expect(
      vm.$el
      .querySelector('div.dashboard-view-wrapper h1')
      .innerText
      .toLowerCase()
    ).equals(title.toLowerCase());
  });
});
