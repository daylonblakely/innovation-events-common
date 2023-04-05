import { Topics } from '../topics';

export interface DealershipCreatedEvent {
  topic: Topics.DealershipCreated;
  data: {
    id: string;
    name: string;
  };
}
