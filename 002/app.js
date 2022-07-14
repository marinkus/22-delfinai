
//forEach
[1, 5, 77].forEach(n => console.log(n));

console.log('~~~~~~~~~~~~');

[1, 5, 77].forEach(n => {
    if (n > 4) {
        console.log(n);
    }
});

console.log('~~~~~~~~~~~~');

[1, 5, 77].forEach((a, i, c) => console.log(i, a, c ));

// map (not Map)

console.log('~~~~~  map  ~~~~~~~');
const map = [1, 5, 77].map((n, i) => {
    return n * i
});
console.log(map);

const map2 = [1, 5, 77].map((n, i) => n > 4 ? n : n * 10);
console.log(map2);


// filter
console.log('~~~~~  filter  ~~~~~~~');

const filter =[1, 5, 0, 77].filter(n => n < 4);
console.log(filter);


// sort
console.log('~~~~~  sort  ~~~~~~~');

const namas = ['aaaaaa1', '5', '0s', '7z7', '3fs1  0', '%%674'];

// namas.sort((a, b) => b - a);

// namas.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//     if (a < b) {
//         return -1
//     }
//     return 0
// });

namas.sort((a, b) => a.localeCompare(b));

// su if galima palyginti stringus (ta pati daro localeCompare), su pirmuoju atveju - ne

console.log(namas);
