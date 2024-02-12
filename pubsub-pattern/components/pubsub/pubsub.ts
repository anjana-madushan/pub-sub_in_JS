type Callback = (data: any) => void;

interface Topics {
  [topic: string]: Callback[];
}

export class PubSub {
  private topics: Topics = {};

  subscribe(topic: string, callback: Callback): void {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(callback);
  }

  publish(topic: string, data: any): void {
    if (!this.topics[topic] || this.topics[topic].length < 1) return;
    this.topics[topic].forEach(callback => callback(data));
  }

  unsubscribe(topic: string, callback: Callback): void {
    if (!this.topics[topic]) return;
    this.topics[topic] = this.topics[topic].filter(callB => callB !== callback);
  }
}