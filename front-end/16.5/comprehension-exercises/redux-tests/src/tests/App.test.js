import { cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRedux from '../helpers/renderWithRedux';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText(/Clique Aqui/i);

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('add the initial state', () => {
    const { getByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(getByText('5')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText(/clique aqui/i);

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

    fireEvent.click(buttonAdicionar);
    expect(queryByText('1')).toBeInTheDocument();
  });
});