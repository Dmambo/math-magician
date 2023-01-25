import operate from '../operate';

describe('operate', () => {
  it('should return the sum of two numbers', () => {
    expect(operate(1, 2, '+')).toEqual('3');
  });
  it('should return the difference of two numbers', () => {
    expect(operate(1, 2, '-')).toEqual('-1');
  });
  it('should return the product of two numbers', () => {
    expect(operate(1, 2, '*')).toEqual('2');
  });
  it('should return the quotient of two numbers', () => {
    expect(operate(1, 2, '÷')).toEqual('0.5');
  });
  it('should return the modulo of two numbers', () => {
    expect(operate(1, 2, '%')).toEqual('1');
  });
  it('should return an error if the second number is zero', () => {
    expect(operate(1, 0, '÷')).toEqual("Can't divide by 0.");
  });
  it('should return an error if the second number is zero', () => {
    expect(operate(1, 0, '%')).toEqual(
      "Can't find modulo as can't divide by 0."
    );
  });
  it('should return an error if the operation is unknown', () => {
    expect(() => operate(1, 2, 'x')).toThrow("Unknown operation 'x'");
  });
});
