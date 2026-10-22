
"use strict";

/* =========================================
   AULA 08 - CONSULTA DE SERVIÇOS
   ========================================= */

const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

if (campoServico && botaoConsultar && resultado) {
    botaoConsultar.addEventListener("click", () => {
        const escolha = campoServico.value;

        if (escolha === "") {
            resultado.textContent =
                "Escolha um serviço antes de consultar.";
        } else if (escolha === "endereco") {
            resultado.textContent =
                "Consulte as orientações para encontrar informações de endereço.";
        } else if (escolha === "atendimento") {
            resultado.textContent =
                "O atendimento digital funciona de segunda a sexta-feira, das 8h às 18h.";
        } else if (escolha === "documentos") {
            resultado.textContent =
                "Confira os comprovantes necessários antes de solicitar documentos.";
        } else {
            resultado.textContent = "Serviço não identificado.";
        }
    });
}

/* =========================================
   AULAS 09 E 11 - ARRAY DE SERVIÇOS
   ========================================= */

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

console.table(servicos);
console.log("Categoria do primeiro serviço:", servicos[0].categoria);

/* =========================================
   AULAS 10 E 11 - CATÁLOGO DINÂMICO
   ========================================= */

const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos(lista) {
    if (!listaServicos) {
        return;
    }

    listaServicos.replaceChildren();

    if (lista.length === 0) {
        listaServicos.textContent =
            "Nenhum serviço foi encontrado nesta categoria.";
        return;
    }

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

renderizarServicos(servicos);

/* =========================================
   AULA 11 - FILTRO DE CATEGORIAS
   ========================================= */

const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

if (filtroCategoria && mensagemFiltro) {
    filtroCategoria.addEventListener("change", () => {
        const categoriaEscolhida = filtroCategoria.value;

        if (categoriaEscolhida === "todos") {
            renderizarServicos(servicos);
            mensagemFiltro.textContent =
                "Mostrando todos os serviços.";
            return;
        }

        const servicosFiltrados = servicos.filter((servico) => {
            return servico.categoria === categoriaEscolhida;
        });

        renderizarServicos(servicosFiltrados);
        mensagemFiltro.textContent =
            `${servicosFiltrados.length} serviço(s) encontrado(s).`;
    });
}

/* =========================================
   AULA 12 - VALIDAÇÃO DO FORMULÁRIO
   ========================================= */

const formulario = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const mensagemForm = document.querySelector("#mensagemForm");

if (
    formulario &&
    campoNome &&
    campoEmail &&
    campoAssunto &&
    campoMensagem &&
    mensagemForm
) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const assunto = campoAssunto.value;
        const mensagem = campoMensagem.value.trim();

        if (
            nome === "" ||
            email === "" ||
            assunto === "" ||
            mensagem === ""
        ) {
            mensagemForm.textContent =
                "Preencha todos os campos obrigatórios antes de continuar.";
            return;
        }

        if (!campoEmail.validity.valid) {
            mensagemForm.textContent =
                "Digite um endereço de e-mail válido.";
            campoEmail.focus();
            return;
        }

        mensagemForm.textContent =
            `Obrigado, ${nome}! Sua solicitação foi registrada.`;

        console.log("Formulário validado com sucesso.", {
            nome,
            email,
            assunto
        });
    });
}

/* =========================================
   AULA 13 - LOCALSTORAGE
   ========================================= */

const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");

if (campoFavorito && botaoFavorito && mensagemFavorito) {
    const nomesServicos = {
        endereco: "Endereço",
        atendimento: "Atendimento",
        documentos: "Documentos"
    };

    // Recupera a preferência anteriormente salva.
    try {
        const favoritoSalvo =
            localStorage.getItem("servicoFavorito");

        if (
            favoritoSalvo &&
            Object.prototype.hasOwnProperty.call(
                nomesServicos,
                favoritoSalvo
            )
        ) {
            campoFavorito.value = favoritoSalvo;
            mensagemFavorito.textContent =
                `Seu serviço favorito é: ${nomesServicos[favoritoSalvo]}.`;
        }
    } catch (erro) {
        mensagemFavorito.textContent =
            "Não foi possível recuperar a preferência salva.";
        console.error("Erro ao acessar o LocalStorage:", erro);
    }

    // Salva a preferência selecionada.
    botaoFavorito.addEventListener("click", () => {
        const servico = campoFavorito.value;

        if (!servico) {
            mensagemFavorito.textContent =
                "Escolha um serviço antes de salvar.";
            campoFavorito.focus();
            return;
        }

        if (!Object.prototype.hasOwnProperty.call(nomesServicos, servico)) {
            mensagemFavorito.textContent =
                "Selecione um serviço válido.";
            return;
        }

        try {
            localStorage.setItem("servicoFavorito", servico);

            mensagemFavorito.textContent =
                `Favorito salvo: ${nomesServicos[servico]}.`;
        } catch (erro) {
            mensagemFavorito.textContent =
                "Não foi possível salvar a preferência neste navegador.";
            console.error("Erro ao salvar no LocalStorage:", erro);
        }
    });
}
