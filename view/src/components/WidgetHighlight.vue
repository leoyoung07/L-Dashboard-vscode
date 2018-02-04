<template>
  <div class="w-highlight-wrapper">
    <span
      v-for="(item, index) in items"
      :key="index"
      :class="{'w-highlight': item.match}"
    >{{ item.text }}</span>
  </div>
</template>

<script>
'use strict';
export default {
  name: 'WidgetHighlight',
  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      }
    },
    highlightColor: {
      type: String,
      default: function () {
        return '';
      }
    }
  }
};
</script>

<style>
.w-highlight {
  background: #004273;
  border: 1px solid #757575;
}
</style>
