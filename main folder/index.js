function atualizarTemperatura() {
    const input = document.getElementById('inputTemp').value;
    const painel = document.getElementById('painelTemperatura');
    const temperatura = parseFloat(input);

    if (isNaN(temperatura)) {
        painel.innerHTML = '--°';
        painel.style.backgroundColor = '#999';
        return;
    }

    painel.innerHTML = temperatura + '°';

    if (temperatura >= 30) {
        painel.style.backgroundColor = '#ff4d4d'; // vermelho
    } else if (temperatura >= 20) {
        painel.style.backgroundColor = '#ffeb3b'; // amarelo
    } else {
        painel.style.backgroundColor = '#4caf50'; // verde
    }
}
