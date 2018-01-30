'use strict';
import moment from 'moment';
import WidgetDatePicker from '../../../src/components/WidgetDatePicker.vue';
import VueUtil from '../../util/vue-util';

describe('WidgetDatePicker.vue', () => {
  it('should select correct date', () => {
    const date = moment()
      .add(-1, 'days')
      .format('YYYYMMDD');
    const vm = VueUtil.Mount(WidgetDatePicker, {
      props: {
        date: date
      }
    });
    expect(
      vm
        .$el
        .querySelector('.w-datepicker-select-item')
        .textContent
        .trim()
    ).toBe(moment(date).format('YYYY-MM-DD'));
  });

  it('should emit date-select-change event', () => {
    const date = moment()
      .add(-1, 'days')
      .format('YYYYMMDD');
    let selectedDate = '';
    const vm = VueUtil.Mount(WidgetDatePicker, {
      props: {
        date: date
      },
      on: {
        'date-select-change': function (date) {
          selectedDate = date;
        }
      }
    });
    const $select = vm.$el.querySelectorAll('.w-datepicker-select-list li')[5];
    const evt = new Event('click');
    $select.dispatchEvent(evt);
    expect(selectedDate).toBe(date);
  });

  it('should list recent days', () => {
    let daysAgo = 6;
    let date = moment().format('YYYYMMDD');
    const vm = VueUtil.Mount(WidgetDatePicker, {
      props: {
        date: date
      }
    });
    date = moment(date)
      .add(-daysAgo, 'days')
      .format('YYYYMMDD');
    const $options = vm.$el.querySelectorAll('.w-datepicker-select-list li');
    expect($options.length).toBe(daysAgo + 1);
    for (let i = 0; i < $options.length; i++) {
      const $option = $options[i];
      expect($option.textContent.trim()).toBe(moment(date).format('YYYY-MM-DD'));
      date = moment(date)
        .add(1, 'days')
        .format('YYYYMMDD');
    }
  });
});
