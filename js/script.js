"use strict";

/* =========================================
   CONSULTA RÁPIDA DE SERVIÇOS
   ========================================= */
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

const orientacoes = {
    endereco: "Nossa localização demonstrativa é em Marechal Cândido Rondon – PR. O endereço apresentado neste site é fictício e serve apenas para a atividade acadêmica.",
    atendimento: "O horário sugerido para atendimento é de segunda a sexta-feira, das 8h às 18h. Como este site é demonstrativo, o atendimento não está ativo de verdade.",
    documentos: "Podemos ajudar a organizar informações, documentos digitais e formulários. Antes de compartilhar documentos reais, confira os requisitos e proteja seus dados pessoais.",
    desenvolvimento: "Criamos páginas institucionais e sites responsivos, organizando conteúdo, navegação e identidade visual para apresentar melhor uma marca.",
    automacao: "A automação ajuda a reduzir tarefas repetitivas e organizar processos. O escopo ideal depende da necessidade de cada negócio."
};

if (campoServico && botaoConsultar && resultado) {
    botaoConsultar.addEventListener("click", () => {
        const escolha = campoServico.value;
        resultado.textContent = escolha === ""
            ? "Escolha um serviço antes de consultar."
            : (orientacoes[escolha] || "Serviço não identificado.");
    });
}

/* =========================================
   CATÁLOGO DINÂMICO DE SERVIÇOS
   ========================================= */
const servicos = [
    {
        id: "desenvolvimento",
        nome: "Desenvolvimento de sites",
        descricao: "Sites institucionais modernos, responsivos e organizados para apresentar empresas, projetos e serviços com clareza.",
        categoria: "digital",
        icone: "⌘"
    },
    {
        id: "presenca",
        nome: "Presença digital",
        descricao: "Orientação para estruturar informações da marca, organizar conteúdo e criar uma experiência consistente para visitantes.",
        categoria: "digital",
        icone: "◉"
    },
    {
        id: "suporte",
        nome: "Suporte tecnológico",
        descricao: "Ajuda inicial com dúvidas de software, ferramentas digitais, configurações e boas práticas para o uso da tecnologia.",
        categoria: "atendimento",
        icone: "⌁"
    },
    {
        id: "consultoria",
        nome: "Consultoria digital",
        descricao: "Levantamento de necessidades e recomendações para escolher ferramentas digitais de acordo com cada objetivo.",
        categoria: "atendimento",
        icone: "◇"
    },
    {
        id: "documentos",
        nome: "Organização de documentos",
        descricao: "Orientações para organizar arquivos, formulários e informações digitais de maneira mais clara e fácil de localizar.",
        categoria: "documentos",
        icone: "▤"
    },
    {
        id: "seguranca",
        nome: "Boas práticas de segurança",
        descricao: "Dicas de organização de senhas, atualização de dispositivos, identificação de mensagens suspeitas e proteção de informações.",
        categoria: "documentos",
        icone: "⬡"
    },
    {
        id: "automacao",
        nome: "Sistemas e automação",
        descricao: "Planejamento de soluções que organizam dados e ajudam a simplificar tarefas repetitivas de uma rotina profissional.",
        categoria: "automacao",
        icone: "▦"
    },
    {
        id: "dados",
        nome: "Organização de dados e relatórios",
        descricao: "Estruturação inicial de informações para facilitar consultas, acompanhar indicadores e apoiar decisões.",
        categoria: "automacao",
        icone: "▥"
    },
    {
        id: "endereco",
        nome: "Endereço e localização",
        descricao: "Consulte a localização demonstrativa da Ivona Tech em Marechal Cândido Rondon, Paraná. O endereço completo exibido é fictício.",
        categoria: "atendimento",
        icone: "⌖"
    }
];

const listaServicos = document.querySelector("#listaServicos");
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

