let btnEntrar = document.getElementById("btn-entrar")

btnEntrar.addEventListener("click", function () {
    event.preventDefault()
    console.log("botão clicado")
    let email = document.getElementById("exampleInputEmail1").value
    let senha = document.getElementById("exampleInputPassword1").value
    let listaUsuarios = localStorage.getItem("listaArmazenamento")
    console.log(listaUsuarios)
    let objetoListaUsuarios = JSON.parse(listaUsuarios)
    console.log(objetoListaUsuarios)
    if (listaUsuarios) {//Se lista de usuario não é null
        for (let index = 0; index < objetoListaUsuarios.length; index++) {
            if(objetoListaUsuarios[index].email === email){
                if(senha === objetoListaUsuarios[index].senha){
                    console.log("Usuario encontrado e senha válida.")
                    window.location.href = "crud.html"
                } else {
                    alert("Usúario não encontrado ou senha inválida")
                }
            }
        }
    }
})