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
















function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};