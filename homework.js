// 1

class Kibiras1 {
    constructor () {
        this.akmenuKiekis = 0;
    };
    prideti1Akmeni() {
        this.akmenuKiekis += 1;
        return `Pridetas 1 akmuo`
    };
    pridetiDaugAkmenu(num) {
        this.akmenuKiekis += num;
        return `prideta akmenu: ${num}`;
    };
    kiekPririnktaAkmenu() {
        return this.akmenuKiekis
    };
};

const viedras = new Kibiras1;
console.log(viedras.prideti1Akmeni());
console.log(viedras.pridetiDaugAkmenu(5));

// 2  

class Pinigine {
    constructor () {
        this.metaliniaiPinigai = [];
        this.popieriniaiPinigai = [];
    };
    ideti (num) {
        if (num > 2) {
            this.popieriniaiPinigai.push(num)
        } else {
            this.metaliniaiPinigai.push(num)
        };
        return `I pinigine ikrito ${num}`
    };
    skaiciuoti() {
        return this.metaliniaiPinigai.reduce((a, b) => a + b) + this.popieriniaiPinigai.reduce((a, b) => a + b);
    };
};

const wallet = new Pinigine;

console.log(wallet.ideti(5));
console.log(wallet.ideti(5));
console.log(wallet.ideti(2));
console.log(wallet.ideti(1));
console.log(wallet);

console.log(wallet.skaiciuoti());

// 3

class Troleibusas {
    constructor () {
        this.keleiviuSkaicius = 0;
    };
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        return `Ilipo ${keleiviuSkaicius}`;   
    };
    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius <= this.keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius;
        return `Islipo ${keleiviuSkaicius}`;
        } else {
        this.keleiviuSkaicius = 0;
        return `Negali islipti daugiau, nei buvo viduje, kazkas vaziavo zuikiu`;
        }   
    };
    vaziuoja() {
        return this.keleiviuSkaicius;
    };
};

const trulikas = new Troleibusas;

console.log(trulikas.ilipa(10));
console.log(trulikas.islipa(15));
console.log(trulikas.vaziuoja());



