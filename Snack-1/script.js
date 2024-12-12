/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

// Creo un'Array con tre valori diversi

const weightBrand = [

    {
        brandName:'Bianchi',
        weight: 7,

    },

    {
        brandName: 'Look',
        weight: 8,
    },

    {
        brandName:'Willier Triestina',
        weight: 6,
    }
]

//Voglio sapere tra quali tre ha il peso minore

let lowestWeight = weightBrand[2].weight;

for (let i = 0 ; i < weightBrand.lenght ; i++){
    if (weightBrand[i].weight < lowestWeight){
        lowestWeight = weightBrand[i].weight;
    }
}

console.log("il peso piu leggero è", lowestWeight[i]);