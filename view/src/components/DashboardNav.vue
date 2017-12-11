<template>
  <ul class="nav">
    <li v-for="item in items" v-bind:key="item.id">
      <router-link v-bind:to="item.path">
        <i v-bind:class="item.icon"></i>
        <p>{{ item.name }}</p>
      </router-link>
    </li>
  </ul>
</template>
<script>

export default {
  name: "dashboard-nav",
  props: {
    items: Array
  }
};
</script>

<style>
.nav {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li a {
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
.nav > li p {
  margin: 0;
  line-height: 30px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
