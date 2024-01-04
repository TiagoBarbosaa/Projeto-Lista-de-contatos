function cadastrarContato() {
    // Obter valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Validar se ambos os campos foram preenchidos
    if (nome === "" || telefone === "") {
        alert("Por favor, preencha nome e telefone.");
        return;
    }

    // Criar uma nova linha na tabela
    const tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    // Adicionar valores à nova linha
    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Limpar os campos do formulário
    document.getElementById('nome').value = "";
    document.getElementById('telefone').value = "";
}
