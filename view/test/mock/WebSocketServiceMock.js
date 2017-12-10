'use strict';

export default class WebSocketServiceMock {
  init (url) {
    this.ws = {};
    this.ws.onmessage = (e) => {
      this.onmessage(e);
    };
    this.ws.onopen = (e) => {
      this.onopen(e);
    };
    this.send = (msg) => {
      this.ws.onmessage({data: 'res:' + msg});
    };
    setTimeout(() => {
      this.ws.onopen();
    }, 0);
  };
  ws = null;
  onmessage = null;
  onopen = null;
  send = null;
}
