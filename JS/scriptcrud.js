let novoReacado = document.getElementById("novoRecado");
let novoRecadoModal = document.getElementById("btnrecadomodal");
let contaRecados = localStorage.getItem("listaArmazenamentoRecados");
contaRecados = JSON.parse(contaRecados);
let sectionRecados = document.getElementById("section-recados")
// let sectionRecados = document.createElement("section");
// sectionRecados.className = "section-recados";

for (let index = 0; index < contaRecados.length; index++) {
    let novoArticle = document.createElement("article");
    novoArticle.innerHTML = `
        <table>
            <tr>
                <td>
                    <tbody id="recado-list">
                        ${contaRecados[index].recado}
                    </tbody>
                </td>
            </tr>
        </table>
    `;

    sectionRecados.appendChild(novoArticle);
}

novoReacado.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Botão novo recado pressionado!!");
});

novoRecadoModal.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Botão novo recado modal pressionado!!");
    
    let textoRecado = document.getElementById("recado").value;
    let listaArmazenamentoRecados = localStorage.getItem("listaArmazenamentoRecados");
    if (!listaArmazenamentoRecados) {
        listaArmazenamentoRecados = [];
    } else {
        listaArmazenamentoRecados = JSON.parse(listaArmazenamentoRecados);
    }

    let objetoRecado = { recado: textoRecado };
    listaArmazenamentoRecados.push(objetoRecado);

    let salvarRecado = JSON.stringify(listaArmazenamentoRecados);
    localStorage.setItem("listaArmazenamentoRecados", salvarRecado);
    console.log(salvarRecado);
    location.reload()
});
