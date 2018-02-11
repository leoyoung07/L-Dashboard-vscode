<template>
  <div id="app" class="app app-black-theme">
    <view-reg-exp-tool></view-reg-exp-tool>
  </div>
</template>

<script>
import ViewNetworkTool from '../../components/ViewNetworkTool.vue';

export default {
  name: 'App',
  data () {
    return {
    };
  },
  components: {
    ViewNetworkTool
  },
  methods: {
  }
};
</script>
<style>
.app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}
.app-black-theme {
  background: #1E1E1E;
  color: white;
}
</style>
