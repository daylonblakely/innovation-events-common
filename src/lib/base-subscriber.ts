import {
  ServiceBusClient,
  ServiceBusReceivedMessage,
  ProcessErrorArgs,
} from '@azure/service-bus';
import { Topics } from './topics';

interface Event {
  topic: Topics;
  data: any;
}

export abstract class Subscriber<T extends Event> {
  abstract topic: T['topic'];
  protected client: ServiceBusClient;

  constructor(client: ServiceBusClient) {
    this.client = client;
  }

  subscribe(
    onMessage: (data: T['data']) => Promise<void>,
    onError?: (args: ProcessErrorArgs) => Promise<void>
  ) {
    const reciever = this.client.createReceiver(this.topic);

    reciever.subscribe({
      processMessage: (message: ServiceBusReceivedMessage) =>
        onMessage(message.body),
      processError: onError
        ? onError
        : async (args: ProcessErrorArgs) => {
            console.log(
              `Error occurred with ${args.entityPath} within ${args.fullyQualifiedNamespace}: `,
              args.error
            );
          },
    });
  }
}
