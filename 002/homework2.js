// 1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

const pinigine = [...Array(rand(10, 30))].map(_ => rand(0, 10));
console.log(pinigine);


// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

let sumOfPinigine = 0;
pinigine.forEach(n => sumOfPinigine += n);
console.log(sumOfPinigine);

// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

let sumOfKupiuros = 0;
const kupiuros = pinigine.filter(n => n > 2);
kupiuros.forEach(n => sumOfKupiuros += n);
console.log(sumOfKupiuros);

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

const pinigineBeMetalo = pinigine.map(n => (n > 2? n : n * 0));
console.log(pinigineBeMetalo);

// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let countOfMax = 0;
pinigine.forEach(n => {
    if (n === Math.max(...pinigine)) {
        countOfMax += 1;
    };
});

console.log(countOfMax);

// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

let pinigine3 = pinigine.map((n, i) => (n > 0 ? n : i));

console.log(pinigine3);

// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

while (pinigine.length < 30) {
    pinigine.push(rand(0, 10))
};

console.log(pinigine);

// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

const metaliniai = pinigine.filter(n => n <= 2);

console.clear();
console.log(metaliniai);
console.log(kupiuros);

// 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

let wallet = [[...metaliniai], [...kupiuros]];
console.log(wallet);

// 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
wallet.push(korteles);
console.log(wallet);

// 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

wallet[2] = wallet[2].sort((a, b) => a.localeCompare(b));
console.log(wallet[2]);

// 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

let bankCards = ['MasterCard', 'Visa'];

while (wallet[2].length < 20) {
    wallet[2].push(bankCards[rand(0, 1)]);
};
console.log(wallet[2]);

// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

let countOfMC = 0;
let countOfVisa = 0;

wallet[2].forEach(n => {
    if (n === 'Visa') {
        countOfVisa += 1;
    } 
    if (n === 'MasterCard') {
        countOfMC += 1;
    };
});

console.log(countOfMC, countOfVisa);

if (countOfMC > countOfVisa) {
    console.log('MasterCard');
};
if (countOfMC === countOfVisa) {
    console.log('Vienodai');
};
if (countOfMC < countOfVisa) {
    console.log('Visa');
};


// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

const bilietai = [...Array(10)].map(_ => rand(1000000000, 9999999999));

wallet.push(bilietai);
console.log(wallet[3]);

// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

wallet[3] = wallet[3].sort((a, b) => a - b);
console.log(wallet[3]);

// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

console.clear();

let sum500 = 0;

while (sum500 < 500) {
    let kupiura = rand(3, 10);
    sum500 += kupiura;
    wallet[1].push(kupiura);
    if (sum500 > 497 && sum500 !== 500) {
        wallet[1].pop();
        sum500 -= kupiura;
        sum500 += 3;
        wallet[1].push(3);
    }
    if (sum500 > 500) {
        wallet[1].pop();
        sum500 -= kupiura;
    }
};

console.log(sum500);
console.log(wallet[1]);

// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

let luckyTicket = 0;
wallet[3].forEach(n => {
    if (n % 777 === 0) {
        luckyTicket += 1
    };
});

if (luckyTicket === 0) {
    console.log('Nieko nelaimejote');
} else {
    console.log(`Laimejote! Laimingu bilietu skaicius - ${luckyTicket}`);
};

// 18.  Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

wallet.push(['šuo', 'katė', 'automobilis', 'namas', 'kiemas']);
console.log(wallet[4].sort((a, b) => a.length - b.length));



function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};