let selectElementsStartingWithA = array => {
  return array.filter(word => word.charAt(0) === "a");
};

let selectElementsStartingWithVowel = array => {
  return array.filter(word => /^[aeiou]/i.test(word));
};

let removeNullElements = array => {
  return array.filter(el => el !== null);
};

let removeNullAndFalseElements = array => {
  return array.filter(el => el !== null && el !== false);
};

let reverseWordsInArray = array => {
  return array.map(word => word.split("").reverse().join(""));
};

let everyPossiblePair = array => {
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
};

let allElementsExceptFirstThree = array => {
  return array.slice(3);
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = array => {
  return array.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

let getFirstHalf = string => {
  return string.slice(0, Math.round(string.length / 2));
};

let makeNegative = number => {
  return Math.abs(number) * -1;
};

let numberOfPalindromes = array => {
  let count = 0;
  for (el of array) {
    if (el.split("").reverse().join("") === el) {
      count++;
    }
  }
  return count;
};

let shortestWord = array => {
  let x = array[0];
  for (el of array) {
    if (el.length < x.length) {
      x = el;
    }
  }
  return x;
};

let longestWord = array => {
  let x = array[0];
  for (el of array) {
    if (el.length > x.length) {
      x = el;
    }
  }
  return x;
};

let sumNumbers = array => {
  return array.reduce((a, b) => a + b);
};

let repeatElements = array => {
  return [...array, ...array];
};

let stringToNumber = string => {
  return Number(string);
};

let calculateAverage = array => {
  return array.reduce((a, b) => a + b) / array.length;
};

let getElementsUntilGreaterThanFive = array => {
  return array.slice(0, 6);
};

let convertArrayToObject = array => {
  const arr = [];
  while (array.length > 0) {
    arr.push(array.splice(0, 2));
  }
  return Object.fromEntries(arr);
};

let getAllLetters = array => {
  let letters = [];
  array.map(word => letters.push(...word));
  return [...new Set(letters.sort())];
};

let swapKeysAndValues = object => {
  let newObject = {};
  Object.keys(object).forEach(key => (newObject[object[key]] = key));
  return newObject;
};

let sumKeysAndValues = object => {
  let arr1 = Object.keys(object).reduce((a, b) => Number(a) + Number(b));
  let arr2 = Object.values(object).reduce((a, b) => a + b);
  return arr1 + arr2;
};

let removeCapitals = string => {
  return string.replace(/[A-Z]/g, "");
};

let roundUp = number => {
  return Math.ceil(number);
};

let formatDateNicely = date => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return [day, month, year].map(n => (n < 10 ? `0${n}` : `${n}`)).join("/");
};

let getDomainName = string => {
  let domain = string.split("@").pop();
  return domain.substring(0, domain.lastIndexOf("."));
};

let titleize = string => {
  words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3 || i === 0 || words[i - 1].indexOf(".") > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  return words.join(" ");
};

let checkForSpecialCharacters = string => {
  return string.replace(/[a-zA-Z0-9]/g, "").length > 0;
};

let squareRoot = number => {
  return Math.sqrt(number);
};

let factorial = number => {
  function factorialize(number) {
    if (number < 0) return -1;
    else if (number === 0) return 1;
    else {
      return number * factorialize(number - 1);
    }
  }
  return factorialize(number);
};

let findAnagrams = string => {
  function permutations(str) {
    if (str.length === 1) return str;
    let permut = [];
    for (let i = 0; i < str.length; i++) {
      let s = str[0];
      let newStr = permutations(str.slice(1, str.length));
      for (let j = 0; j < newStr.length; j++) permut.push(s + newStr[j]);
      str = str.substr(1, str.length - 1) + s;
    }
    return permut;
  }
  return permutations(string);
};

let convertToCelsius = number => {
  return Math.round(((number - 32) * 5) / 9);
};

let letterPosition = array => {
  return array.map(letter => letter.toLowerCase().charCodeAt() - 96);
};
