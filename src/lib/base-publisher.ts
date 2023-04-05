import { ServiceBusClient } from '@azure/service-bus';
import { Topics } from './topics';

interface Event {
  topic: Topics;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract topic: T['topic'];
  protected client: ServiceBusClient;

  constructor(client: ServiceBusClient) {
    this.client = client;
  }

  async publish(data: T['data']) {
    const sender = this.client.createSender(this.topic);

    await sender.sendMessages(data);
    console.log('Event published to topic: ', this.topic);
  }
}
