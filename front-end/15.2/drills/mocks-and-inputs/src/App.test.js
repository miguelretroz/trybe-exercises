import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing App.js', () => {
  afterEach(() => jest.clearAllMocks());
  it('fetch joke', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(joke)});

    render(<App />);
    await screen
      .findByText('Whiteboards ... are remarkable.');
    expect(global.fetch)
      .toBeCalledTimes(1);
    expect(global.fetch)
      .toBeCalledWith('https://icanhazdadjoke.com/', {'headers': {'Accept': 'application/json'}})
  });
});