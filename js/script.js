const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

botaoConsultar.addEventListener("click", () => {
  const escolha = campoServico.value;

  if (escolha === "") {
    resultado.textContent = "Escolha um serviço antes de consultar.";
  } else if (escolha === "agendamento") {
    resultado.textContent = "O agendamento pode ser solicitado pelo portal.";
  } else if (escolha === "documentos") {
    resultado.textContent = "Confira os documentos necessários antes de solicitar.";
  } else if (escolha === "atendimento") {
    resultado.textContent = "Consulte os horários disponíveis para atendimento.";
  } else {
    resultado.textContent = "Serviço não identificado.";
  }
});