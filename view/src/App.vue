<template>
  <div id="app" class="app app-black-theme">
    <dashboard></dashboard>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import WebSocketServiceMock from "../test/mock/WebSocketServiceMock";

Dashboard.init({
  ws: new WebSocketServiceMock()
});

export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    Dashboard
  }
};
</script>
<style>
.app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.app-black-theme {
  background: #1E1E1E;
  color: white;
}
</style>
