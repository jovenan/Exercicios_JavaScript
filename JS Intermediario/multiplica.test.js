const multiplica = require('./multiplica');

test('Multiplica valor de 2 * 4 e resulta em 8', () => {
    expect(multiplica(2, 4)).toBe(8);
    expect(multiplica(2, 4)).not.toBeNull();
    expect(multiplica(2, 4)).not.toBeUndefined();
});
