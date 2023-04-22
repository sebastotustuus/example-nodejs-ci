const { sum, substrct, product, divide } = require("./utils")

describe('first', () => { 
    test('should plus numbers', () => { 
        expect(sum(2,2)).toBe(4)
     })

     test('should substrct numbers', () => { 
        expect(substrct(2,2)).toBe(0)
     })

     test('should multiply numbers', () => { 
        expect(product(5,2)).toBe(10)
     })

     test('should divided numbers', () => { 
        expect(divide(18,2)).toBe(9)
     })
 })