<template>
  <div class="v-regexp-tool-wrapper">
    <div class="v-regexp-tool-input">
      <input type="text" v-model="regExpStr" placeholder="Write Regular Expression Here...">
    </div>
    <div class="v-regexp-tool-textarea">
      <textarea v-model="content" placeholder="Write Text Content Here..."></textarea>
    </div>
    <div class="v-regexp-tool-highlight">
      <widget-highlight :items="matchResult"></widget-highlight>
    </div>
  </div>
</template>
<script>
'use strict';
import WidgetHighlight from './WidgetHighlight.vue';
export default {
  components: {
    WidgetHighlight
  },
  computed: {
    matchResult: function () {
      const regExp = this.parseRegExpStr(this.regExpStr);
      let input = this.content;
      if (!regExp) {
        return null;
      }
      if (!input) {
        return null;
      }
      regExp.lastIndex = 0;
      let lastIndex = regExp.lastIndex;
      const matches = [];
      let result = regExp.exec(input);
      while (regExp.lastIndex && result !== null) {
        if (result.index > lastIndex) {
          matches.push({
            text: input.substring(lastIndex, result.index),
            match: false
          });
        }
        matches.push({
          text: result[0],
          match: true
        });
        lastIndex = regExp.lastIndex;
        result = regExp.exec(input);
      }
      if (lastIndex < input.length) {
        matches.push({
          text: input.substring(lastIndex),
          match: false
        });
      }
      return matches;
    }
  },
  data () {
    return {
      content: '',
      regExpStr: ''
    };
  },
  methods: {
    parseRegExpStr: function (inputStr) {
      if (!inputStr) {
        return null;
      }
      const beginPos = inputStr.indexOf('/');
      const endPos = inputStr.lastIndexOf('/');
      if (beginPos < 0) {
        return null;
      }
      if (endPos <= beginPos) {
        return null;
      }
      const regExpStr = inputStr.substring(beginPos + 1, endPos);
      const flag = inputStr.substring(endPos + 1);
      if (regExpStr.length <= 0) {
        return null;
      }
      try {
        return new RegExp(regExpStr, flag);
      } catch (error) {
        return null;
      }
    }
  }
};
</script>
<style>
.v-regexp-tool-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
}

.v-regexp-tool-input,
.v-regexp-tool-textarea,
.v-regexp-tool-highlight {
  padding: 10px;
  border-bottom: 1px solid white;
}

.v-regexp-tool-highlight {
  border: none;
  padding: 16px;
  border: none;
  font-size: 24px;
  outline: none;
}

.v-regexp-tool-textarea {
  height: 40%;
}

.v-regexp-tool-input input, .v-regexp-tool-textarea textarea{
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  border: none;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 -2px 1px rgba(255, 255, 255, 0.03);
  font-size: 24px;
  outline: none;
  color: inherit;
  font-family: inherit;
}

.v-regexp-tool-textarea textarea{
  resize: none;
  height: 100%;
}

.v-regexp-tool-input input::-webkit-input-placeholder,
.v-regexp-tool-textarea textarea::-webkit-input-placeholder {
  font-style: italic;
}

</style>
