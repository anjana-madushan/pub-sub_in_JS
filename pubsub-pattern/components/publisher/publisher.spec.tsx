import React from 'react';
import { render } from '@testing-library/react';
import { BasicPublisher } from './publisher.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicPublisher />);
  const rendered = getByText('Demo Publisher');
  expect(rendered).toBeTruthy();
});
