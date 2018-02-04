import * as path from 'path';
import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import ToolsetNodeItem from './ToolsetNodeItem';
export default class ToolsetNodeProvider implements vscode.TreeDataProvider<ToolsetNodeItem> {
  public onDidChangeTreeData?: vscode.Event<ToolsetNodeItem>;

  constructor(
    private context: vscode.ExtensionContext
  ) {

  }
  public getTreeItem(
    element: ToolsetNodeItem
  ): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }
  public getChildren(
    element?: ToolsetNodeItem
  ): vscode.ProviderResult<ToolsetNodeItem[]> {
    return [
      new ToolsetNodeItem(
        'Todo List',
        vscode.TreeItemCollapsibleState.None, {
        command: 'extension.showTodoListView',
        title: 'Todo List'
      }, {
        dark: this.context.asAbsolutePath('assets/ic_done_white_24px.svg'),
        light: this.context.asAbsolutePath('assets/ic_done_black_24px.svg')
      }),
      new ToolsetNodeItem('RegExp Tool', vscode.TreeItemCollapsibleState.None, {
        command: 'extension.showRegExpToolView',
        title: 'RegExp Tool'
      })
    ];
  }
}
