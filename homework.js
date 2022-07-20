// 1 & 7
console.log('---------- 1 & 7 ----------');

class Kibiras {
    static visiAkmenys = 0;
    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        return `bendras akmenu kiekis visuose kibiruose ${Kibiras.visiAkmenys}`
    }
    // static akmenuSkaiciusVisuoseKibiruose() {
    // }
    constructor () {
        this.akmenuKiekis = 0;
    };
    prideti1Akmeni() {
        this.akmenuKiekis += 1;
        Kibiras.visiAkmenys += 1;
        return `Pridetas 1 akmuo`
    };
    pridetiDaugAkmenu(num) {
        this.akmenuKiekis += num;
        Kibiras.visiAkmenys += num;
        return `prideta akmenu: ${num}`;
    };
    kiekPririnktaAkmenu() {
        return this.akmenuKiekis
    };
};

const viedras = new Kibiras;
const viedras2 = new Kibiras;
console.log(viedras.prideti1Akmeni());
console.log(viedras.pridetiDaugAkmenu(5));
console.log(viedras2.pridetiDaugAkmenu(5));
console.log(Kibiras.bendrasAkmenuSkaicius());

// 2  &  6
console.log('---------- 2 & 6 ----------');

class Pinigine {
    constructor () {
        this.metaliniaiPinigai = [];
        this.popieriniaiPinigai = [];
        this.monetos = 0;
        this.banknotai = 0;
    };
    ideti (num) {
        if (num > 2) {
            this.popieriniaiPinigai.push(num);
            this.banknotai += num;
            return `I pinigine ikrito ${num} popieriaus`
        } else {
            this.metaliniaiPinigai.push(num);
            this.monetos += num;
            return `I pinigine ikrito ${num} metalo`
        };
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
console.log(wallet.monetos);
console.log(wallet.banknotai);

console.log(wallet.skaiciuoti());

// 3 & 4
console.log('---------- 3 & 4 ----------');

class Troleibusas {
    static keleiviuSkaicius = 0;
    static keleiviuSkaiciusVisuoseTroleibusuose() {
        return `Bendras keleiviu skaicius visuose troleibusuose: ${Troleibusas.keleiviuSkaicius}`;
    };
    constructor () {
        this.keleiviuSkaicius = 0;
        this.totalKeleiviuSkaicius = 0;
    };
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.keleiviuSkaicius += keleiviuSkaicius;
        return `Ilipo ${keleiviuSkaicius}`;   
    };
    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius <= this.keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius;
        Troleibusas.keleiviuSkaicius -= keleiviuSkaicius;
        return `Islipo ${keleiviuSkaicius}`;
        } else {
        Troleibusas.keleiviuSkaicius -= this.keleiviuSkaicius;
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
console.log(trulikas.islipa(2));
console.log(trulikas.vaziuoja());



const trulikas2 = new Troleibusas;

console.log(trulikas2.ilipa(10));
console.log(trulikas2.islipa(15));
console.log(trulikas2.vaziuoja());


const trulikas3 = new Troleibusas;

console.log(trulikas3.ilipa(4));
console.log(trulikas3.islipa(2));
console.log(trulikas3.vaziuoja());
console.log(Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose());


// 5

/* (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
 */
console.log('---------- 5 ----------');
class PirkiniuKrepselis {
    constructor () {
        this.turinys = new Map ();
    };
    idetiPieno(kiekis) {
        let pienas = this.turinys.get('Pienas');
        this.turinys.has(`Pienas`) ? this.turinys.set('Pienas', pienas + kiekis) : this.turinys.set('Pienas', kiekis);
        return `Ideta i krepseli ${kiekis} vnt. pieno, is viso reikia nupirkti ${this.turinys.get('Pienas')} pieno`;
    }
    idetiSureli(kiekis) {
        let surelis = this.turinys.get('Surelis');
        this.turinys.has(`Surelis`) ? this.turinys.set('Surelis', surelis + kiekis) : this.turinys.set('Surelis', kiekis);
        return `Ideta i krepseli ${kiekis} vnt. sureliu, is viso reikia nupirkti ${this.turinys.get('Surelis')} surelius`;
    }
    idetiDuonos(kiekis) {
        let duona = this.turinys.get('Duona');
        this.turinys.has(`Duona`) ? this.turinys.set('Duona', duona + kiekis) : this.turinys.set('Duona', kiekis);
        return `Ideta i krepseli ${kiekis} vnt. sureliu, is viso reikia nupirkti ${this.turinys.get('Duona')} surelius`;
    }
    krepselioTurinys(){
        return this.turinys
    }
};

let lapelis = new PirkiniuKrepselis;
console.log(lapelis.idetiPieno(3));
console.log(lapelis.idetiPieno(2));
console.log(lapelis.idetiDuonos(2));
console.log(lapelis.idetiDuonos(1));
console.log(lapelis.idetiSureli(8));
console.log(lapelis.idetiSureli(3));
console.log(lapelis.krepselioTurinys());

// 8
/* Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
 */
console.log('---------- 8 ----------');
console.clear();

class Stikline {
    constructor (turis) {
        this.turis = turis;
        this.kiekis = 0;
    }
    ipilti(kiekis) {
        kiekis > this.turis ? this.kiekis = this.turis : this.kiekis += kiekis;
        return `Ipilta ${this.kiekis} ml vandens`
    }
    // ispilti(kiekis) {
        
    // }
}
