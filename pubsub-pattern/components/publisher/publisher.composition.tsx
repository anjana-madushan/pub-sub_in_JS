import { PubSub } from '@anjanaorg/pubsub-pattern.components.pubsub';
import { Publisher } from './publisher.js';

export const BasicPublisher = () => {
  return (
    <Publisher pubsub={new PubSub()}>Demo Publisher</Publisher>
  );
}
