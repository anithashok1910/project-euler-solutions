exports.getSumOfMultiplesOf2Numbers = function(firstNumber, secondNumber, endlimit){
    
    var sumOfMultiplesOF2Numbers = 0;

    for(var i = 1; i < endlimit; ++i){
        if( i % firstNumber === 0){
            sumOfMultiplesOF2Numbers += i;
        }else if(i % secondNumber === 0){
            sumOfMultiplesOF2Numbers += i;
        }else{
            continue;
        };
    } 
    return sumOfMultiplesOF2Numbers;
};