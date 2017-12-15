<template>
  <div class="v-todo-wrapper">
    <h3>{{formattedDate}}</h3>
    <div class="v-todo-edit">
      <input type="text" class="v-todo-input" v-model="currentItem.text" placeholder="What needs to be done?">
      <button v-on:click="addItem" class="v-todo-btn-add">ADD</button>
    </div>
    <ul class="v-todo-list">
      <li v-for="(item, index) in items" v-bind:key="item.id" v-bind:class="{'v-todo-item-done': item.done}">
        <input type="checkbox" class="v-todo-checkbox" v-model="item.done">
        <span v-on:click="setCurrent(item)" class="v-todo-text">{{ item.text }}</span>
        <button v-on:click="removeItem(index)" class="v-todo-btn-del">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
"use strict";
import moment from "moment";
export default {
  name: "view-to-do-list",
  props: {
    date: String,
    storageService: Object
  },
  data() {
    return {
      items: [],
      currentItem: {}
    };
  },
  methods: {
    setCurrent: function(item) {
      this.currentItem = item;
    },
    removeItem: function(index) {
      this.items.splice(index, 1);
    },
    addItem: function() {
      if (typeof this.currentItem.text !== "string") {
        return;
      }
      if (this.currentItem.text.trim() === "") {
        return;
      }
      this.currentItem.id = this.nextItemId;
      this.currentItem.done = false;
      this.items.push(this.currentItem);
      this.currentItem = {};
    }
  },
  computed: {
    nextItemId: function() {
      var max = -1;
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        if (item.id > max) {
          max = item.id;
        }
      }
      return max + 1;
    },
    formattedDate: function() {
      return moment(this.date).format("YYYY-MM-DD");
    }
  },
  watch: {
    items: {
      handler: async function(val, oldVal) {
        await this.storageService.update("todo-items", val);
      },
      deep: true
    }
  },
  beforeCreate() {
    console.log("beforeCreate", this.items);
  },
  async created() {
    console.log("created", this.items);
    this.items = await this.storageService.get("todo-items");
  },
  beforeMount() {
    console.log("beforeMount", this.items);
  },
  mounted() {
    console.log("mounted", this.items);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.items);
  },
  updated() {
    console.log("updated", this.items);
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.items);
  },
  destroyed() {
    console.log("destroyed", this.items);
  }
};
</script>
<style>
.v-todo-wrapper {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.v-todo-input {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 -2px 1px rgba(255, 255, 255, 0.03);
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  outline: none;
  -webkit-font-smoothing: antialiased;
  width: 69%;
}
.v-todo-input::-webkit-input-placeholder {
  font-style: italic;
}
.v-todo-btn-add {
  padding: 16px 0 16px 0;
  border: none;
  background: rgba(105, 165, 146, 0.53);
  box-shadow: inset 0 -2px 1px rgba(255, 255, 255, 0.03);
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  outline: none;
  -webkit-font-smoothing: antialiased;
  width: 12%;
  cursor: pointer;
}
.v-todo-text {
  cursor: pointer;
  display: inline-block;
}
.v-todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #adadad;
}
.v-todo-list li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #585858;
  padding: 8px;
}
.v-todo-list li:last-child {
  border-bottom: none;
}
.v-todo-checkbox {
  text-align: center;
  width: 40px;
  height: auto;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
}
.v-todo-checkbox::after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="5"/></svg>');
}
.v-todo-checkbox:checked::after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="5"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}
.v-todo-btn-del {
  outline: none;
  margin: auto 0;
  vertical-align: middle;
  color: #ff9800;
  height: auto;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-appearance: none;
  font-size: 18px;
  font-weight: bold;
}
.v-todo-item-done .v-todo-text {
  text-decoration: line-through;
  color: #808080;
}
</style>

