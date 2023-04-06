import { Topics } from '../topics';

export interface DealershipCreatedEvent {
  topic: Topics.DealershipCreated;
  data: {
    storeName: string;
    storeNumber: number;
  };
}
