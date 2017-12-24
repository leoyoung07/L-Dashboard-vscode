<template>
  <div class="w-datepicker-wrapper">
    <select v-model="selectedDate" @change="dateSelectChange">
      <option v-for="(date, index) in dateList" v-bind:key="index"  v-bind:value="date">{{ formatedDate(date) }}</option>
    </select>
  </div>
</template>
<script>
'use strict';
import moment from 'moment';
export default {
  name: "widget-date-picker",
  props: {
    date: String
  },
  data() {
    return {
      selectedDate: this.date,
      dateList: this.getRecentDays(6)
    };
  },
  methods: {
    formatedDate: function (date) {
      return moment(date).format('YYYY-MM-DD')
    },
    dateSelectChange: function () {
      this.$emit('date-select-change', this.selectedDate);
    },
    getRecentDays: function (daysAgo) {
      const dateList = [];
      for (let i = 0; i <= daysAgo; i++) {
        dateList.push(moment().add(i - daysAgo, 'days').format('YYYYMMDD'));
      }
      return dateList;
    }
  },
  watch: {
    date: function (val, oldVal) {
      this.selectedDate = val;
    }
  }
};
</script>
<style>

</style>
