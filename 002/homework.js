// 1
let arr = [...Array(30)].map(_ => rand(5, 25));
// 2

console.log(arr.filter(a => (a > 10)));

let max = Math.max(...arr);
let ind = arr.indexOf(max);
console.log(max, ind);

let sumOfEvenIndex = 0;
for (let i = 0; i < arr.length; i+=2) {
    sumOfEvenIndex += arr[i]
};
console.log(sumOfEvenIndex);

let arr2 = arr.map((a, i) => a - i);
console.log(arr);
console.log(arr2);

console.clear();

for (let i = 0; i < 10; i++) {
    arr.push(rand(5, 25));
}
console.log(arr);

let arrEvenInd = [];
let arrOddInd = [];
arr.forEach((a, i) => {
    if (i === 0
        || i % 2 === 0) {
            arrEvenInd.push(a)
        } else {
            arrOddInd.push(a)
        }
});
console.log(arrEvenInd);
console.log(arrOddInd);

console.log(arr.map((a, i) => {
    if (i % 2 === 0
        && a > 15
        || i === 0 && a > 15) {
           return 0
        } else {
            return a
        }
}));
    
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        console.log(i);
        break;
    }
};

// 3

const letters = ['A', 'B', 'C', 'D'];

let arrOfLetters = [...Array(200)].map(_ => letters[rand(0, 3)]);
console.log(arrOfLetters);

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let letter of arrOfLetters) {
    if (letter === 'A') {
        countA += 1;
    };
    if (letter === 'B') {
        countB += 1;
    };
    if (letter === 'C') {
        countC += 1;
    };
    if (letter === 'D') {
        countD += 1;
    }
};

console.log(`A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);

// 4

let arrOL1 = [...Array(200)].map(_ => letters[rand(0, 3)]);
let arrOL2 = [...Array(200)].map(_ => letters[rand(0, 3)]);
let arrOL3 = [...Array(200)].map(_ => letters[rand(0, 3)]);


let mix = [];
for (let i = 0; i < arrOL1.length; i++) {
    mix.push(arrOL1[i] + arrOL2[i] + arrOL3[i])
};

console.log(mix);

const uniqueWords = {};

for (let word of mix) {
    if (uniqueWords[word]) {
        uniqueWords[word]++
    } else {uniqueWords[word] = 1}
};
console.log(uniqueWords);

// 5 
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).;

console.clear();

const arr100 = [];
while (arr100.length < 100) {
  const number = rand(100, 999);
  if (arr100.indexOf(number) === -1) {
    arr100.push(number);
  }
}
const arr101 = [];
while (arr101.length < 100) {
  const number = rand(100, 999);
  if (arr101.indexOf(number) === -1) {
    arr101.push(number);
  }
}
console.log(arr100);
console.log(arr101);

// 6
/* Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
 */

let uniqueNumbers = [];
for (let i = 0; i < arr100.length; i++) {
    if (!arr101.includes(arr100[i])) {
        uniqueNumbers.push(arr100[i])
    }
};

console.log(uniqueNumbers);

//7
/* Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose. */

let duplicateNumbers = [];
for (let i = 0; i < arr100.length; i++) {
    if (arr101.includes(arr100[i])) {
        duplicateNumbers.push(arr100[i])
    }
};

console.log(duplicateNumbers);

// 8
/* Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
 */

let mergedArr = [];
for (let i = 0; i < arr100.length; i++) {
    mergedArr[arr100[i]] = arr101[i];
};
console.log(mergedArr);

// 9
/* Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t. */

let task9Array = [...Array(10)];
task9Array[0] = rand(5,25);
task9Array[1] = rand(5,25);

console.log(task9Array);

for (let i = 2; i < task9Array.length; i++) {
    task9Array[i] = task9Array[i-2] + task9Array[i-1];
};
console.log(task9Array);







function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};