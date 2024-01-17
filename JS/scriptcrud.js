let novoReacado = document.getElementById("novoRecado")
let novoRecadoModal = document.getElementById("btnrecadomodal")


novoReacado.addEventListener("click", function () {
    event.preventDefault();
    console.log("Botao novo recado pressionado!!")
})


novoRecadoModal.addEventListener("click", function () {
    event.preventDefault();
    console.log("Botao novo recado modal pressionado!!")


    let textoRecado = document.getElementById("recado").value
    let listaArmazenamentoRecados = localStorage.getItem("listaArmazenamentoRecados")
    if (!listaArmazenamentoRecados) {
        listaArmazenamentoRecados = [] //Não utilizar let para não redeclarar
    } else {
        listaArmazenamentoRecados = JSON.parse(listaArmazenamentoRecados)
    }

    let objetoRecado = { recado: textoRecado }

    listaArmazenamentoRecados.push(objetoRecado)
    let salvarRecado = JSON.stringify(listaArmazenamentoRecados)
    localStorage.setItem("listaArmazenamentoRecados", salvarRecado)
    console.log(salvarRecado)
    

})