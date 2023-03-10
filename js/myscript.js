/********************************
 Snack 1
 *******************************/
const biciclette = [
    {
        nome:'MountainBike',
        peso: 10
    },
    {
        nome:'Carbon',
        peso: 15
    },
    {
        nome:'MountainBike',
        peso: 12
    },
    {
        nome:'Elettrica',
        peso: 18
    },
    {
        nome:'Endurance',
        peso: 8
    },
];

const valoreMinore =  Math.min.apply(null, biciclette.map(biciclette => biciclette.peso));

biciclette.forEach(bicicletta =>{
    if(bicicletta.peso == valoreMinore){
        console.log(`La bicicletta con il peso minore è la ${bicicletta.nome} con un peso di ${bicicletta.peso}`);
    }
});
/********************************
 Snack 2
 *******************************/

 const squadre = [
    {
        nome:'Milan',
        punti_fatti:0,
        falli_subiti:0,
    },
    {
        nome:'Juve',
        punti_fatti:0,
        falli_subiti:0,
    },
    {
        nome:'Inter',
        punti_fatti:0,
        falli_subiti:0,
    },
    {
        nome:'Napoli',
        punti_fatti:0,
        falli_subiti:0,
    },
    {
        nome:'Lecce',
        punti_fatti:0,
        falli_subiti:0,
    },
 ];

 const nuovoArraySquadre =[];

 squadre.forEach(squadra => {

    squadra.punti_fatti = Math.floor(Math.random() * 30 + 1);
    squadra.falli_subiti = Math.floor(Math.random() * 10 + 1);
    
    const {nome, falli_subiti} = squadra;
    nuovoArraySquadre.push({nome,falli_subiti});


 });
 
 console.log(nuovoArraySquadre);


/********************************
 Snack 3
 *******************************/

const oldArray=['milano','palermo','roma','lecce','brindisi'];

const newArray=[];

selector(oldArray,2,3);

function selector(array,valMin,valMax){

    array.forEach((elemento,index)=>{
        if(index >= valMin && index<=valMax){
            newArray.push(elemento);
        }
    });
}

console.log(newArray);