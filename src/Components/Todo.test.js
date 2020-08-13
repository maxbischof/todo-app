import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('Renders todo card with title and description', () => {
  const { getByText } = render(<Todo title="Test title" description="Test Description"/>);
  const title = getByText(/Test title/);
  expect(title).toBeInTheDocument();

  const description = getByText(/Test Description/);
  expect(description).toBeInTheDocument();
});