import * as vscode from 'vscode';
import ToolsetNodeItem from './ToolsetNodeItem';
export default class ToolsetNodeProvider implements vscode.TreeDataProvider<ToolsetNodeItem> {
  public onDidChangeTreeData?: vscode.Event<ToolsetNodeItem>;
  public getTreeItem(
    element: ToolsetNodeItem
  ): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }
  public getChildren(
    element?: ToolsetNodeItem
  ): vscode.ProviderResult<ToolsetNodeItem[]> {
    return [
      new ToolsetNodeItem('Todo List', vscode.TreeItemCollapsibleState.None, {
        command: 'extension.showTodoListView',
        title: ''
      }),
      new ToolsetNodeItem('RegExp Tool', vscode.TreeItemCollapsibleState.None, {
        command: 'extension.showRegExpToolView',
        title: ''
      })
    ];
  }
}
