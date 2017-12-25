'use strict';
export default class WebSocketService {
  init (url) {
    this.ws = new WebSocket(url);
    this.ws.onmessage = (e) => {
      this.onmessage(e);
    };
    this.ws.onopen = (e) => {
      this.onopen(e);
    };
    this.send = (msg) => {
      this.ws.send(msg);
    };
  }
  ws = null;
  onmessage = null;
  onopen = null;
  send = null;
}
