import React from 'react';
import { render } from '@testing-library/react';
import { BasicSubscriber } from './subscriber.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicSubscriber />);
  const rendered = getByText('Subscribe to Demo Publications');
  expect(rendered).toBeTruthy();
});
