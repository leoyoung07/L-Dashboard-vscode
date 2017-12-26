'use strict';
import chai from 'chai';
import DashboardNav from '../../src/components/DashboardNav.vue';
import DashboardRoute from '../../src/routes/DashboardRoute';
import VueUtil from '../util/vue-util';
import VueRouter from 'vue-router';

const expect = chai.expect;
const router = new VueRouter(DashboardRoute);

describe('DashboardNav.vue', () => {
  it('nav bar should render correct content', () => {
    const items = [{
        id: 'monitors',
        name: 'Monitors',
        path: '/dashboard/monitors',
        icon: 'icon-monitors'
      },
      {
        id: 'to_do_list',
        name: 'To Do List',
        path: '/dashboard/to_do_list',
        icon: 'icon-to_do_list'
      },
      {
        id: 'reg_exp_tool',
        name: 'RegExp Tool',
        path: '/dashboard/reg_exp_tool',
        icon: 'icon-reg_exp_tool'
      }
    ];
    const vm = VueUtil.Mount(DashboardNav, {
      props: {
        items: items
      }
    }, {
      router: router
    });
    const $navItems = vm.$el.querySelectorAll('ul.dashboard-nav li');
    expect($navItems.length).equals(items.length);
    for (let i = 0; i < $navItems.length; i++) {
      const $li = $navItems[i];
      expect($li.innerText.trim().toUpperCase()).equals(items[i].name.toUpperCase());
    }
  });
});
