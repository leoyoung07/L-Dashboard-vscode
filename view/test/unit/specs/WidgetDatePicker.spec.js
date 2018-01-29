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
      vm.$el.querySelector('div.w-datepicker-wrapper select').value
    ).toBe(date);
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
    const $select = vm.$el.querySelector('.w-datepicker-wrapper select');
    $select.value = date;
    const evt = new Event('change');
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
    const $options = vm.$el.querySelectorAll('div.w-datepicker-wrapper option');
    expect($options.length).toBe(daysAgo + 1);
    for (let i = 0; i < $options.length; i++) {
      const $option = $options[i];
      expect($option.value).toBe(date);
      expect($option.textContent).toBe(moment(date).format('YYYY-MM-DD'));
      date = moment(date)
        .add(1, 'days')
        .format('YYYYMMDD');
    }
  });
});