module.exports = function toReadable (number) {
  let numberForArrayIndex = number.toString().split('');
  let space = ' ';
 let numberForArrayIndexSumOfTwoLastNumbers = numberForArrayIndex[1] + numberForArrayIndex[2];
  let fromOneTo19Array = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'];
  let dozensArray = ['','ten', 'twenty', 'thirty', 'forty', 'fifty','sixty','seventy','eighty', 'ninety'];
   if (number === 0) {
    return fromOneTo19Array[0];
   }
if (number > 0 && number < 20) {
    return fromOneTo19Array[number];
};
if (number >= 20 && number < 100) {
    if ( number % 10 === 0 ) {
        return dozensArray[numberForArrayIndex[0]];
    } else {
        return dozensArray[numberForArrayIndex[0]] + space + fromOneTo19Array[numberForArrayIndex[1]];
    }
};
if  (number >= 100 && number < 1000) {
    if ( number % 100 === 0 ) {
        return fromOneTo19Array[numberForArrayIndex[0]] + space + 'hundred';
    } else if ( number % 10 === 0 ) {
        return fromOneTo19Array[numberForArrayIndex[0]] + space + 'hundred' + space + dozensArray[numberForArrayIndex[1]];
    } 
    else if ( numberForArrayIndex[1] == 1 ) {
        return fromOneTo19Array[numberForArrayIndex[0]] + space + 'hundred' + space + fromOneTo19Array[numberForArrayIndexSumOfTwoLastNumbers];
    } else if ( numberForArrayIndex[1] == 0 ) {
        return fromOneTo19Array[numberForArrayIndex[0]] + space + 'hundred' + space + fromOneTo19Array[numberForArrayIndex[2]];
    }
    else { return fromOneTo19Array[numberForArrayIndex[0]] + space + 'hundred' + space + dozensArray[numberForArrayIndex[1]]+ space + fromOneTo19Array[numberForArrayIndex[2]]; 

    }
};

    }