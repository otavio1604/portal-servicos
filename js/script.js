
/* =========================================
   AULA 08 - CONSULTA DE SERVIÇOS
   ========================================= */

// 1. Captura dos elementos da consulta
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

// 2. Evento do botão de consulta
if (campoServico && botaoConsultar && resultado) {
  botaoConsultar.addEventListener("click", () => {
    const escolha = campoServico.value;

    // 3. Verifica o serviço escolhido
    if (escolha === "") {
      resultado.textContent =
        "Escolha um serviço antes de consultar.";
    } else if (escolha === "endereco") {
      resultado.textContent =
        "A consulta de endereço pode ser verificada diretamente nas orientações de contato.";
    } else if (escolha === "atendimento") {
      resultado.textContent =
        "O atendimento digital funciona de segunda a sexta-feira, das 8h às 18h.";
    } else if (escolha === "documentos") {
      resultado.textContent =
        "Para solicitar documentos, separe seus comprovantes antes de prosseguir.";
    } else {
      resultado.textContent = "Serviço não identificado.";
    }
  });
}

/* =========================================
   AULA 09 - ARRAY DE OBJETOS
   ========================================= */

// 4. Lista de serviços do Portal
const servicos = [
  {
    nome: "Endereço",
    descricao:
      "Consulte as orientações para encontrar informações de endereço."
  },
  {
    nome: "Atendimento",
    descricao:
      "Veja informações sobre o atendimento digital e seus horários."
  },
  {
    nome: "Documentos",
    descricao:
      "Confira as orientações e os comprovantes necessários para solicitar documentos."
  }
];

// 5. Testes dos dados no Console
console.table(servicos);

console.log("Primeiro serviço:", servicos[0].nome);
console.log("Descrição do segundo serviço:", servicos[1].descricao);

// 6. Percorre todos os serviços
servicos.forEach((servico) => {
  console.log(servico.nome);
});

/* =========================================
   AULA 10 - FUNÇÃO E CRIAÇÃO DOS CARDS
   ========================================= */

// 7. Localiza o espaço dos cards no HTML
const listaServicos = document.querySelector("#listaServicos");

// 8. Função que cria os cards automaticamente
function renderizarServicos() {
  // Se o container não existir nesta página, não faz nada
  if (!listaServicos) {
    return;
  }

  // Limpa os cards anteriores
  listaServicos.innerHTML = "";

  // Cria um card para cada serviço do array
  servicos.forEach((servico) => {
    const card = document.createElement("article");
    card.classList.add("card-servico");

    const titulo = document.createElement("h3");
    titulo.textContent = servico.nome;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    card.append(titulo, descricao);
    listaServicos.appendChild(card);
  });
}

// 9. Executa a função
renderizarServicos();
