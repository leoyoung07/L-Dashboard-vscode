import * as WebSocket from 'ws';
import { IWebSocketMsg, WebSocketMsgType } from './constants';

export default class NetworkToolHelper {
  public static MsgHandler(msg: IWebSocketMsg, ws: WebSocket) {
    ws.send(JSON.stringify({
      data: 'success',
      errCode: 'E000'
    }));
  }
}
