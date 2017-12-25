import Vue from 'vue';
import Hello from '../../src/components/Hello.vue';
import chai from 'chai';

const expect = chai.expect;

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    });
    expect(vm.$el.querySelector('h1').textContent).equal('Welcome to Your Vue.js App');
  });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
