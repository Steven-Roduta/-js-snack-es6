/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

const numbers = [10,20,30,40,50,60,70];
function extract(numbers){
    return numbers.slice(a , b + 1);
}

console.log (numbers);

const extractNumbers = position (numbers, 2, 4);

console.log(extractNumbers);