function renderizarServicos(lista) {
    if (!listaServicos) return;

    listaServicos.replaceChildren();

    if (lista.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "empty-state";
        aviso.textContent = "Nenhum serviço foi encontrado nesta categoria.";
        listaServicos.appendChild(aviso);
        return;
    }

    lista.forEach((servico) => {
        const card = document.createElement("article");
        card.className = "card-servico";
        card.id = servico.id;

        const icone = document.createElement("div");
        icone.className = "catalog-icon";
        icone.setAttribute("aria-hidden", "true");
        icone.textContent = servico.icone;

        const categoria = document.createElement("span");
        categoria.className = "catalog-category";
        categoria.textContent = nomeCategoria(servico.categoria);

        const titulo = document.createElement("h3");
        titulo.textContent = servico.nome;

        const descricao = document.createElement("p");
        descricao.textContent = servico.descricao;

        const link = document.createElement("a");
        link.href = "contato.html";
        link.textContent = "Tenho interesse →";

        card.append(icone, categoria, titulo, descricao, link);
        listaServicos.appendChild(card);
    });
}

function nomeCategoria(categoria) {
    const categorias = {
        digital: "Desenvolvimento digital",
        atendimento: "Atendimento e suporte",
        documentos: "Organização e documentos",
        automacao: "Sistemas e automação"
    };
    return categorias[categoria] || "Solução digital";
}

renderizarServicos(servicos);

if (filtroCategoria && mensagemFiltro) {
    filtroCategoria.addEventListener("change", () => {
        const categoriaEscolhida = filtroCategoria.value;
        const servicosFiltrados = categoriaEscolhida === "todos"
            ? servicos
            : servicos.filter((servico) => servico.categoria === categoriaEscolhida);

        renderizarServicos(servicosFiltrados);
        mensagemFiltro.textContent = categoriaEscolhida === "todos"
            ? `Mostrando todos os ${servicosFiltrados.length} serviços.`
            : `${servicosFiltrados.length} serviço(s) encontrado(s) nesta categoria.`;
    });
}

/* =========================================
   VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   Este formulário é demonstrativo: não envia e-mail.
   ========================================= */
const formulario = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const mensagemForm = document.querySelector("#mensagemForm");

if (formulario && campoNome && campoEmail && campoAssunto && campoMensagem && mensagemForm) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const assunto = campoAssunto.value;
        const mensagem = campoMensagem.value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            mensagemForm.textContent = "Preencha todos os campos obrigatórios antes de continuar.";
            mensagemForm.style.color = "#b42318";
            return;
        }

        if (!campoEmail.validity.valid) {
            mensagemForm.textContent = "Digite um endereço de e-mail válido.";
            mensagemForm.style.color = "#b42318";
            campoEmail.focus();
            return;
        }

        mensagemForm.style.color = "#087a60";
        mensagemForm.textContent = `Obrigado, ${nome}! O formulário foi validado nesta demonstração. Nenhuma mensagem foi enviada.`;

        console.log("Formulário demonstrativo validado.", {
            nome,
            email,
            assunto,
            mensagem
        });
    });
}

/* =========================================
   PREFERÊNCIA DE SERVIÇO - LOCALSTORAGE
   ========================================= */
const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");

if (campoFavorito && botaoFavorito && mensagemFavorito) {
    const nomesServicos = {
        endereco: "Endereço e localização",
        atendimento: "Atendimento e suporte",
        documentos: "Organização de documentos",
        desenvolvimento: "Desenvolvimento de sites",
        automacao: "Sistemas e automação"
    };

    try {
        const favoritoSalvo = localStorage.getItem("servicoFavorito");
        if (favoritoSalvo && Object.prototype.hasOwnProperty.call(nomesServicos, favoritoSalvo)) {
            campoFavorito.value = favoritoSalvo;
            mensagemFavorito.textContent = `Sua solução favorita é: ${nomesServicos[favoritoSalvo]}.`;
        }
    } catch (erro) {
        mensagemFavorito.textContent = "Não foi possível recuperar a preferência salva neste navegador.";
        console.error("Erro ao acessar o LocalStorage:", erro);
    }

    botaoFavorito.addEventListener("click", () => {
        const servico = campoFavorito.value;

        if (!servico || !Object.prototype.hasOwnProperty.call(nomesServicos, servico)) {
            mensagemFavorito.textContent = "Selecione uma solução válida antes de salvar.";
            return;
        }

        try {
            localStorage.setItem("servicoFavorito", servico);
            mensagemFavorito.textContent = `Favorito salvo: ${nomesServicos[servico]}.`;
        } catch (erro) {
            mensagemFavorito.textContent = "Não foi possível salvar a preferência neste navegador.";
            console.error("Erro ao salvar no LocalStorage:", erro);
        }
    });
}
