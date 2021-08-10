const caesar = (() => {
    const standard = 'abcdefghijklmnopqrstuvwxyz';
    const upper = standard.toUpperCase();
    const stringArray = [];

    function clearArray() {
        stringArray.length = 0;
    }

    function createCipheredText() {
        const newString = stringArray.toString().split(',').join('');
        clearArray();
        return newString;
    }

    function upperCaseHandle(letter, shift) {
        if (upper.includes(letter)) {
            const letterPosition = upper.indexOf(letter);
            let cipheredLetter = upper.charAt(letterPosition + shift);

            if (cipheredLetter === '') {
                cipheredLetter = upper.charAt(letterPosition + shift - 26);
                stringArray.push(cipheredLetter);
            } else {
                stringArray.push(cipheredLetter);
            }
        }
    }

    function standardCaseHandle(letter, shift) {
        if (standard.includes(letter)) {
            const letterPosition = standard.indexOf(letter);
            let cipheredLetter = standard.charAt(letterPosition + shift);
            if (cipheredLetter === '') {
                cipheredLetter = standard.charAt(letterPosition + shift - 26);
                stringArray.push(cipheredLetter);
            } else {
                stringArray.push(cipheredLetter);
            }
        }
    }

    function shiftString(string, shift) {
        string.forEach((letter) => {
            switch (true) {
            case upper.includes(letter):
                upperCaseHandle(letter, shift);
                break;
            case standard.includes(letter):
                standardCaseHandle(letter, shift);
                break;
            default:
                standardCaseHandle(letter, shift);
                stringArray.push(letter);
                break;
            }
        });
        return createCipheredText();
    }

    function cipher(string, shift) {
        const parseString = string.split('');
        return shiftString(parseString, shift);
    }

    return {
        cipher,
    };
})();

export { caesar as default };
