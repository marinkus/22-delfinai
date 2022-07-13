
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let array = [];

for (let i = 0; i < 10; i++) {
    array.push(rand(7, 77))
}

console.log(array);

const mas = [...Array(10)].map(_ => rand(7, 77));
console.log(mas);

const namas = [];

namas[0] = 'Petras';
namas[1] = 'Ieva';

namas.push('Naujas gyventojas atsiranda po visu');
namas.unshift('Naujas gyventojas atsiras pries visus');

console.log(namas);

const cats = ['Murka', 'Rainis', 'Pilkis', 'Ausyte', 'Soriukas', 'Upe'];

console.log(cats[rand(0, cats.length - 1)]);

for (let number of mas) {
    console.log(number);
}
console.log('~~~~~~~~~~~');

for (let i = 0; i < mas.length; i++) {
    console.log(mas[i]);
}

// Improvement
console.log('++++++++++++++');

mas.forEach(n => console.log(n));
