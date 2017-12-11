<template>
  <div class="dashboard-nav-wrapper">
    <h2 class="dashboard-nav-title">L-Dashboard</h2>
    <ul class="dashboard-nav">
      <li v-for="item in items" v-bind:key="item.id">
        <router-link v-bind:to="item.path">
          <i v-bind:class="item.icon"></i>
          <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
'use strict';
export default {
  name: "dashboard-nav",
  props: {
    items: Array
  }
};
</script>

<style>
.dashboard-nav {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}
.dashboard-nav > li {
  position: relative;
  display: block;
}
.dashboard-nav > li a {
  color: white;
  text-decoration: none;
  margin: 10px 0px;
  padding-left: 25px;
  padding-right: 25px;
  opacity: 0.7;
  position: relative;
  display: block;
  padding: 10px 15px;
}
.dashboard-nav > li p {
  margin: 0;
  line-height: 30px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
.dashboard-nav-title {
  border-bottom: 1px solid white;
  text-align: center;
  padding: 13px 0;
  margin: 0 20px;
}
.dashboard-nav-wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
