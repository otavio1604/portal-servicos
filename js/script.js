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
   AULA 09 E 11 - ARRAY DE OBJETOS COM CATEGORIA
   ========================================= */

// 4. Lista de serviços do Portal (com a propriedade 'categoria' adicionada)
const servicos = [
  {
    nome: "Endereço",
    descricao:
      "Consulte as orientações para encontrar informações de endereço.",
    categoria: "atendimento"
  },
  {
    nome: "Atendimento",
    descricao:
      "Veja informações sobre o atendimento digital e seus horários.",
    categoria: "atendimento"
  },
  {
    nome: "Documentos",
    descricao:
      "Confira as orientações e os comprovantes necessários para solicitar documentos.",
    categoria: "documentos"
  }
];

// 5. Testes dos dados no Console (Etapa 2)
console.table(servicos);
console.log("Categoria do primeiro serviço:", servicos[0].categoria);

/* =========================================
   AULA 10 E 11 - FUNÇÃO E RENDERIZAÇÃO DE LISTA
   ========================================= */

// 7. Localiza o espaço dos cards no HTML
const listaServicos = document.querySelector("#listaServicos");

// 8. Função que cria os cards dinamicamente a partir de uma lista (Etapa 5 e 7)
function renderizarServicos(lista) {
  // Se o container não existir nesta página, não faz nada
  if (!listaServicos) {
    return;
  }

  // Limpa os cards anteriores
  listaServicos.innerHTML = "";

  // Tratamento para lista vazia (Etapa 7)
  if (lista.length === 0) {
    listaServicos.textContent = "Nenhum serviço foi encontrado nesta categoria.";
    return;
  }

  // Cria um card para cada serviço do array informado
  lista.forEach((servico) => {
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

// Execução inicial com a lista completa
renderizarServicos(servicos);

/* =========================================
   AULA 11 - FILTRO INTERATIVO COM CHANGE E FILTER
   ========================================= */

// Capta os elementos do filtro
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

if (filtroCategoria && mensagemFiltro) {
  // Escuta a mudança de opção no select (Etapa 4 e 6)
  filtroCategoria.addEventListener("change", () => {
    const categoriaEscolhida = filtroCategoria.value;

    if (categoriaEscolhida === "todos") {
      renderizarServicos(servicos);
      mensagemFiltro.textContent = "Mostrando todos os serviços.";
    } else {
      // Filtra os serviços mantendo apenas os da categoria selecionada
      const servicosFiltrados = servicos.filter((servico) => {
        return servico.categoria === categoriaEscolhida;
      });

      renderizarServicos(servicosFiltrados);
      mensagemFiltro.textContent =
        servicosFiltrados.length + " serviço(s) encontrado(s).";
    }
  });
}