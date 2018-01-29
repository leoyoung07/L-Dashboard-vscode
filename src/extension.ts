'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { exec } from "child_process";
import * as crypto from 'crypto';
import * as http from 'http';
import * as path from 'path';
import * as vscode from 'vscode';
import * as websocket from 'ws';
import ToolsetNodeProvider from './ToolsetNodeProvider';

let wss: websocket.Server = null;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)

  vscode.window.registerTreeDataProvider('l-toolset', new ToolsetNodeProvider());

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.showTodoListView', async () => {
    // The code you place here will be executed every time your command is executed

    const indexHtml = 'file:///' + path.resolve(__dirname, './view/todo-list/entry.html');
    await vscode.commands.executeCommand(
      'vscode.previewHtml',
      vscode.Uri.parse(indexHtml),
      vscode.ViewColumn.Active,
      'Todo List | L-Toolset');

    console.log('showTodoListView');
  });

  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand('extension.showRegExpToolView', async () => {
    // The code you place here will be executed every time your command is executed

    // const indexHtml = 'file:///' + path.resolve(__dirname, '../view/index.html');
    // await vscode.commands.executeCommand(
    //   'vscode.previewHtml',
    //   vscode.Uri.parse(indexHtml),
    //   vscode.ViewColumn.Active,
    //   'L-Toolset');

    console.log('showRegExpToolView');
  });

  context.subscriptions.push(disposable);

  try {
    setupWebsocketServer();
  } catch (error) {
    vscode.window.showErrorMessage(error);
  }
}

function setupWebsocketServer() {
  if (wss != null) {
    return;
  }
  wss = new websocket.Server({ port: 7269 });
  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send('res:' + message);
    });
    ws.on('close', (e) => {
      console.log(e);
    });
    ws.send('something');
  });
  wss.on('listening', (e) => {
    console.log(e);
  });
  wss.on('error', (e) => {
    console.log(e);
  });
}

// this method is called when your extension is deactivated
export function deactivate() {
  //
  console.log('deactivate');
  wss.close((e) => {
    wss = null;
  });
}
