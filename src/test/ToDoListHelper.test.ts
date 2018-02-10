import * as assert from 'assert';
import { ErrorCode, ToDoListAction, WebSocketMsgType } from '../constants';
import ToDoListHelper from '../ToDoListHelper';
import { IWebSocketMsg } from '../WebSocketHelper';

suite('ToDoListHelper Tests', () => {
  test('MsgHandler update action', () => {
    const request: IWebSocketMsg = {
      action: ToDoListAction.UPDATE,
      data: {
        date: '20180209',
        toDoList: [{
          done: false,
          text: 'hello'
        }]},
      type: WebSocketMsgType.TODO_LIST
    };
    const response = ToDoListHelper.MsgHandler(request);
    const expected = JSON.stringify({
      data: '20180209',
      errCode: ErrorCode.SUCCESS
    });
    assert.equal(response, expected);
  });
  test.skip('MsgHandler fetch action', () => {
    // TODO: test fetch action
  });
  test('MsgHandler unknown action', () => {
    const request: IWebSocketMsg = {
      action: 'unknown',
      data: {},
      type: WebSocketMsgType.TODO_LIST
    };
    const response = ToDoListHelper.MsgHandler(request);
    const expected = JSON.stringify({
      errCode: ErrorCode.UNKNOWN_ACTION,
      errMsg: 'unknown action'
    });
    assert.equal(response, expected);
  });
});
