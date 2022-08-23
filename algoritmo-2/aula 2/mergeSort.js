const listaLivros = require("./array.js");

function mergeSort(array, nivelAninhamento = 0) {
  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parteUm = mergeSort(array.slice(0, meio), nivelAninhamento++);
    const parteDois = mergeSort(
      array.slice(meio, array.length),
      nivelAninhamento++
    );
    array = ordena(parteUm, parteDois);
  }
  return array;
}

function ordena(parteUm, parteDois) {
  let posicaoAtualParteUm = 0;
  let posicaoAtualParteDois = 0;
  const resultado = [];

  while (
    posicaoAtualParteUm < parteUm.length &&
    posicaoAtualParteDois < parteDois.length
  ) {
    let produtoAtualParteUm = parteUm[posicaoAtualParteUm];
    let produtoAtualParteDois = parteDois[posicaoAtualParteDois];

    if (produtoAtualParteUm.preco < produtoAtualParteDois.preco) {
      resultado.push(produtoAtualParteUm);
      posicaoAtualParteUm++;
    } else {
      resultado.push(produtoAtualParteDois);
      posicaoAtualParteDois++;
    }
  }
  return resultado.concat(
    posicaoAtualParteUm < parteUm.length
      ? parteUm.slice(posicaoAtualParteUm)
      : parteDois.slice(posicaoAtualParteDois)
  );
}

console.log(mergeSort(listaLivros));
