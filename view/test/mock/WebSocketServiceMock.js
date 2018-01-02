'use strict';

export default class WebSocketServiceMock {
  constructor (url) {
    this._open = null;
    this._onmessage = null;
    this._onopen = null;
    this._send = null;
    this._ws = {};
    this._ws.onmessage = (e) => {
      this._onmessage(e);
    };
    this._ws.onopen = (e) => {
      this._onopen(e);
    };
    this._send = (msg) => {
      this._ws.onmessage({data: 'res:' + msg});
    };
    setTimeout(() => {
      this._ws.onopen();
    }, 0);
  }
  get ws () { return this._ws; };
  set ws (value) { this._ws = value; };

  get onmessage () { return this._onmessage; };
  set onmessage (value) { this._onmessage = value; };

  get onopen () { return this._onopen; };
  set onopen (value) { this._onopen = value; };

  get send () { return this._send; };
  set send (value) { this._send = value; };
}
