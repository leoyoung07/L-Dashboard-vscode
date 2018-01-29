<template>
  <div id="app" class="app app-black-theme">
    <view-to-do-list></view-to-do-list>
  </div>
</template>

<script>
import StorageService from '../../services/StorageService';
import ViewToDoList from '../../components/ViewToDoList.vue';

ViewToDoList.init({
  storageService: new StorageService()
});

export default {
  name: 'App',
  data () {
    return {
    };
  },
  components: {
    ViewToDoList
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
