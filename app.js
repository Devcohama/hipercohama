const selector = (element) => document.querySelector(element);

pdvsJson.map((pdv) => {
  const pdvsclone = selector('.link').cloneNode(true);

  // 1. Decidir em qual coluna/área vai colocar o clone com base na descrição
  if (pdv.descripion === 'Frente de Loja') {
    selector('#coluna-frente').append(pdvsclone);
  } else {
    selector('#coluna-area-nova').append(pdvsclone);
  }

  // 2. Preencher as informações do cartão
  pdvsclone.querySelector('.link a').href = pdv.link;
  pdvsclone.querySelector('.card img').src = pdv.img;
  pdvsclone.querySelector('.card h2').innerHTML = pdv.name;
  pdvsclone.querySelector('.card p').innerHTML = pdv.descripion;

  // 3. Manter a lógica de cores que já tinha
  if(pdv.descripion === 'Rotisseria') {
    pdvsclone.querySelector('.card').style.background = '#000000';
  }
  if(pdv.descripion === 'A la Carte') {
    pdvsclone.querySelector('.card').style.background = '#708090';
  }
  if(pdv.descripion === 'Churros') {
    pdvsclone.querySelector('.card').style.background = '#00008B';
  }
  if(pdv.descripion === 'Adega') {
    pdvsclone.querySelector('.card').style.background = '#8B0000';
  }
  if(pdv.descripion === 'Boteco') {
    pdvsclone.querySelector('.card').style.background = '#002D58';
  }
  if(pdv.descripion === 'Super Drive') {
    pdvsclone.querySelector('.card').style.background = '#004b23';
  }
  if(pdv.descripion === 'Café') {
    pdvsclone.querySelector('.card').style.background = '#B22222';
  }
  if(pdv.descripion === 'ELETRO') {
    pdvsclone.querySelector('.card').style.background = '#D83006';
  }
  if(pdv.descripion === 'RESERVA') {
    pdvsclone.querySelector('.card').style.background = '#D83006';
  }
  if(pdv.descripion === 'Area Nova') {
    pdvsclone.querySelector('.card').style.background = '#A9A9A9';
  }
});
