let selectElementsStartingWithA = (array) => {
    return array.filter(el => el.charAt(0) === 'a');
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(el => /^[aeiou]/i.test(el));
}

let removeNullElements = (array) => {
    return array.filter(el => el !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(el => el !== null && el !== false);
}

let reverseWordsInArray = (array) => {
    const reverse = [];
    for (el of array) {
        reverse.push(el.split('').reverse().join(''));
    }
    return reverse;
}

// Unfinished
let everyPossiblePair = (array) => {
    const sorted = array.sort();
    const pair = [];
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (j > i) {
                pair.push([sorted[i], sorted[j]]);
            }
        }
    }
    return pair;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
    let arr1 = [];
    for (el of array) {
        arr1.push(el.split('').reverse().join(''));
    }
    arr1.sort();
    let arr2 = [];
    for (el of arr1) {
        arr2.push(el.split('').reverse().join(''));
    }
    return arr2;
}

let getFirstHalf = (string) => {
    const x = Math.round(string.length / 2);
    return string.slice(0, x);
}

let makeNegative = (number) => {
    const x = Math.abs(number) * -1;
    return x;
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (el of array) {
        if (el.split('').reverse().join('') === el) {
            count++;
        }
    }
    return count;
}

let shortestWord = (array) => {
    let x = array[0];
    for (el of array) {
        if (el.length < x.length) {
            x = el;
        }
    }
    return x;
}

let longestWord = (array) => {
    let x = array[0];
    for (el of array) {
        if (el.length > x.length) {
            x = el;
        }
    }
    return x;
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => (a + b));
}

let repeatElements = (array) => {
    return [...array, ...array];
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    return array.reduce((a, b) => (a + b)) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0, 6);
}

let convertArrayToObject = (array) => {
    const arr = [];
    while (array.length > 0) {
        arr.push(array.splice(0, 2));
    }
    return Object.fromEntries(arr);
}

let getAllLetters = (array) => {
    let arr = array.map(x => x.split(''));
    let arr1 = [].concat(...arr);
    let arr2 = [...new Set(arr1.sort())];
    return arr2;
}

let swapKeysAndValues = (object) => {
    const obj = {};
    Object.keys(object).forEach(key => {
        obj[object[key]] = key;
    });
    return obj;
}

let sumKeysAndValues = (object) => {
    const arr1 = Object.keys(object).reduce((a, b) => Number(a) + Number(b));
    const arr2 = Object.values(object).reduce((a, b) => a + b);
    return arr1 + arr2;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, '');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}

let getDomainName = (string) => {
    const str1 = string.split('@').pop();
    const str2 = str1.split('.com').shift();
    return str2;
}

let titleize = (string) => {
    return string;
}

let checkForSpecialCharacters = (string) => {
    return string;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    function factorialize(number) {
        if (number < 0)
            return -1;
        else if (number == 0)
            return 1;
        else {
            return (number * factorialize(number - 1));
        }
    }
    return factorialize(number);
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {

    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    const arr = array.map(x => (x.toLowerCase().charCodeAt() - 96));
    return arr;
}
