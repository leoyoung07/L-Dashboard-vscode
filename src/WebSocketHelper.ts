import * as WebSocket from 'ws';
import { IWebSocketMsg, ToDoListAction, WebSocketMsgType } from './constants';
import NetworkHelper from './NetworkToolHelper';
import ToDoListHelper from './ToDoListHelper';

export default class WebSocketHelper {

  public static Handler(msg: WebSocket.Data, ws: WebSocket) {
    try {
      const msgObj: IWebSocketMsg = JSON.parse(msg as string);
      switch (msgObj.type) {
        case WebSocketMsgType.TODO_LIST:
          ToDoListHelper.MsgHandler(msgObj, ws);
          break;
        case WebSocketMsgType.NETWORK_TOOL:
          NetworkHelper.MsgHandler(msgObj, ws);
          break;
        default:
          WebSocketHelper.DefaultMsgHandler(msgObj, ws);
          break;
      }
    } catch (error) {
      ws.send(JSON.stringify({
        errCode: 'E001',
        errMsg: `Process message error: ${error}`
      }));
    }
  }

  private static DefaultMsgHandler(msg: IWebSocketMsg, ws: WebSocket) {
    ws.send(JSON.stringify({
      errCode: 'E002',
      errMsg: 'unknown message type'
    }));
  }
}
