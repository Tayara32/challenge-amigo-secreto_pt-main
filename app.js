let listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == "") {
        alert('Insira um nome para poder adicionar');
    } else {
        listaAmigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = ""; 
        document.getElementById('sortearBtn').disabled = false; 
        document.getElementById('resultado').innerHTML = '';
    }
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert('Para sortear um amigo é preciso adicionar amigos!');
    } else {
        document.getElementById('listaAmigos').style.display = "none";
        let amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let nomeAmigo = listaAmigos[amigoAleatorio]; 
        listaAmigos.splice(amigoAleatorio, 1);
        document.getElementById('resultado').innerHTML = `Seu amigo secreto é: ${nomeAmigo}`;
      
        atualizarListaAmigos();

        if (listaAmigos.length == 0) {
            document.getElementById('sortearBtn').disabled = true;
        }
    }
}

function atualizarListaAmigos() {
    let mostrarListaAmigos = document.getElementById('listaAmigos');
    
    if (listaAmigos.length == 0) {
        mostrarListaAmigos.style.display = "block";
        mostrarListaAmigos.innerHTML = "Todos os amigos já foram sorteados.";
    } else { 
        mostrarListaAmigos.innerHTML = listaAmigos; 
    }
}
