'use strict';
export default class StorageService {
  get (itemKey) {
    return new Promise(resolve => {
      let data = localStorage.getItem(itemKey);
      console.log('get', data);
      if (!data) {
        data = '[]';
      }
      data = JSON.parse(data);
      resolve(data);
    });
  }
  update (itemKey, itemData) {
    return new Promise(resolve => {
      console.log('update', itemData);
      localStorage.setItem(itemKey, JSON.stringify(itemData));
      resolve();
    });
  }

}
