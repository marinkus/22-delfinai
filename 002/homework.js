// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
console.log('~~~~~~~~~ 1 ~~~~~~~~~');

let arr = [...Array(30)].map(_ => rand(5, 25));
console.log(arr);
// 2. Naudodamiesi 1 uždavinio masyvu:
// 2 a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log('~~~~~~~~~ 2a ~~~~~~~~~');

sumOfGreaterThan10 = 0;
arr.forEach(a => a > 10 ? sumOfGreaterThan10 += 1 : sumOfGreaterThan10);
console.log(sumOfGreaterThan10);

// 2 b. Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log('~~~~~~~~~ 2b ~~~~~~~~~');

console.log(`reiksme ${Math.max(...arr)}, indeksas ${arr.indexOf(Math.max(...arr))}`);

// 2 c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
console.log('~~~~~~~~~ 2c ~~~~~~~~~');

let sumOfEvenIndex = 0;
for (let i = 0; i < arr.length; i+=2) {
    sumOfEvenIndex += arr[i]
};
console.log(sumOfEvenIndex);
console.log(arr.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b));
// 2 d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
console.log('~~~~~~~~~ 2d ~~~~~~~~~');

let arr2 = arr.map((a, i) => a - i);
console.log(`Pirminis: ${arr}`);
console.log(`Rezultatas: ${arr2}`);

// 2 e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
console.log('~~~~~~~~~ 2e ~~~~~~~~~');

// for (let i = 0; i < 10; i++) {
//     arr.push(rand(5, 25));
// }
// console.log(arr);

arr.push(...([...Array(10)].map(_ => rand(5, 25))));
console.log(arr);

// 2 f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
console.log('~~~~~~~~~ 2f ~~~~~~~~~');


// let [arrEvenInd, arrOddInd] = [arr.filter((a, i)=> i % 2 === 0), arr.filter((a, i)=> i % 2 !== 0)];   PERSISTENGTA
// let arrEvenInd = arr.filter((a, i)=> i % 2 === 0);
// let arrOddInd = arr.filter((a, i)=> i % 2 !== 0);
let arrEvenInd = [];
let arrOddInd = [];
arr.forEach((a, i) => i % 2 === 0 ? arrEvenInd.push(a) : arrOddInd.push(a));
    console.log(arrEvenInd);
    console.log(arrOddInd);
// 2 g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
console.log('~~~~~~~~~ 2g ~~~~~~~~~');
   
console.log(arr.map((a, i) => {
    if (i % 2 === 0
        && a > 15) {
            return 0
        } else {
            return a
        }
    }));
    
// 2 h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
console.log('~~~~~~~~~ 2h ~~~~~~~~~');
//    for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 10) {
//         console.log(i);
//         break;
//     }
// };
console.log(arr.indexOf(arr.filter(n => n > 10)[0]));

// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log('~~~~~~~~~ 3 ~~~~~~~~~');

let arrOfLetters = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0, 3)]);
console.log(arrOfLetters);

let count = { A: 0, B: 0, C: 0, D: 0 };

arrOfLetters.forEach(l => count[l]++);
console.log(count);

// 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log('~~~~~~~~~ 4 ~~~~~~~~~');

let arrOL1 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0, 3)]);
let arrOL2 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0, 3)]);
let arrOL3 = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0, 3)]);


let mix = [];
for (let i = 0; i < arrOL1.length; i++) {
    mix.push(arrOL1[i] + arrOL2[i] + arrOL3[i])
};

console.log(mix);

const uniqueCombinations = {};

for (let combinations of mix) {
    if (uniqueCombinations[combinations]) {
        uniqueCombinations[combinations]++
    } else {uniqueCombinations[combinations] = 1}
};
console.log(uniqueCombinations);


console.log('Unikalios nepasikartojancios reiksmes');
let onlyOne = [];
for (const [key, value] of Object.entries(uniqueCombinations)) {
    if (value === 1) {
        onlyOne.push(key)
    } else {
        null
    }
};
console.log(onlyOne);


// 5 
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).;
console.log('~~~~~~~~~ 5 ~~~~~~~~~');

// const arr100 = [];
// while (arr100.length < 100) {
//   const number = rand(100, 999);
//   if (arr100.indexOf(number) === -1) {
//     arr100.push(number);
//   };
// };
// const arr101 = [];
// while (arr101.length < 100) {
//   const number = rand(100, 999);
//   if (arr101.indexOf(number) === -1) {
//     arr101.push(number);
//   };
// };
// console.log(arr100);
// console.log(arr101);

const m1 = new Set();
const m2 = new Set();

while (m1.size < 100) {
    m1.add(rand(100, 999));
};
while (m2.size < 100) {
    m2.add(rand(100, 999));
};
const arrFrom1Set = [...m1];
const arrFrom2Set = [...m2];

console.log(arrFrom1Set, arrFrom2Set);



// 6
/* Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
 */
console.log('~~~~~~~~~ 6 ~~~~~~~~~');

let uniqueNumbers = [];
for (let i = 0; i < arrFrom1Set.length; i++) {
    if (!arrFrom2Set.includes(arrFrom1Set[i])) {
        uniqueNumbers.push(arrFrom1Set[i])
    }
};

console.log(uniqueNumbers);

//7
/* Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose. */
console.log('~~~~~~~~~ 7 ~~~~~~~~~');

let duplicateNumbers = [];
for (let i = 0; i < arrFrom1Set.length; i++) {
    if (arrFrom2Set.includes(arrFrom1Set[i])) {
        duplicateNumbers.push(arrFrom1Set[i])
    }
};

console.log(duplicateNumbers);

// 8
/* Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
 */
console.log('~~~~~~~~~ 8 ~~~~~~~~~');

let mergedArr = [];
for (let i = 0; i < arrFrom1Set.length; i++) {
    mergedArr[arrFrom1Set[i]] = arrFrom2Set[i];
};
console.log(mergedArr);

// 9
/* Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t. */
console.log('~~~~~~~~~ 9 ~~~~~~~~~');

let task9Array = [...Array(10)];
task9Array[0] = rand(5,25);
task9Array[1] = rand(5,25);
console.log(task9Array);

for (let i = 2; i < task9Array.length; i++) {
    task9Array[i] = task9Array[i-2] + task9Array[i-1];
};
console.log(task9Array);


// random function
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};