let res = ''
do {
    let nome = console.prompt('Digite o Nome do Herói')
    let xp = console.prompt('Digite o quanto de XP você tem')
    
    if (xp <= 1000) {
        console.log(`O Herói ${nome} é Rank Ferro`)
    } else if (xp > 1000 && xp <= 2000) {
        console.log(`O Herói ${nome} é Rank Bronze`)
    } else if (xp > 2000 && xp <= 6000) {
        console.log(`O Herói ${nome} é Rank Prata`)
    } else if (xp > 6000 && xp <= 7000){
        console.log(`O Herói ${nome} é Rank Ouro`)
    } else if (xp > 7000 && xp <= 8000) {
        console.log(`O Herói ${nome} é Rank Platina`)
    } else if (xp > 8000 && xp <= 9000) {
        console.log(`O Herói ${nome} é Rank Ascendente`)
    } else if (xp > 9000 && xp <= 10000 ) {
        console.log(`O Herói ${nome} é Rank Imortal`)
    } else if (xp > 10000) {
        console.log(`O Herói ${nome} é Rank Radiante`)
    }
    res = console.prompt('Deseja consultar nivel de herói ?')
} while (res === 's')