import sumFunction from './sum';

describe('Index / sumFunction:', () => {
  test('2 + 2 toBe 4', () => {
    expect(sumFunction(2, 2)).toBe(4);
  });
});
