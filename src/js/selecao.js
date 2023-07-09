 // Obtém a referência para todos os elementos <li> dos personagens
 const personagens = document.querySelectorAll('.personagem');
  
 // Adiciona o evento de clique a cada personagem
 personagens.forEach(personagem => {
   personagem.addEventListener('click', () => {
     // Obtém o ID do personagem selecionado a partir do atributo data-personagem
     const idPersonagem = personagem.getAttribute('data-personagem');

     // Atualiza as informações do personagem selecionado
     const personagemGrande = document.querySelector('.personagem-grande');
     const nomePersonagem = document.getElementById('nome-personagem');
     const descricaoPersonagem = document.getElementById('descricao-personagem');

     // Atualiza os atributos src, alt e texto dos elementos relevantes
     personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
     personagemGrande.alt = `Personagem ${idPersonagem}`;
     nomePersonagem.textContent = idPersonagem.toUpperCase();

     // Adicione descrições personalizadas para cada personagem
     if (idPersonagem === 'ciclope') {
       descricaoPersonagem.textContent = 'Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los';
     } else if (idPersonagem === 'jean-grey') {
       descricaoPersonagem.textContent = 'Ela é uma poderosa telepata e telecinética, além de ser membro importante dos X-Men';
     } else if (idPersonagem === 'lince-negra') {
       descricaoPersonagem.textContent = 'Seu poder mutante é a habilidade de "fasear" ou "intangibilidade". Isso significa que ela pode atravessar objetos sólidos, tornando-se intangível. ';
     } else if (idPersonagem === 'tempestade') {
       descricaoPersonagem.textContent = 'A Tempestade, também conhecida como Ororo Munroe, é uma personagem dos X-Men da Marvel Comics. Ela é uma mutante com uma variedade de poderes relacionados ao controle do clima e às forças naturais. ';
     } else if (idPersonagem === 'vampira') {
       descricaoPersonagem.textContent = 'Absorção de poderes e memórias: Vampira tem a capacidade de absorver os poderes, habilidades e memórias de outras pessoas através do contato físico. Ela pode temporariamente desativar os poderes de um mutante ao tocá-lo.';
     } else if (idPersonagem === 'wolverine') {
       descricaoPersonagem.textContent = 'Fator de cura acelerado: Wolverine possui um poderoso fator de cura que lhe permite se recuperar rapidamente de ferimentos e regenerar tecidos danificados.';
     } else if (idPersonagem === 'noturno') {
       descricaoPersonagem.textContent = 'Teletransporte: Noturno pode se teletransportar instantaneamente para qualquer lugar que ele possa ver ou que esteja familiarizado.';
     } else if (idPersonagem === 'magneto') {
       descricaoPersonagem.textContent = 'Manipulação magnética: Magneto pode controlar campos magnéticos e manipular objetos metálicos. Ele pode mover, levitar e remodelar metais com seu poder.';
     }
     // Adicione outras condições para cada personagem
     
     // Adicione mais informações dos personagens conforme necessário

     // Remova as classes ativas dos outros personagens
     personagens.forEach(p => p.classList.remove('ativo'));

     // Adicione a classe ativo ao personagem selecionado
     personagem.classList.add('ativo');
   });
 });