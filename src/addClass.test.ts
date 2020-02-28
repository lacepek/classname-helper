import { addClass } from './addClass';

describe('addClass module', () => {
  const base = 'foo';
  it('creates className from single param', () => {
    const className = addClass(base, 'bar');
    const expected = `${base} bar`;

    expect(className).toBe(expected);
  });

  it('creates className from multiple params', () => {
    const className = addClass(base, 'bar', 'baz', 'kaz');
    const expected = `${base} bar baz kaz`;

    expect(className).toBe(expected);
  });

  it('creates className from multiple params including undefined and null values', () => {
    const className = addClass(base, 'bar', null, 'baz', undefined, 'kaz');
    const expected = `${base} bar baz kaz`;

    expect(className).toBe(expected);
  });

  it('creates className from array of params', () => {
    const params = ['bar', 'baz', 'kaz'];
    const className = addClass(base, ...params);
    const expected = `${base} bar baz kaz`;

    expect(className).toBe(expected);
  });

  it('creates className from array of params skips not valid options', () => {
    const params = ['bar', undefined, 'baz', null, 'kaz'];
    const className = addClass(base, ...params);
    const expected = `${base} bar baz kaz`;

    expect(className).toBe(expected);
  });
});
