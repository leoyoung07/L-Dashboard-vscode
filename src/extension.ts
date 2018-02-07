'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';
import * as vscode from 'vscode';
import ToolsetNodeProvider from './ToolsetNodeProvider';
import WebSocketServer from './WebSocketServer';

let wss: WebSocketServer = null;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)

  try {
    wss = new WebSocketServer();
  } catch (error) {
    console.log(error);
  }

  vscode.window.registerTreeDataProvider('l-toolset', new ToolsetNodeProvider(context));

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
  });

  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand('extension.showRegExpToolView', async () => {
    // The code you place here will be executed every time your command is executed

    const indexHtml = 'file:///' + path.resolve(__dirname, './view/regexp-tool/entry.html');
    await vscode.commands.executeCommand(
      'vscode.previewHtml',
      vscode.Uri.parse(indexHtml),
      vscode.ViewColumn.Active,
      'RegExp Tool | L-Toolset');
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
  //
  if (wss) {
    wss.Close();
  }
}
