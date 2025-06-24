// Carregar histórico salvo
const historico = JSON.parse(localStorage.getItem("historico")) || [];

// Pegar a div onde será exibido
const lista = document.getElementById("listaHistorico");

// Se não há dados
if (historico.length === 0) {
    lista.innerHTML = "<p>Não há registros no histórico.</p>";
} else {
    historico.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <p><strong>Data:</strong> ${item.data}</p>
            <p><strong>Hora:</strong> ${item.hora}</p>
            <p><strong>Temperatura:</strong> ${item.temperatura}°C</p>
        `;

        lista.appendChild(card);
    });
}
