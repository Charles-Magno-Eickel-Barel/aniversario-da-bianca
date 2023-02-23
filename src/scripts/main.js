const dataDoAniversario = new Date("Nov 11, 2023 12:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteAniversario = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaAteAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteAniversario % diaEmMs) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteAniversario % horaEmMs) / minutosEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteAniversario % minutosEmMs) / 1000);
    
    document.getElementById('dias').innerHTML = `${diasAteOAniversario}`;
    document.getElementById('horas').innerHTML = `${horasAteOAniversario}`;
    document.getElementById('minutos').innerHTML = `${minutosAteOAniversario}`;
    document.getElementById('segundos').innerHTML = `${segundosAteOAniversario}`;

    if (distanciaAteAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('dias').innerHTML = '0';
    document.getElementById('horas').innerHTML = '0';
    document.getElementById('minutos').innerHTML = '0';
    document.getElementById('segundos').innerHTML = '0';
    document.getElementById('faltam').innerHTML = 'A data passou.';
    document.getElementById('tempo').innerHTML = 'Até o próximo ano!';
    }
})

