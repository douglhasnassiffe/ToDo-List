
const teste =[];

function adicionarTarefa() {

    let tarefa = document.getElementById('inputNovaTarefa');
    let listaTarefas = document.getElementById('listaTarefas');

    let novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefa.value;
    tarefa.value = '';

    let btnRemover = document.createElement('input');
    btnRemover.setAttribute('type', 'submit');
    btnRemover.setAttribute('class', 'btnRedondo');
    btnRemover.value = '-';
    btnRemover.addEventListener('click', removerTarefa);
    novaTarefa.appendChild(btnRemover);

    novaTarefa.addEventListener('mouseover', mudaBranco);
    novaTarefa.addEventListener('mouseout', mudaAzul);

    listaTarefas.appendChild(novaTarefa);

    listaVazia();


}

function removerTarefa() {

    this.parentNode.remove();
    listaVazia();
    
}

function mudaBranco() {

    this.firstElementChild.setAttribute('class', 'btnRedondo branco');

}

function mudaAzul() {

    this.firstElementChild.setAttribute('class', 'btnRedondo azul');

}


function listaVazia() {

    
    let listaTarefas = document.getElementById('listaTarefas');


    if (listaTarefas.firstElementChild == null) {
        let sectionTarefas = document.getElementById('listaDeTarefas');
        let avisoListaVazia = document.createElement('p');
        avisoListaVazia.setAttribute('id', 'aviso');
        avisoListaVazia.innerText = "Lista vazia";
        sectionTarefas.appendChild(avisoListaVazia);

    } else {

        let avisoListaCheia = document.getElementById('aviso');
        if (avisoListaCheia != null)
            avisoListaCheia.remove();
    }

}

listaVazia();