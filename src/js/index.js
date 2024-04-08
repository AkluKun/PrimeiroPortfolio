
//identificar o botao
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

//identificar todos os projetos que estão sem a classe "ativo"
const projetosInativos = document.querySelectorAll('.projetos:not(.ativo)');

//adicionar um evento de click
botaoMostrarProjetos.addEventListener('click', () => {
//adicionar a classe ativo nos projetos inativos apos o click
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });

    botaoMostrarProjetos.classList.add("remover");

});