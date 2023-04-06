import { Subscriber } from '../base-subscriber';
import { DealershipCreatedEvent } from '../schemas/dealership-created-event';
import { Topics } from '../topics';

export class DealershipCreatedSubscriber extends Subscriber<DealershipCreatedEvent> {
  readonly topic = Topics.DealershipCreated;
}
