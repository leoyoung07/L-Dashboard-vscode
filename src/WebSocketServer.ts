import * as WebSocket from 'ws';
export default class WebSocketServer {

  private wss: WebSocket.Server;
  constructor(
    private port: number = 7269,
    private requestHandler: (msg: WebSocket.Data, ws: WebSocket) => void
  ) {
    if (this.wss != null) {
      return;
    }
    this.wss = new WebSocket.Server({ port: this.port });
    this.wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        this.requestHandler(message, ws);
      });
      ws.on('close', (e) => {
        console.log(e);
      });
      ws.send('connected');
    });
    this.wss.on('listening', (e) => {
      console.log(`Web Socket Server Listening on Port: ${this.port}`);
    });
    this.wss.on('error', (e) => {
      console.log(e);
    });
  }

  /**
   * Close
   */
  public Close() {
    if (!this.wss) {
      return;
    }
    this.wss.close();
  }
}
