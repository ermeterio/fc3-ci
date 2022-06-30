const index = require ('./index')

test('Verificar Soma', () =>{
    const result = index.Sum(3,4);
    expect(result).toEqual(12);
})
