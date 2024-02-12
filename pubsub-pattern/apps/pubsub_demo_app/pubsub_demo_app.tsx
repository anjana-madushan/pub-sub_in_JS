import { Subscriber } from '@anjanaorg/pubsub-pattern.components.subscriber';
import { Publisher } from '@anjanaorg/pubsub-pattern.components.publisher';
import { PubSub } from '@anjanaorg/pubsub-pattern.components.pubsub';

export function PubsubDemoApp() {

  const pubsub = new PubSub();

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <Publisher pubsub={pubsub}>Demo Publications</Publisher>
      <hr/>
      <Subscriber pubsub={pubsub}>The Subscriber</Subscriber>
    </div>
  </div>
  );
}