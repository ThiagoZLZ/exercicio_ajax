document.addEventListener('DOMContentLoaded', function(){
    const nome = document.querySelector('#nome');
    const apelido = document.querySelector('#apelido');
    const imagem = document.querySelector('#imagem-avatar');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');


    fetch('https://api.github.com/users/ThiagoZLZ').then(function(resposta){
        return resposta.json();

    }).then(function(json){
        nome.innerText = json.name;
        apelido.innerText = json.login;
        imagem.src = json.avatar_url; 
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;

    })
})






