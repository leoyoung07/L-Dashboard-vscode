'use strict';
export default class StorageService {
  get (key) {
    return new Promise(resolve => {
      let value = localStorage.getItem(key);
      console.log('get', value);
      if (!value) {
        value = '[]';
      }
      value = JSON.parse(value);
      resolve(value);
    });
  }
  update (key, value) {
    return new Promise(resolve => {
      console.log('update', value);
      localStorage.setItem(key, JSON.stringify(value));
      resolve();
    });
  }

}
