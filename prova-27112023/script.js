var input = document.getElementById("novaTarefa");
var list = document.getElementById("listaTarefas");

function novaTarefa() {
    var tarefa = input.value;
    if (tarefa === '') {
        alert("Você deve escrever algo!");
    } else {
        var li = document.createElement("li");
        li.innerHTML = `
            <div class="lista-tarefa">
                <span class="tarefa-adicionada" onclick="editarOuConcluir(this)">${tarefa}</span>
                <span class="delBtn" onclick="this.parentElement.parentElement.removeChild(this.parentElement);"><i class="bi bi-trash3-fill"></i></span>
            </div>
        `
        list.appendChild(li);
    }
    input.value = "";
}

function editarOuConcluir(span) {
    var opcao = prompt("Você deseja marcar a tarefa como concluída ou editar a mesma? Para editar, digite 'editar' no campo abaixo, caso contrário a tarefa será marcada/desmarcada como concluída", "");
    if (opcao === "editar") {
        var novoTexto = prompt("Digite o novo texto da tarefa:");
        span.innerHTML = novoTexto;
    } else {
        span.parentElement.parentElement.classList.toggle("tarefa-concluida");
    } 
}