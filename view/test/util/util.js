'use strict';
export default {
  waitsFor: (func, timeout) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        func();
        resolve();
      } catch (error) {
        reject(error);
      }
    }, timeout);
  })
};
