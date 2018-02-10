import * as fs from 'fs';
import * as path from 'path';
import * as WebSocket from 'ws';
import { ErrorCode, ToDoListAction, WebSocketMsgType } from './constants';
import { IWebSocketMsg } from './WebSocketHelper';

export default class ToDoListHelper {
  public static MsgHandler(msg: IWebSocketMsg, ws: WebSocket) {
    let response = {};
    try {
      switch (msg.action) {
        case ToDoListAction.FETCH:
          response = {
            data: ToDoListHelper.fetch(msg.data as string),
            errCode: ErrorCode.SUCCESS
          };
          break;
        case ToDoListAction.UPDATE:
          response = {
            data: ToDoListHelper.update(msg.data.date, JSON.stringify(msg.data.ToDos)),
            errCode: ErrorCode.SUCCESS
          };
          break;
        default:
          response = {
            errCode: ErrorCode.UNKNOWN_ACTION,
            errMsg: 'unknown action'
          };
          break;
      }
    } catch (error) {
      response = {
        errCode: ErrorCode.PROCESS_ACTION_ERROR,
        errMsg: `Process action error: ${error}`
      };
    }
    ws.send(JSON.stringify(response));
  }

  private static readonly DataRoot = path.resolve(__dirname, 'data', 'todo_list');

  private static fetch(date: string) {
    const filePath = path.join(ToDoListHelper.DataRoot, `${date}.json`);
    let data: string = '[]';
    if (fs.existsSync(filePath)) {
      data = fs.readFileSync(filePath, 'utf-8').trim();
    }
    return data;
  }

  private static update(date: string, ToDos: string) {
    const filePath = path.join(ToDoListHelper.DataRoot, `${date}.json`);
    fs.writeFileSync(filePath, ToDos, 'utf-8');
    return date;
  }
}
