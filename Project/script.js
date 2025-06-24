const tempDisplay = document.getElementById("temp");
let temperatura = 27;

// Carregar histórico salvo ou criar um novo array vazio
let historico = JSON.parse(localStorage.getItem("historico")) || [];

// Atualizar a interface ao abrir
atualizarInterface();

// ===================
// Função para definir temperatura manual
// ===================
function setarTemperatura() {
    const input = document.getElementById("inputTemperatura");
    const valor = parseInt(input.value);

    if (!isNaN(valor)) {
        temperatura = valor;
        atualizarInterface();
        salvarNoHistorico();
        input.value = "";
    } else {
        alert("Digite um valor válido!");
    }
}

// ===================
// Função para atualizar a interface de temperatura
// ===================
function atualizarInterface() {
    tempDisplay.textContent = temperatura;
    atualizarCor();
}

// ===================
// Função para atualizar a cor do bloco de temperatura
// ===================
function atualizarCor() {
    const box = document.querySelector(".tempBox");

    if (temperatura >= 28) {
        box.style.backgroundColor = "#e53935"; // Quente
    } else if (temperatura >= 21) {
        box.style.backgroundColor = "#fdd835"; // Moderado
    } else {
        box.style.backgroundColor = "#00e676"; // Frio
    }
}

// ===================
// 🔥 Função que salva no histórico com data e hora
// ===================
function salvarNoHistorico() {
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-BR');
    const hora = agora.toLocaleTimeString('pt-BR');

    historico.push({
        data: data,
        hora: hora,
        temperatura: temperatura
    });

    // Limitar a 5 registros: remove o mais antigo
    if (historico.length > 5) {
        historico.shift();
    }

    localStorage.setItem("historico", JSON.stringify(historico));
}

// ===================
// ⏰ Agendamento automático a cada 30 minutos
// ===================

setInterval(() => {
    salvarNoHistorico();
}, 1800000); // 30 minutos = 1.800.000 ms

// 🔥 Para testes rápidos, pode usar 5000 (5 segundos)
// Depois volte para 1800000 na versão final
