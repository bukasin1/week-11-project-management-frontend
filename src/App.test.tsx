import React from 'react';
import { render, screen, } from '@testing-library/react';
import App from './App';
import SignUp from './Signup/signUp';

test('For registeration', () => {
  render(<SignUp/>);
  const testIdName = "but";

  const {getByTestId} = render(<App />);

  const foundButton = getByTestId(testIdName);

  expect(foundButton).toBeTruthy();
});

