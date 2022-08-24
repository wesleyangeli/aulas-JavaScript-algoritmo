const listaLivros = require("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita); //vai pra função na linha 17
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, indiceAtual - 1);
    }
    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita);
    }
  }
  return array;
}

function particiona(array, esquerda, direita) {
  let atualEsq = esquerda;
  let atualDir = direita;
  let pivo = array[Math.floor((esquerda + direita) / 2)]; //Define o pivô
  while (atualEsq <= atualDir) {
    while (array[atualEsq].preco < pivo.preco) {
      atualEsq++;
    }
    while (array[atualDir].preco > pivo.preco) {
      atualDir--;
    }

    if (atualEsq <= atualDir) {
      trocaLugar(array, atualEsq, atualDir);
      atualEsq++;
      atualDir--;
    }
  }
  return atualEsq;
}

quickSort(listaLivros, 0, listaLivros.length - 1);
