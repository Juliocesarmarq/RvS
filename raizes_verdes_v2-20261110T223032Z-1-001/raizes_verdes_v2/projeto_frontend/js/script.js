// Menu responsivo: mostra/esconde os links em telas pequenas.
const botaoMenu = document.getElementById("menu-botao");
const linksMenu = document.getElementById("menu-links");

if (botaoMenu && linksMenu) {
    const alternarMenu = (abrir) => {
        const aberto = linksMenu.classList.toggle("aberto", abrir);
        botaoMenu.setAttribute("aria-expanded", String(aberto));
        botaoMenu.textContent = aberto ? "✕ Fechar" : "☰ Menu";
    };

    botaoMenu.addEventListener("click", () => alternarMenu());

    // Fecha o menu com a tecla Esc
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && linksMenu.classList.contains("aberto")) {
            alternarMenu(false);
            botaoMenu.focus();
        }
    });

    // Ao ampliar a janela (ex.: girar o celular), volta ao estado padrão
    window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
        if (e.matches) alternarMenu(false);
    });
}

// Demonstração do formulário: valida os campos, mas não envia dados.
const formularioContato = document.getElementById("form-contato");
const retornoFormulario = document.getElementById("retorno-formulario");

if (formularioContato && retornoFormulario) {
    formularioContato.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (!formularioContato.reportValidity()) {
            retornoFormulario.textContent = "Confira os campos destacados antes de continuar.";
            return;
        }

        retornoFormulario.textContent = "Validação concluída! Atenção: esta é apenas uma demonstração; sua mensagem não foi enviada nem armazenada.";
        formularioContato.reset();
    });
}
