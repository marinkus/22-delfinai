console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];

// 1
const cats = [...Array(10)].map(_ => rand(2, 12));
const owners = [...Array(10)].map(_ => girls[rand(0, 8)])

console.log(cats, owners);
// 2

console.log(cats.length);
console.log(cats);
console.log(cats.reduce((a, b) => a + b));
console.log(cats.filter(n => !(n % 3)).reduce((a, b) => a + b));

// 3

owners.unshift('Nausėda');
console.log(owners);

// 4
let catOwners = [];
for (let i = 0; i < owners.length; i++) {
    catOwners.push(`${owners[i]} has ${cats[i]} cats}`)
}

// cats masyvo ilgis nera lygus owners ilgiui, todel kai kur bus undefined
console.log(catOwners);

// 5


console.log(owners.find(name => owners.indexOf(name) !== owners.lastIndexOf(name)));