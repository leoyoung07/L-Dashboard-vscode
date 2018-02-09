import * as WebSocket from 'ws';
import { IWebSocketMsg, ToDoListAction, WebSocketMsgType } from './constants';

export default class ToDoListHelper {
  public static MsgHandler(msg: IWebSocketMsg, ws: WebSocket) {
    switch (msg.action) {
      case ToDoListAction.FETCH:
        break;
      case ToDoListAction.UPDATE:
        break;
      default:
        break;
    }
    ws.send(JSON.stringify({
      data: 'success',
      errCode: 'E000'
    }));
  }
}
