getSumOfFirstNTerms = function (firstTerm, terms) {

    return parseInt(firstTerm * terms * (terms + 1) / 2);
}

getLowestCommonMultipleOf2Numbers = function(firstNumber,secondNumber){
    
    let max = (firstNumber > secondNumber) ? firstNumber : secondNumber;
    do
    {
        if (max % firstNumber == 0 && max % secondNumber == 0)
        {
            return max;
            break;
        }
        else
            ++max;
    } while (true);
}
exports.getSumOfMultiplesOf2Numbers = function (firstNumber, secondNumber, endlimit) {

    var totalNumberOfTermsOfFirstNumber = parseInt((endlimit - 1) / firstNumber);
    var totalNumberOfTermsOfSecondNumber = parseInt((endlimit - 1) / secondNumber);
    var lcmOf2Numbers = getLowestCommonMultipleOf2Numbers(firstNumber,secondNumber);
    var totalNumberOfTermsOfLCMOfNumbers = parseInt((endlimit - 1) / lcmOf2Numbers);
    return getSumOfFirstNTerms(firstNumber, totalNumberOfTermsOfFirstNumber) + getSumOfFirstNTerms(secondNumber, totalNumberOfTermsOfSecondNumber) - getSumOfFirstNTerms(lcmOf2Numbers, totalNumberOfTermsOfLCMOfNumbers);
}