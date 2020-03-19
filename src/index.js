const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let arr = expr.match(/(.{1,10})/gim) || ''; //массив для групп букв
    let tmpArr = [];

    arr.forEach(element => {
        let s = '';
        if (element === "**********") {
            s = ' '
        } else {
            for (let i = 0; i < 9; i++) {

                if ((element[i] + element[i + 1]) === '10') {
                    s += ('.');
                    i++;
                }
                if ((element[i] + element[i + 1]) === '11') {
                    s += ('-');
                    i++;
                }

            }
        }
        tmpArr.push(s);
    });

    let str = '';
    tmpArr.forEach(element => {
        if (element !== ' ') {
            str += MORSE_TABLE[element]
        } else { str += ' ' };
    });


    return str;
}

module.exports = {
    decode
}