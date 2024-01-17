let cadastro = document.getElementById("cadastrar")

cadastro.addEventListener("click", function () {
    event.preventDefault();
    console.log("Botão clicado")
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;

    if (senha != confirmaSenha) {
        alert("As senhas não são iguais!")
    } else {
        let listaArmazenamento = localStorage.getItem("listaArmazenamento")
        if (!listaArmazenamento) { // Se não tem a listaArmazenamento criada
            listaArmazenamento = [] // Cria a listaArmazenamento
        } else {                    // Se não
            listaArmazenamento = JSON.parse(listaArmazenamento) // Traz listaArmazenamento
        }

        let novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        listaArmazenamento.push(novoUsuario) // Adiciona o novo usuario ao fim da lista

        let salvarUsuario = JSON.stringify(listaArmazenamento) // Transforma a listaArmazenamento em string e guarda 
        localStorage.setItem("listaArmazenamento", salvarUsuario)
        console.log(salvarUsuario)
    }
})
