import { ErrorCode, WebSocketMsgType } from './constants';
import { IWebSocketMsg } from './WebSocketHelper';

export default class NetworkToolHelper {
  public static MsgHandler(msg: IWebSocketMsg) {
    return JSON.stringify({
      data: 'success',
      errCode: ErrorCode.SUCCESS
    });
  }
}
