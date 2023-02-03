let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = [];

function adicionartarefas(){
    if (inputElement.value == ''){
        alert('Digite alguma coisa animal...')
        return false;
    } else {
        let novatarefa = inputElement.value;

        tarefas.push(novatarefa);
        inputElement.value = ''
    }
}


function rendertarefas(){
    listElement.innerHTML = '';

    tarefas.map((todo)=> {
        let liElement = document.createElement('li');
        let tarefaText = document.createElement(todo);

        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement);
    })
}

function deletartarefas (posicao){
    tarefas.splice(posicao, 1)
    rendertarefas();
}

function salvarDados(){
    
}

buttonElement.onclick = adicionartarefas;