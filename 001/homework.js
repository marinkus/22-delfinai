console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1

const arr1 = [...Array(2)].map(_ => rand(0, 4));
console.log(Math.max(...arr1)/Math.min(...arr1));

// 2
console.log('~~~~~~~~~~~~~~~~~ 2');

let arr2 = [...Array(3)].map(_ => rand(0, 25));
arr2.sort((a,b) => a - b);
console.log(arr2);
console.log(arr2[1]);

// 3
console.log('~~~~~~~~~~~~~~~~~ 3');

let arr3 = [...Array(3)].map(_ => rand(1, 10));
console.log(arr3);
if (arr3[0] + arr3[1] > arr3[2]
    || arr3[1] + arr3[2] > arr3[0]
    || arr3[0] + arr3[2] > arr3[1]) {
        console.log(true);
    } else {
        console.log(false);
    }

// 4
console.log('~~~~~~~~~~~~~~~~~ 4');

let arr4 = [...Array(4)].map(_ => rand(0, 2));
let zeroCount = 0;
console.log(arr4);
for (let number of arr4) {
    if (number === 0) {
        zeroCount += 1
    }
}
console.log(zeroCount);

// 5
console.log('~~~~~~~~~~~~~~~~~ 5');

let arr5 = [...Array(3)].map(_ => rand(-10, 10));
console.log(arr5);

let arrOfStr = [];

for (let num of arr5) {
    if (num < 0) {
        arrOfStr.push(`+ ${num} +`);
    }
    if (num > 0) {
        arrOfStr.push(`- ${num} -`);
    }
    if (num === 0) {
        arrOfStr.push(`* ${num} *`);
    }
}
console.log(arrOfStr);


// 6
console.log('~~~~~~~~~~~~~~~~~ 6');

let countOfCandles = rand(0, 3000);
console.log(countOfCandles);
let sum = 0;

    if (countOfCandles <= 1000) {
        sum = countOfCandles * 1
    }
    if (countOfCandles > 2000) {
        sum = countOfCandles * 1 / 100 * 96
    }
    if (countOfCandles > 1000 && countOfCandles <= 2000) {
        sum = countOfCandles * 1 / 100 * 97
    }
console.log(sum.toFixed(2));

// 7
console.log('~~~~~~~~~~~~~~~~~ 7');

let arr7 = [...Array(3)].map(_ => rand(0, 100));
console.log(arr7);

function average(arrayOfNumbers) {
    let sum = 0;
    for (n of arrayOfNumbers) {
        sum += n;
    }
    return sum / (arrayOfNumbers.length - 1)
}

function averageMinusTen(arrayOfNumbers) {
    let sum = 0;
    let count = 0;
    for (n of arrayOfNumbers) {
        if (n > 10 && n <= 90)
        sum += n;
        count += 1;
    }
    return sum / count
}


console.log(average(arr7));
console.log(averageMinusTen(arr7));