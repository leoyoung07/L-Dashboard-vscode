<template>
  <div
    class="w-datepicker-wrapper"
    :style="{top: top, left: left, bottom: bottom, right: right}">
    <!-- <select id="dateSelect" v-model="selectedDate" @change="dateSelectChange">
      <option v-for="(date, index) in dateList" :key="index" :value="date">{{ formatedDate(date) }}</option>
    </select> -->
    <div
      class="w-datepicker-flex-center w-datepicker-sm-icon"
      @click="toggleSelectVisible">
      <i class="w-datepicker-icon-history"></i>
    </div>
    <ul
      class="w-datepicker-select-list"
      v-show="isSelectVisible"
      @blur="isSelectVisible=false">
      <li
        v-for="(date, index) in dateList"
        :key="index"
        @click="dateSelectChange(date)"
        :class="{ 'w-datepicker-select-item': date === selectedDate }">
        {{ formatedDate(date) }}
      </li>
    </ul>
  </div>
</template>
<script>
'use strict';
import moment from 'moment';
export default {
  name: 'WidgetDatePicker',
  props: {
    date: {
      type: String,
      default: function () {
        return '';
      }
    },
    top: {
      type: String,
      default: function () {
        return 'initial';
      }
    },
    left: {
      type: String,
      default: function () {
        return 'initial';
      }
    },
    bottom: {
      type: String,
      default: function () {
        return 'initial';
      }
    },
    right: {
      type: String,
      default: function () {
        return 'initial';
      }
    }
  },
  data () {
    return {
      selectedDate: this.date,
      dateList: this.getRecentDays(6),
      isSelectVisible: false
    };
  },
  methods: {
    formatedDate: function (date) {
      return moment(date).format('YYYY-MM-DD');
    },
    dateSelectChange: function (date) {
      this.selectedDate = date;
      this.$emit('date-select-change', date);
      this.isSelectVisible = false;
    },
    getRecentDays: function (daysAgo) {
      const dateList = [];
      for (let i = 0; i <= daysAgo; i++) {
        dateList.push(
          moment()
            .add(i - daysAgo, 'days')
            .format('YYYYMMDD')
        );
      }
      return dateList;
    },
    toggleSelectVisible: function () {
      this.isSelectVisible = !this.isSelectVisible;
    }
  },
  watch: {
    date: function (val) {
      this.selectedDate = val;
    }
  }
};
</script>
<style>
.w-datepicker-wrapper {
  position: absolute;
  z-index: 999;
}
.w-datepicker-sm-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.w-datepicker-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-datepicker-icon-history {
  background-image: url('data:image/svg+xml;utf8,<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  display: inline-block;
}
.w-datepicker-select-list {
  position: absolute;
  right: 0;
  width: 150px;
  background: #343434;
  margin: 5px 0 0 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
  border-radius: 3px;
}
.w-datepicker-select-list li{
  list-style: none;
  margin: 3px 0;
  padding: 2px 0;
  cursor: pointer;
  width: 100%;
  text-align: center;
}
.w-datepicker-select-list li:hover, .w-datepicker-select-item{
  background: #676767;
}
</style>
