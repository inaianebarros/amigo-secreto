//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friends = [];

function addFriend(){
    const inputField = document.querySelector('#amigo');

    const friendName = inputField.value;
    
    if (!friendName){
        alert('Por favor, insira um nome.');
        return;
    }

    friends.push(friendName);
    
    inputField.value = "";

    const listItem = document.createElement('li');
    listItem.textContent = friendName;
    
    document.querySelector('#listaAmigos').appendChild(listItem);
}

function sortFriend(){
    if (friends.length === 0){
        alert('Nao é possivel sortear, adicionar amigo!');
        return;
    }

    document.querySelector('#resultado').innerHTML = '';

    const listItem = document.createElement('li');
    listItem.textContent = `O amigo secreto sorteado é: ${friends[Math.floor(Math.random() * friends.length)]}`;

    friends = [];

    document.querySelector("#draw-button").disabled = true;
    document.querySelector('#resultado').appendChild(listItem);
    document.querySelector('#listaAmigos').innerHTML = '';
}

function reset(){
    friends = [];

    document.querySelector("#draw-button").disabled = false;
    document.querySelector('#resultado').innerHTML = '';
    document.querySelector('#listaAmigos').innerHTML = '';
}