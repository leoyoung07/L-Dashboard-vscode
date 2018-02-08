import * as WebSocket from 'ws';
export default class WebSocketRequestHandler {

  public static Handler(msg: WebSocket.Data, ws: WebSocket) {
    try {
      const msgObj = JSON.parse(msg as string);
      if (typeof msgObj.type === 'undefined') {
        ws.send(JSON.stringify({
          errCode: 'E002',
          errMsg: 'cannot find field [type]'
        }));
      }
    } catch (error) {
      ws.send(JSON.stringify({
        errCode: 'E001',
        errMsg: 'invalid data format'
      }));
    }
  }
}
