export enum WebSocketMsgType {
  TODO_LIST = 'TODO_LIST',
  NETWORK_TOOL = 'NETWORK_TOOL'
}

export enum ToDoListAction {
  FETCH = 'FETCH',
  UPDATE = 'UPDATE'
}

export enum ErrorCode {
  SUCCESS = 'E000',
  PROCESS_MSG_ERROR = 'E001',
  UNKNOWN_MSG_TYPE = 'E002',
  UNKNOWN_ACTION = 'E003',
  PROCESS_ACTION_ERROR = 'E004'
}
