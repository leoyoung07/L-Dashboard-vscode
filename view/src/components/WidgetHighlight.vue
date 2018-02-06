<template>
  <div class="w-highlight-wrapper">
    <span
      v-for="(item, index) in items"
      :key="index"
      :class="{'w-highlight': item.match}"
      v-html="getEncodedHtml(item.text)"
    ></span>
  </div>
</template>

<script>
'use strict';
import HtmlEntities from '../util/HtmlEntities';
export default {
  name: 'WidgetHighlight',
  methods: {
    getEncodedHtml (html) {
      return HtmlEntities.encode(html);
    }
  },
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
