import { render } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});
