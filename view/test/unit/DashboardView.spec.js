import chai from 'chai';
import DashboardRoute from '../../src/routes/DashboardRoute';
import DashboardView from '../../src/components/DashboardView.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

const expect = chai.expect;
Vue.use(VueRouter);
const router = new VueRouter(DashboardRoute);

describe('DashboardView.vue', () => {
  it('should render correct title', () => {
    const title = 'Monitor';
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(DashboardView, {
        props: {
          title: title
        }
      }),
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

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
