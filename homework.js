// 1

class Kibiras1 {
    constructor () {
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni() {
        this.akmenuKiekis += 1;
    }
    pridetiDaugAkmenu(num) {
        this.akmenuKiekis += num;
    }
    kiekPririnktaAkmenu() {
        return this.akmenuKiekis
    }
};

const viedras = new Kibiras1;
console.log(viedras.prideti1Akmeni());
console.log(viedras.pridetiDaugAkmenu(5));

// 2  