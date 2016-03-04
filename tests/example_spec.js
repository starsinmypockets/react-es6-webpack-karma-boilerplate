import Lib from '../src/module.js';

console.log('>>',Lib);
describe('1+1', () => {
  let sum = 1+1;

  it('should be 2', () => {
    expect(2).toBe(2);
  });
});

describe('Test library', () => {
  it('foo should foo-ize str', () => {
    expect(Lib.foo('Hello')).toBe('Hello foo');
  });
});
