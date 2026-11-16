const selector = (element) => document.querySelector(element);


pdvsJson.map((pdv) => {
  const pdvsclone = selector('.link').cloneNode(true);
    selector('.pdv-area').append(pdvsclone);
  // Filtra e envia para a linha horizontal correta
if (pdv.descripion.toUpperCase() === 'FRENTE DE LOJA') {
    selector('#coluna-frente').append(pdvsclone);
} 
else if (pdv.descripion.toUpperCase() === 'AREA NOVA') {
    selector('#coluna-area-nova').append(pdvsclone);
} 
else {
    selector('#coluna-outros').append(pdvsclone);
}

    pdvsclone.querySelector('.link a').href = pdv.link ;
    pdvsclone.querySelector('.card img').src = pdv.img;
    pdvsclone.querySelector('.card h2').innerHTML = pdv.name;
    pdvsclone.querySelector('.card p').innerHTML = pdv.descripion;


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
  // Cor exclusiva para o PDV 5 e PDV 6 da Frente de Loja
        if (pdv.name === 'PDV 5 - 424' || pdv.name === 'PDV 6 - 336') {
            if (cardDiv) cardDiv.style.background = '008000'; // Escolha a cor desejada aqui
        }
});
