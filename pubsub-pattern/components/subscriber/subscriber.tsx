import { useState, useEffect } from 'react';
import { PubSub } from '@anjanaorg/pubsub-pattern.components.pubsub';
import type { ReactNode } from 'react';

export type SubscriberProps = {
  pubsub: PubSub;
  children?: ReactNode;
};


export const Subscriber = ({children, pubsub}: SubscriberProps)=> {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const handleMessage = (message: string) => {
      setMessages(prevMessages => [...prevMessages, message]);
    };

    pubsub.subscribe('demo_publication', handleMessage);
    return () => {
      pubsub.unsubscribe('demo_publication', handleMessage);
    };
  }, []);

  return (
    <div>
      <h2>{children}</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
