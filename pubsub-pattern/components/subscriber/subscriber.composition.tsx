import { PubSub } from '@anjanaorg/pubsub-pattern.components.pubsub';
import { Subscriber } from './subscriber';

export const BasicSubscriber = () => {
  return (
    <Subscriber pubsub={new PubSub()}>Subscribe to Demo Publications</Subscriber>
  );
}
