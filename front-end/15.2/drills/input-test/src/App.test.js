import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testing App.js', () => {
  it('Testing the inputs', () => {
    render(<App />);

    const inputName = screen.getByTestId('input-nome');
    expect(inputName).toHaveValue('');
    fireEvent.change(inputName, { target: { value: 'Estudante da Trybe' } });
    expect(inputName).toHaveValue('Estudante da Trybe');

    const inputEmail = screen.getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });
});