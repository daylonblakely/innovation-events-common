import { Publisher } from '../base-publisher';
import { DealershipCreatedEvent } from '../schemas/dealership-created-event';
import { Topics } from '../topics';

export class DealershipCreatedPublisher extends Publisher<DealershipCreatedEvent> {
  readonly topic = Topics.DealershipCreated;
}
