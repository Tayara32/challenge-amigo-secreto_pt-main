//criar array vazio
let listaAmigos = [];

//função para adicionar amigo
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    //verificar se o input foi preenchideo
    if (nomeAmigo == "") {
        alert('Insira um nome para poder adicionar'); //se não foi preenchido
    } else {
        //se preenchido, adiciona ao final da lista
        listaAmigos.push(nomeAmigo);
        //atualiza a lsta na tela
        atualizarListaAmigos();
        //limpa o input
        document.getElementById('amigo').value = ""; 
        //mantem o botão para sortear habilitado enquanto houver elementos na lista para sortear
        document.getElementById('sortearBtn').disabled = false; 
    
    }
}

//função para sortear amigo
function sortearAmigo() {

    //verifica se a lista de amigos esta vazia
    if (listaAmigos.length == 0) {
        alert('Para sortear um amigo é preciso adicionar amigos!');
    } else {
        //se contém elementos na lista - a lista de amigos fica oculta
        document.getElementById('listaAmigos').style.display = "none";
        //sorteia um número que ira buscar o elemento pelo index
        let amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
        //busca o nome da lista pelo index sorteado
        let nomeAmigo = listaAmigos[amigoAleatorio]; 
        //remove o amigo sorteado
        listaAmigos.splice(amigoAleatorio, 1);
        //mostra o amigo sorteado
        document.getElementById('resultado').innerHTML = `Seu amigo secreto é: ${nomeAmigo}`;
        //atualiza a lista após remoção do amigo sorteado
        atualizarListaAmigos();

        //verifica se a lista esa vazia e então desabilita  botão de sorteio
        if (listaAmigos.length == 0) {
            document.getElementById('sortearBtn').disabled = true;
        }
    }
}

//função para a atualizar a lista de amigos inseridos
function atualizarListaAmigos() {
    //busca o id onde irá aparecer o conteudo da lista de maigos
    let mostrarListaAmigos = document.getElementById('listaAmigos');
    
    //se a lista estiver vazia
    if (listaAmigos.length == 0) {
        //mensagem para indicar que a lista esta vazia
        mostrarListaAmigos.style.display = "block";
        mostrarListaAmigos.innerHTML = "Todos os amigos já foram sorteados.";
    } else { 
        //mostra a lista de amigos inseridos
        mostrarListaAmigos.innerHTML = listaAmigos; 
    }
}
