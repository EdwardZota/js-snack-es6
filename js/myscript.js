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
})
