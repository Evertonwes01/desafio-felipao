let res = ''
do {
    let nome = prompt('Digite o Nome do Herói')
    let xp = prompt('Digite o quanto de XP você tem')
    
    if (xp <= 1000) {
        alert(`O Herói ${nome} é Rank Ferro`)
    } else if (xp > 1000 && xp <= 2000) {
        alert(`O Herói ${nome} é Rank Bronze`)
    } else if (xp > 2000 && xp <= 6000) {
        alert(`O Herói ${nome} é Rank Prata`)
    } else if (xp > 6000 && xp <= 7000){
        alert(`O Herói ${nome} é Rank Ouro`)
    } else if (xp > 7000 && xp <= 8000) {
        alert(`O Herói ${nome} é Rank Platina`)
    } else if (xp > 8000 && xp <= 9000) {
        alert(`O Herói ${nome} é Rank Ascendente`)
    } else if (xp > 9000 && xp <= 10000 ) {
        alert(`O Herói ${nome} é Rank Imortal`)
    } else if (xp > 10000) {
        alert(`O Herói ${nome} é Rank Radiante`)
    }
    res = prompt('Deseja consultar nivel de herói ?')
} while (res === 's')
alert('Reinicie a pagina para iniciar a consulta!')