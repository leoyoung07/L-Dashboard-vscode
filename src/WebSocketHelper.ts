import * as WebSocket from 'ws';
import { ErrorCode, ToDoListAction, WebSocketMsgType } from './constants';
import NetworkHelper from './NetworkToolHelper';
import ToDoListHelper from './ToDoListHelper';

export default class WebSocketHelper {

  public static Handler(msg: WebSocket.Data, ws: WebSocket) {
    try {
      const msgObj: IWebSocketMsg = JSON.parse(msg as string);
      let response = '';
      switch (msgObj.type) {
        case WebSocketMsgType.TODO_LIST:
          response = ToDoListHelper.MsgHandler(msgObj);
          break;
        case WebSocketMsgType.NETWORK_TOOL:
          response = NetworkHelper.MsgHandler(msgObj);
          break;
        default:
          response = WebSocketHelper.DefaultMsgHandler(msgObj);
          break;
      }
      ws.send(response);
    } catch (error) {
      ws.send(JSON.stringify({
        errCode: ErrorCode.PROCESS_MSG_ERROR,
        errMsg: `Process message error: ${error}`
      }));
    }
  }

  private static DefaultMsgHandler(msg: IWebSocketMsg) {
    return JSON.stringify({
      errCode: ErrorCode.UNKNOWN_MSG_TYPE,
      errMsg: 'unknown message type'
    });
  }
}

export interface IWebSocketMsg {
  type: WebSocketMsgType;
  action: ToDoListAction | string;
  data: any;
}
