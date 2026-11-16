const selector = (element) => document.querySelector(element);

pdvsJson.map((pdv) => {
    const pdvsclone = selector('.link').cloneNode(true);
    pdvsclone.classList.remove('off');

    // 1. Preenche os dados do card primeiro
    pdvsclone.querySelector('.link a').href = pdv.link;
    pdvsclone.querySelector('.card img').src = pdv.img;
    pdvsclone.querySelector('.card h2').innerHTML = pdv.name;
    pdvsclone.querySelector('.card p').innerHTML = pdv.descripion;

    // 2. Aplica as cores personalizadas baseadas na descrição ou no PDV específico
    const desc = pdv.descripion ? pdv.descripion.trim() : '';

    if (desc === 'Rotisseria') {
        pdvsclone.querySelector('.card').style.background = '#000000';
    } else if (desc === 'A la Carte') {
        pdvsclone.querySelector('.card').style.background = '#708090';
    } else if (desc === 'Churros') {
        pdvsclone.querySelector('.card').style.background = '#00008B';
    } else if (desc === 'Adega') {
        pdvsclone.querySelector('.card').style.background = '#8B0000';
    } else if (desc === 'Boteco') {
        pdvsclone.querySelector('.card').style.background = '#002D58';
    } else if (desc === 'Super Drive') {
        pdvsclone.querySelector('.card').style.background = '#004b23';
    } else if (desc === 'Café') {
        pdvsclone.querySelector('.card').style.background = '#B22222';
    } else if (desc === 'ELETRO' || desc === 'RESERVA') {
        pdvsclone.querySelector('.card').style.background = '#D83006';
    } else if (desc.toLowerCase() === 'area nova') {
        pdvsclone.querySelector('.card').style.background = '#A9A9A9';
    }

    // Cor exclusiva para o PDV 5 e PDV 6 (continuam na Frente de Loja)
    if (pdv.name === 'PDV 5 - 424' || pdv.name === 'PDV 6 - 336') {
        pdvsclone.querySelector('.card').style.background = '#1eff0070'; // Escolha a cor desejada aqui
    }

    // 3. Filtra e envia para a linha horizontal correta
    const descUpper = desc.toUpperCase();

    if (descUpper === 'FRENTE DE LOJA') {
        selector('#coluna-frente').append(pdvsclone);
    } 
    else if (descUpper === 'AREA NOVA') {
        selector('#coluna-area-nova').append(pdvsclone);
    } 
    else if (descUpper === 'ROTISSERIA' || descUpper === 'A LA CARTE') {
        selector('#coluna-rotisseria-alacarte').append(pdvsclone);
    }
    else if (descUpper === 'ELETRO' || descUpper === 'RESERVA') {
        selector('#coluna-eletro').append(pdvsclone);
    }
    else if (descUpper === 'BOTECO') {
        selector('#coluna-boteco').append(pdvsclone);
    }

    else {
        selector('#coluna-outros').append(pdvsclone);
    }
});
