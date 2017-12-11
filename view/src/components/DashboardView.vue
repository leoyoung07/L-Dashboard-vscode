<template>
  <div class="dashboard-view-wrapper">
    <h1>Panel</h1>
    <router-view></router-view>
  </div>
</template>
<script>
'use strict';
export default {
  name: 'dashboard-view'
};
</script>
<style>
.dashboard-view-wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>


