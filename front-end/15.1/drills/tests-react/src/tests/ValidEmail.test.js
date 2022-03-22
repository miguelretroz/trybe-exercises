import { render } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Testando componente "ValidEmail"', () => {
  it('Testando um componente, caso o email seja valido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso nada tenha sido enviado', () => {
    const EMAIL_USER = '';
    const { queryByText } = render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = queryByText('Email Válido');
    const isInvalid = queryByText('Email Inválido');
    expect(isValid).not.toBeInTheDocument();
    expect(isInvalid).not.toBeInTheDocument();
  });

  it('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = getByText('Email Válido');
    expect(isValid).toHaveAttribute('class', 'green-text');
  });

  it('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
    const isInvalid = getByText('Email Inválido');
    expect(isInvalid).toHaveAttribute('class', 'red-text');
  });
});
