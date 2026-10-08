// 1. Captura dos elementos do DOM usando os IDs do HTML
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

// 2. Evento de clique para processar a escolha e tomar decisões
botaoConsultar.addEventListener("click", () => {
  const escolha = campoServico.value;

  // 3. Estrutura condicional (if / else if / else) para decidir a resposta
  if (escolha === "") {
    resultado.textContent = "Escolha um serviço antes de consultar.";
  } else if (escolha === "endereco") {
    resultado.textContent = "A consulta de endereço pode ser verificada diretamente nas orientações de contato.";
  } else if (escolha === "atendimento") {
    resultado.textContent = "O atendimento digital funciona de segunda a sexta-feira, das 8h às 18h.";
  } else if (escolha === "documentos") {
    resultado.textContent = "Para solicitar documentos, separe seus comprovantes antes de prosseguir.";
  } else {
    resultado.textContent = "Serviço não identificado.";
  }
});