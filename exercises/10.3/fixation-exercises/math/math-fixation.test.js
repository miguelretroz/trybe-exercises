const { describe, test, expect } = require('@jest/globals');

const math = require('./math');

describe('Para fixar...', () => {

  test('Subtrair', () => {
    math.subtrair = jest.fn();

    expect(math.subtrair()).toBe(undefined);
    math.subtrair.mockImplementation((a, b) => a * b);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair(1, 3)).toBe(3);
    expect(math.subtrair).toHaveBeenCalledTimes(2);
  });

  test('Multiplicar', () => {
    math.multiplicar = jest.fn();

    expect(math.multiplicar()).toBe(undefined);
    expect(math.multiplicar).toHaveBeenCalled();
    
    math.multiplicar.mockReturnValue(10);
    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toHaveBeenCalledTimes(2);
  });

  test('Somar', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    
    math.somar(1, 3);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(1, 3);
    expect(math.somar(1, 4)).toBe(5);
    expect(math.somar).toHaveBeenCalledWith(1, 3);
    expect(math.somar).toHaveBeenLastCalledWith(1, 4);
  });

  test('Dividir', () => {
    math.dividir = jest.fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(2);

    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir()).toBe(2);
  });

  test('Subtrair #2', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair');

    expect(mockSubtrair(5, 3)).toBe(15);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(3);

    mockSubtrair.mockReturnValue(20);
    expect(mockSubtrair()).toBe(20)
    expect(mockSubtrair).toHaveBeenCalledTimes(4);

    mockSubtrair.mockRestore();
    expect(mockSubtrair(3, 3)).toBe(undefined);

    mockSubtrair.mockImplementation((a, b) => a - b);
    expect(mockSubtrair(5, 2)).toBe(3);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
  });
});