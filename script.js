// for (let i = 100; i >= 0; i--) {
//     const element = [i];
//     console.log(element);
    
// }

let mettreCarre = 50;
// console.log(`${mettreCarre > 70 ? "Grand logement" : "logement petit"}`);

class Voiture{
    constructor(marque, couleur, portiere, siege){
        this.marque= marque;
        this.couleur= couleur;
        this.portiere= portiere;
        this.siege= siege

    }
}
// const bmw = new Voiture('mercedes gle', 'noir teinte', 4, 5);

// console.log(bmw.marque);

const tab =[1,2,3,4,5];

tab.forEach(item =>{
    console.log(item);
})

class Humain {
    constructor(poids,taille){
        this.poids = poids,
        this.taille= taille
    }
}

const jean = new Humain(60,1.67);

const multiple = (a,b) => a*b;

console.log(multiple(5,6));
