import * as WebSocket from 'ws';
import { ErrorCode, WebSocketMsgType } from './constants';
import { IWebSocketMsg } from './WebSocketHelper';

export default class NetworkToolHelper {
  public static MsgHandler(msg: IWebSocketMsg, ws: WebSocket) {
    ws.send(JSON.stringify({
      data: 'success',
      errCode: ErrorCode.SUCCESS
    }));
  }
}
