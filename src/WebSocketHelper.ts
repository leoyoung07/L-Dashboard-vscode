import * as WebSocket from 'ws';
import { ErrorCode, ToDoListAction, WebSocketMsgType } from './constants';
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
        errCode: ErrorCode.PROCESS_MSG_ERROR,
        errMsg: `Process message error: ${error}`
      }));
    }
  }

  private static DefaultMsgHandler(msg: IWebSocketMsg, ws: WebSocket) {
    ws.send(JSON.stringify({
      errCode: ErrorCode.UNKNOWN_MSG_TYPE,
      errMsg: 'unknown message type'
    }));
  }
}

export interface IWebSocketMsg {
  type: WebSocketMsgType;
  action: ToDoListAction | string;
  data: any;
}
