<template>
  <div id="app">
    <dashboard v-bind:ws="ws"></dashboard>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import WebSocketService from "./services/WebSocketService";

export default {
  name: 'app',
  data () {
    return {
      ws: new WebSocketService()
    };
  },
  components: {
    Dashboard
  }
}
</script>
