//console.log("it works");

const test = 2; //questa è una costante
let test2 = "pippo";    //questa è una variabile

let elements = [];
elements.push(2);
elements.push("Siummico");

for (let i of elements) {
    //console.log(i);
}

//console.log(elements);

/*
 const stampa = (msg) => {
 console.log(msg);
 };
 
 const stampaGenerica = (msg,funzioneDiStampa) => {
 funzioneDiStampa(msg);
 };
 
 stampa("Ciao ho scritto una funzione");
 stampaGenerica("Ciao ho stampato con una funzione con un altra funzione",stampa);
 */
let numbers = [1, 23, 45, 6, 51, 313, 42];
// numeri pari
let pari = [];
toPari(numbers);
function toPari(numbers) {
    for (let n of numbers) {
        if (n % 2 === 0) {
            pari.push(n);
        }
    }
}
//console.log(pari);
/*
 pari = numbers.filter((x) => {
 return x % 2 === 0;
 });
 */

pari = numbers.filter((x) => x % 2 === 0);
//console.log(pari);



//numero pari al quadrato

let quadrati = [];

for (const x of numbers) {
    if (x % 2 === 0) {
        quadrati.push(x * x);
    }
}


quadrati = numbers.filter((x) => x % 2 === 0).map((x) => x * x);
//console.log(quadrati);


const somma = numbers.reduce((accumulatore, valore) => {
    return accumulatore + valore
}, 0.0);
//console.log(somma);

let o = {};
o.test = "pippo";
o.prova = "Sium";
//console.log(o);
console.log(Object.keys(o));

for (const key in o) {
    console.log(key);
}


class Punto {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    isXPositive(){
        if(this.x>0){
            return true;
        }else{
            return false;
        }
    }
    
    isXPositive2(){
        return this.x>0; //?true:false
    }
}
const pu = new Punto(-100,10);
console.log(pu);
console.log(pu.isXPositive2());


