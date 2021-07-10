const pessoa = require('./objeto');

test('atribuição de objeto corretamente', () => {
    expect(pessoa('jonatas',20)).toEqual({nome: 'jonatas', idade: 20});
});