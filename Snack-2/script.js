/*Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// crea un'array di squadre
const teamFootBall = [

    {

    nome: 'Fiorentina',
    points: "",
    foul:"",

    },

    {

        nome: 'Inter',
        points: "",
        foul:"",
    
    },

    {

        nome: 'Milan',
        points: "",
        foul:"",
    
    }
]

for (let i = 0; i < teamFootBall.length ; i++){

    teamFootBall[i].points = Math.floor (Math.random()*50) + 1;
    teamFootBall[i].foul = Math.floor (Math.random ()*10) + 1;
}

console.log(teamFootBall)