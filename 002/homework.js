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

arr.forEach((a, i) => {
    if (i === 0
        || i % 2 === 0) {

        }
});

















function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};