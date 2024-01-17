let cadastro = document.getElementById("cadastrar")
let usuariosCadastrados = []

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
        let novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        };
        usuariosCadastrados.push(novoUsuario)
        console.log(usuariosCadastrados);
    }
})
