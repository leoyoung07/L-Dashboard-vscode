<template>
  <div id="app" class="app app-black-theme">
    <widget-date-picker @date-select-change="onDateSelectChange" :date="date">
    </widget-date-picker>
    <view-to-do-list :date="date"></view-to-do-list>
  </div>
</template>

<script>
import moment from 'moment';
import StorageService from '../../services/StorageService';
import Util from '../../util/util';
import ViewToDoList from '../../components/ViewToDoList.vue';
import WidgetDatePicker from '../../components/WidgetDatePicker.vue';

ViewToDoList.init({
  storageService: new StorageService()
});

export default {
  name: 'App',
  data () {
    return {
      date: moment().format('YYYYMMDD')
    };
  },
  components: {
    ViewToDoList,
    WidgetDatePicker
  },
  methods: {
    onDateSelectChange: function (date) {
      Util.debug('onDateSelectChange', date);
      this.date = date;
    }
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
