module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }

    let nHund = Math.floor(number/100);
    let nTen = Math.floor((number - nHund * 100)/10);
    let nOne = number - nHund*100 - nTen*10;

    if (nTen == 1) {
        ten = 0;
        nOne = number - nHund * 100;
     }

    let nOneArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let nTenArray = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ',
               'eighty ', 'ninety '];
    let nHundArray = nHund ? nOneArray[nHund] + ' hundred ' : '';
    return (nHundArray + nTenArray[nTen] + nOneArray[nOne]).trim();

  }



