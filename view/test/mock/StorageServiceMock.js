'use strict';
export default class StorageServiceMock {
  get(key) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(key);
        resolve([{
            id: 1,
            text: "to do 1",
            done: true
          },
          {
            id: 2,
            text: "to do 2",
            done: false
          },
          {
            id: 3,
            text: "to do 3",
            done: false
          }
        ]);
      }, 1000);
    });
  }
  update(key, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(key, data);
        resolve();
      }, 1000);
    });
  }

}
