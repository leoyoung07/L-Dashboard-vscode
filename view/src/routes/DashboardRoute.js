'use strict';
import DashboardView from "../components/DashboardView.vue";
import moment from "moment";
import StorageService from "../services/StorageService";
import ViewMonitor from "../components/ViewMonitor.vue";
import ViewToDoList from "../components/ViewToDoList.vue";
import ViewRegExpTool from "../components/ViewRegExpTool.vue";
export default {
  routes: [
    {
      path: "/dashboard/monitors",
      component: DashboardView,
      children: [
        {
          path: "",
          component: ViewMonitor
        }
      ],
      props: {
        title: "Monitors"
      }
    },
    {
      path: "/dashboard/to_do_list",
      component: DashboardView,
      children: [
        {
          path: "",
          component: ViewToDoList,
          props: {
            date: moment().format("YYYYMMDD"),
            storageService: new StorageService()
          }
        }
      ],
      props: {
        title: "To Do List"
      }
    },
    {
      path: "/dashboard/reg_exp_tool",
      component: DashboardView,
      children: [
        {
          path: "",
          component: ViewRegExpTool
        }
      ],
      props: {
        title: "RegExp Tool"
      }
    }
  ]
};
