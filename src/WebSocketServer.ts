import * as websocket from 'ws';
export default class WebSocketServer {

  private wss: websocket.Server;
  constructor(
    private port: number = 7269
  ) {
    if (this.wss != null) {
      return;
    }
    this.wss = new websocket.Server({ port: this.port });
    this.wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        console.log('received: %s', message);
        ws.send('res:' + message);
      });
      ws.on('close', (e) => {
        console.log(e);
      });
      ws.send('something');
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
