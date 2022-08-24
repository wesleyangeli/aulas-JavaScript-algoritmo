const listaLivros = require("./array");

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  let valoreMenores = 0;
  encontraMenores(pivo, array);

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    if (atual.preco < pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoreMenores);
      valoreMenores++;
    }
  }
  return array;
}

function encontraMenores(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }
  trocaLugar(array, array.indexOf(pivo), menores);
  return array;
}

function trocaLugar(array, de, para) {
  let elemUm = array[de];
  let elemDois = array[para];

  array[para] = elemUm;
  array[de] = elemDois;
}

console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;
