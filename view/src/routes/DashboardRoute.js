'use strict';
import DashboardView from '../components/DashboardView.vue';
import StorageService from '../services/StorageService';
import ViewMonitor from '../components/ViewMonitor.vue';
import ViewToDoList from '../components/ViewToDoList.vue';
import ViewRegExpTool from '../components/ViewRegExpTool.vue';

ViewToDoList.init({
  storageService: new StorageService()
});

export default {
  routes: [
    {
      path: '/dashboard/monitors',
      component: DashboardView,
      children: [
        {
          path: '',
          component: ViewMonitor
        }
      ],
      props: {
        title: 'Monitors'
      }
    },
    {
      path: '/dashboard/to_do_list',
      component: DashboardView,
      children: [
        {
          path: ':date',
          component: ViewToDoList,
          props: true
        },
        {
          path: '',
          redirect: 'today'
        }
      ],
      props: {
        title: 'To Do List'
      }
    },
    {
      path: '/dashboard/reg_exp_tool',
      component: DashboardView,
      children: [
        {
          path: '',
          component: ViewRegExpTool
        }
      ],
      props: {
        title: 'RegExp Tool'
      }
    }
  ]
};
