export enum WebSocketMsgType {
  TODO_LIST = 'TODO_LIST',
  NETWORK_TOOL = 'NETWORK_TOOL'
}

export enum ToDoListAction {
  FETCH = 'FETCH',
  UPDATE = 'UPDATE'
}

export interface IWebSocketMsg {
  type: WebSocketMsgType;
  action: ToDoListAction | string;
  data: object;
}
