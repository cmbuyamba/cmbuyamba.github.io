//2. Define a function max()
function max(a, b) {
    if (a == null || b == null) return;
    if (a > b) return a;
    else if (b > a) return b;
}

//Define a function maxOfThree()
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

//Write a function isVowel()
function isVowel(c) {
    if (c == null || undefined || c.length > 1) return false;

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === c.toLowerCase()) {
            return true;
        }
    }
    return false;
}

//Define a function sum()
function sum(a) {
    if (Array.isArray(a)) {
        return a.reduce(function (acc, a) {
            return acc + a;
        });
    }
}

//Define a function multiply()
function multiply(a) {
    if (Array.isArray(a)) {
        return a.reduce(function (acc, i) {
            return acc * i;
        })
    }
}

//Define a function reverse()
function reverse(s) {
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        result += s.charAt(i);
    }
    return result;
}

//Write a function findLongestWord()
function findLongestWord(words) {
    if (Array.isArray(words)) {
        let longestWord = words[0];
        for (let i = 1; i < words.length; i++) {
            //console.log('longestWord: ' + longestWord)
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }
        return longestWord.length;
    }
}

//Write a function filterLongWords()
function filterLongWords(words, i) {
    if (Array.isArray(words)) {
        return words.filter(function (value) {
            return value.length > i
        });
    }
}

function jsfiddle(a) {
    if (Array.isArray(a)) {
        const b = a.map(function (elem) {
            return elem * 10;
        });
        console.log('B: ' + b);
        const c = a.filter(function (elem) {
            return elem === 3;
        });
        console.log('C: ' + c);
        const d = a.reduce(function (prevValue, elem) {
            return prevValue * elem;
        });
        console.log('D: ' + d);
    }
}

function myFunctionTest(expectedValue, result) {

    //let test =
    if (Array.isArray(expectedValue) && Array.isArray(result())) {
        if (expectedValue.length === result().length) {
            for (let i = 0; i < expectedValue.length; i++) {
                if (expectedValue[i] !== result()[i]) return 'TEST FAILED';
            }
            return 'TEST SUCCEEDED';
        } else
            return 'TEST FAILED';
    } else {
        if (expectedValue === result())
            return 'TEST SUCCEEDED';
        else
            return 'TEST FAILED';
    }
}