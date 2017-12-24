<template>
  <div class="dashboard-view-wrapper">
    <h1>{{title}}</h1>
    <router-view></router-view>
  </div>
</template>
<script>
"use strict";
export default {
  name: "dashboard-view",
  props: ["title"],
  data() {
    return {
    };
  }
};
</script>
<style>
.dashboard-view-wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px 40px;
  box-sizing: border-box;
}
</style>


