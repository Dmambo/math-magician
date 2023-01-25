import calculate from '../calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};
const obj1 = {
  total: '.',
  next: null,
  operation: null,
};
describe('tesiting all buttons ', () => {
  it('should clear all data and rest', () => {
    expect(calculate(obj, 'AC')).toEqual({
      next: null,
      operation: null,
      total: null,
    });
  });
  it('should be equal to 0', () => {
    expect(calculate(obj, '0')).toEqual({ next: '0', total: null });
  });
  it('should be equal to .', () => {
    expect(calculate(obj, '.')).toEqual({
      next: '0.',
      operation: null,
      total: null,
    });
  });
  it(' if there is dot initially should return {}', () => {
    expect(calculate(obj1, '.')).toEqual({});
  });
  it(' should be give empty', () => {
    expect(calculate({ total: 2, next: null, operation: '=' }, '=')).toEqual({});
  });
  it(' should change the sin', () => {
    expect(calculate({ total: 2, next: null, operation: '+/-' }, '+/-')).toEqual({ total: '-2', next: null, operation: '+/-' });
  });
});
