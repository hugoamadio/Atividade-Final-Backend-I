let novoRecado = document.getElementById("novoRecado")
let novoRecadoModal = document.getElementById("btnrecadomodal")
let contaRecados = localStorage.getItem("listaArmazenamentoRecados")
let sectionRecados = document.getElementById("section-recados")
let apagarRecado = document.getElementById("apagarRecado")

function trazListaRecados(){
    let listaArmazenamentoRecados = localStorage.getItem("listaArmazenamentoRecados")
    if (!listaArmazenamentoRecados) {
        listaArmazenamentoRecados = []
    } else {
        listaArmazenamentoRecados = JSON.parse(listaArmazenamentoRecados)
    }
    return listaArmazenamentoRecados
}

function guardaListaRecados(lista){
    let guardaLista = JSON.stringify(lista)
    localStorage.setItem("listaArmazenamentoRecados", guardaLista);
}

contaRecados = JSON.parse(contaRecados)
if (contaRecados) {
    for (let index = 0; index < contaRecados.length; index++) {
        let novoArticle = document.createElement("article");
        novoArticle.innerHTML = `
        <table class = "table-recado">
            <tr>
                <td>
                    <b>#</b> ${contaRecados[index].id}<br>

                    <b>Usuário:</b> ${contaRecados[index].nome}<br>
                
                    <b>Recado:</b> ${contaRecados[index].recado}
                </td>
            </tr>
        </table>
        `;
        sectionRecados.appendChild(novoArticle);
    }
}

novoRecado.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Botão novo recado pressionado!!");
});

novoRecadoModal.addEventListener("click", function (event) {
    let nomeRecado = document.getElementById("nome").value
    let textoRecado = document.getElementById("recado").value
    listaArmazenamentoRecados = trazListaRecados()
    let id = (listaArmazenamentoRecados.length)+1
    let objetoRecado = {id: id, nome: nomeRecado, recado: textoRecado };
    listaArmazenamentoRecados.push(objetoRecado);
    guardaListaRecados(listaArmazenamentoRecados)
    location.reload()
});

apagarRecado.addEventListener("click", function (event) {
    let idQuerApagar = Number(prompt("Digite o ID do recado que deseja apagar"))
    let listaArmazenamentoRecados = trazListaRecados()
    let indiceLista = listaArmazenamentoRecados.findIndex(elemento => elemento.id == idQuerApagar)
    if (indiceLista !== -1 ){
        listaArmazenamentoRecados.splice(indiceLista,1)
        guardaListaRecados(listaArmazenamentoRecados)
    }
    location.reload()
})

editarRecado.addEventListener("click", function (event){
    let idQuerEditar = Number(prompt("Digite o ID do recado que deseja editar"))
    let listaArmazenamentoRecados = trazListaRecados()
    let objetoAEditar = listaArmazenamentoRecados[listaArmazenamentoRecados.findIndex(elemento => elemento.id == idQuerEditar)]
    objetoAEditar.recado = prompt("Digite o novo recado abaixo")
    guardaListaRecados(listaArmazenamentoRecados)
    location.reload()
})