const solution_1 = require('./solution_1');

describe('solution 1 should give ' , () =>{
    test('sum of multiples of 3 and 5 till 10 to equal 23', () => {
        expect(solution_1.getSumOfMultiplesOf2Numbers(3, 5, 10)).toBe(23);
      });

    test('sum of multiples of 3 and 5 till 1000 to equal 233168', () =>{
        expect(solution_1.getSumOfMultiplesOf2Numbers(3, 5, 1000)).toBe(233168);
    });

    test('sum of multiple of 2 and 4 till 10 to equal 20' , () =>{
        expect(solution_1.getSumOfMultiplesOf2Numbers(2, 4, 10)).toBe(20);
    });
});
