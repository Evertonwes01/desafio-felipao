let cons = prompt('Dejesa fazer uma consulta? s/n')
while(cons === 's') { 
    let nome = prompt('Qual é o nome do Herói ?')
    let wins = Number(prompt('Quantas vitórias ?'))
    let lows= Number(prompt('Quantas Derrotas ?'))

    function consulta() {

        wins = wins - lows

        if (wins < 10) {
            return alert(`O Herói ${nome} é Rank Ferro`);
        } else if (wins >= 11 && wins <= 20) {
            return alert(`O Herói ${nome} é Rank Bronze`);
        } else if (wins >= 21 && wins <= 50) {
            return alert(`O Herói ${nome} é Rank Prata`);
        } else if (wins >= 51 && wins <= 80) {
            return alert(`O Herói ${nome} é Rank Ouro`) ;
        } else if (wins >= 81 && wins <= 90) {
            return alert(`O Herói ${nome} é Rank Diamante`);
        } else if (wins >= 91 && wins <= 100) {
            return alert(`O Herói ${nome} é Rank Radiante`);
        } else {
            return alert(`O Herói ${nome} é Rank Imortal`);
        }
    }
    consulta();
    cons = prompt('Deseja fazer uma nova consulta? s/n')
}
alert('Reinicie a Pagina para calcular novamente!')

/*
do { 
    let cons = ''
    let nome = prompt('Qual é o nome do Herói ?')
    let wins = Number(prompt('Quantas vitórias ?'))
    let lows= Number(prompt('Quantas Derrotas ?'))

    function consulta() {
        if (wins - lows <= 10 ) {
            alert(`O Herói ${nome} é Rank Ferro`)
        } else if (wins - lows > 10 && wins - lows <= 20) {
            alert(`O Herói ${nome} é Rank Bronze`) 
        } else if (wins - lows > 20 && wins - lows <= 50) {
            alert(`O Herói ${nome} é Rank Prata`) 
        } else if (wins - lows > 50 && wins - lows <= 80) {
            alert(`O Herói ${nome} é Rank Ouro`) 
        } else if (wins - lows > 80 && wins - lows <= 90 ) {
            alert(`O Herói ${nome} é Rank Diamante`) 
        } else if (wins - lows > 90 && wins - lows <= 100) {
            alert(`O Herói ${nome} é Rank Radiante`) 
        } else if (wins - lows >= 101) {
            alert(`O Herói ${nome} é Rank Imortal`) 
        }
    }
} while(cons === 's')

alert('Reinicie a Pagina para calcular novamente!')
*/