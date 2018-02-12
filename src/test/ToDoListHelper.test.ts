import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { ErrorCode, ToDoListAction, WebSocketMsgType } from '../constants';
import ToDoListHelper from '../ToDoListHelper';
import { IWebSocketMsg } from '../WebSocketHelper';

suite('ToDoListHelper Tests', () => {

  const DataRoot = path.resolve(__dirname, '..', 'data', 'todo_list');

  const testFilePath = path.join(DataRoot, '20180212.json');

  const testData = JSON.stringify([{
    done: true,
    text: 'test'
  }]);

  suiteSetup(() => {
    fs.writeFileSync(testFilePath, testData, 'utf-8');
  });

  suiteTeardown(() => {
    fs.unlinkSync(testFilePath);
  });

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
  test('MsgHandler fetch action', () => {
    const request: IWebSocketMsg = {
      action: ToDoListAction.FETCH,
      data: '20180212',
      type: WebSocketMsgType.TODO_LIST
    };
    const response = ToDoListHelper.MsgHandler(request);
    const expected = JSON.stringify({
      data: testData,
      errCode: ErrorCode.SUCCESS
    });
    assert.equal(response, expected);
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
