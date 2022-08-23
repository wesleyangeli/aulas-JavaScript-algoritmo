const { edGalho, edFolha } = require("./arrays");

function juntaListas(listaUm, listaDois) {
  let listaFinal = [];
  let posicaoAtualListaUm = 0;
  let posicaoAtualListaDois = 0;
  let atual = 0;

  while (
    posicaoAtualListaUm < listaUm.length &&
    posicaoAtualListaDois < listaDois.length
  ) {
    let produtoAtualListaUm = listaUm[posicaoAtualListaUm];
    let produtoAtualListaDois = listaDois[posicaoAtualListaDois];

    if (produtoAtualListaUm.preco < produtoAtualListaDois.preco) {
      listaFinal[atual] = produtoAtualListaUm;
      posicaoAtualListaUm++;
    } else {
      listaFinal[atual] = produtoAtualListaDois;
      posicaoAtualListaDois++;
    }
    atual++;
  }

  while (posicaoAtualListaUm < listaUm.length) {
    listaFinal[atual] = listaUm[posicaoAtualListaUm];
    posicaoAtualListaUm++;
    atual++;
  }

  while (posicaoAtualListaDois < listaDois.length) {
    listaFinal[atual] = listaDois[posicaoAtualListaDois];
    posicaoAtualListaDois++;
    atual++;
  }

  return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));
