# Algoritmos com Javascript

O conhecimento é poder. Aprender algo novo nos dá um certo senso de domínio sobre o assunto, mas esse sentimento logo some quando não temos como fixar o que aprendemos na nossa memória. Escolhi o GitHub onde vou documentar o conteúdo aprendido para facilitar a memorização e, consequentemente, aumentar o meu conhecimento.

## JavaScript I: algoritmos de ordenação

#### Na aula 1 aprendi:

- Algoritmos são sequências finitas de passos lógicos para a resolução de um problema e que podem representar tanto problemas comuns em programação quanto qualquer situação que envolva passos lógicos;
- Pensar de forma algorítmica não se resume a código e nem precisa necessariamente começar pelo código em si;
- Traduzir os passos de um algoritmo para a linguagem de programação que escolhemos trabalhar (no caso, JavaScript), através de estruturas fundamentais da linguagem como variáveis, laços de repetição e condicionais.

#### Na aula 2 aprendi:

- Que, da mesma forma que criamos “algoritmos mentais” para encontrar o menor valor de uma lista, fazemos um processo parecido para ordenar uma lista;
- Como posso abstrair os passos “de cabeça” para código, observando a sequência dos passos utilizados;
- Que, para resolver um problema, muitas vezes utilizamos mais de um algoritmo; para resolver isso, criamos a função menorValor() para reaproveitar o código junto com o Selection Sort.

#### Na aula 3 aprendi:

- Que um problema pode ser resolvido com algoritmos diferentes, por exemplo, um problema de ordenação resolvido com Selection Sort ou Insertion Sort;
- Que, apesar do resultado final ser o mesmo, o processo (ou passos lógicos) de cada um dos algoritmos é diferente;
- A criar funções para melhor reaproveitamento de código, como para fazer o Insertion Sort receber uma lista de produtos diversos;
- A praticar mais com testes de mesa e ver o código funcionando passo a passo, e como isso pode nos ajudar a entender melhor como o código de um algoritmo funciona.

#### Na aula 4 aprendi:

- Que entender a complexidade de um algoritmo é essencial para que nossos programas funcionem da melhor forma possível;
- Que analisamos esta complexidade observando as operações feitas pelo código e transformando essas operações em números;
- Que performance e tempo impactam em custos e também na experiência do usuário do programa, pois um programa pode ficar muito lento dependendo da quantidade de dados que precisam ser processados;
- A analisar os dados de performance e comparar os números para verificar a performance de um algoritmo com relação a quantidade de operações efetuadas e tempo;
- Como o volume de operações efetuadas por um algoritmo se traduz em tempo de processamento, simulando a capacidade de um processador de computador.
<div align="center">
<img src="https://lh3.googleusercontent.com/fife/AAbDypAAmidM3qKO8wRFRln750DkIoQdKtaPCKCdJJyZmWGHSSRh4rBBfqzTDxK891sK72dJdwm5pCJnsWVk0MJGgSnAMbWV7-yeSGArp5DlUi9KlIi00xkGYwbRbSnDWOAikMwszy0KQQQooLqUbS0nCrtyyMngXqFQpw7kYRJvpVbp71vPA3Zsyglro8vy-FtXGKTVUv80kBm_Y8UCR2momxrnY1cSg34S57p66IHM35wPJ1D3ue0ZQbvi_aIGxD93bIkYyyRwqBzRWfgevuf1uldFnX16GGVJPgx3ABCJkcVo4Swnul-2rnG_z1O6Sv1SzHisr5_oNufXzVtna15dhd6ZYj_2FuiJucAsRF82ojHTrEXTY9M9kRdWz_0gqw1hXr36DGsxNliYhSyJXZDDf-PH17FOy1q4G7b0bUjbc9bLUFA88K-XIB69sTTg3GIPdryRcw3CeQv5CWylFgg6CbCUQWAQO7ioTQ9KzHOAOyw9cxlJOb6qPwJGuOxT5hz3HmZlmqfO5vWmI8jU8-cvpV_eGVVlnAULqpZnK5Gf-5-iBbTglZT0DTGfimrO10Ecf0_geL6pdgXyEl0tO79QUwFTa3Wpl6vLiuljSzR5m5EowyaZmbmizTeaYZWWuXo06w03Nqs9M-xYBoEGcHfurDjTIpf31YSS2uAIay9N9b7pnBkyQOMdftFXun5LPxeiW724Zzabr36MVYbR7J_9Q3eDjh8Dm-1HFO2ol4soIvv_dpwzJFDz79_qNqBJzBDOYrCPXrLUHy0TMvzNTcCMy0S7Ucn4we9r2psVcQ2-9oDwld5bWXJNnNePYBnWkPQgymjvv2ZXcj9c4XgRbpVq-2ttz7JTrl2c7W4mwHF-qrwP0nnURM3vfEd1e1R9ABx01kesMM8ikJS8lddgsEsZEy5jtExgi06zbyfhFuKrYXAq25p2Kfxa2bzRQ-okPs_H4hBY7_HCeRF1vram_p8epAF505NKdMfj8cj-mYE4lU9Fqwl3S4Bi8Vkmgo-EwICYRHL7DL5Ma3lYI4LEipnRsWYO8i8JC75RdAphxO8Q4IRF614BkMFXwsETRu3Ar8_RsE_VfLum_UKIuxz5Vwk7HGUfywR0icVV3amvMuGT-uNJNOxgUZEd21GFEAtRW9wFRrSpLvW7LASbtt5Y0Wezipm4zi44nuTi8qyArcXiDBaK1LiTc-Y8GCyN0h3uMGX7YWut8G2xNsLeZ6vHpEkz7LXQGS31MDewERHdPebJUvB48dbIuygTcdb2Z6byRYnYdBI9Wx8=w1920-h969" width="700px">
</div>
<p>Outros exemplos de notações relacionadas a algoritmos comuns em programação (inglês): <a href="https://www.bigocheatsheet.com/" target="_blank">Big-O Cheat Sheet</a></p>

#### Na aula 5 aprendi (Conclusão):

- Que, além das formas linear e quadrática, existem outras formas de cálculo de complexidade de um algoritmo, como a constante;
- Que é bem fácil “explodir” a capacidade de processamento de um computador com uma quantidade grande de operações, devido à influência da quantidade de dados na curva de complexidade de um algoritmo;
- Que devemos levar esse índice de crescimento em conta na hora de definirmos qual algoritmo será utilizado para resolver um problema, especialmente quando envolve grandes quantidades de dados e para isso podemos utilizar a análise assintótica e a notação O grande;
- Que existem várias notações e vários algoritmos “prontos”, como o Selection Sort e o Insertion Sort, entre diversos outros, cada um com suas vantagens e desvantagens.
  <br>

## JavaScript II: aprofundando em algoritmos de ordenação e busca

#### Na aula 1 aprendi:

- Posso pensar em novas formas de “atacar” um problema de ordenação, começando a partir de partes menores já ordenadas e unindo estas partes em uma única lista ordenada;
- Evoluí o conceito e testei o funcionamento do algoritmo com uma simulação sem código, similar ao “teste de mesa”, para entender quais operações deverão ser feitas pelo código durante o fluxo de execução do programa;
- Após utilizar a simulação para entender o fluxo do algoritmo e o que ele deve fazer, desenvolvi um código em JavaScript para implementá-lo através da função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.

#### Na aula 2 aprendi:

- Expandi o conceito de “dividir para conquistar”, reutilizando a lógica de ordenar duas listas, e desenvolvi um algoritmo para ordenar uma única lista;
- Utilizando o recurso das simulações e testes, entendi o funcionamento de um algoritmo de ordenação muito utilizado no dia-a-dia, o Merge Sort;
- Após entender o fluxo do algoritmo, fiz a implementação do algoritmo Merge Sort com JavaScript, através da função mergeSort() que recebe um array e retorna este array ordenado;
- Estudei a ferramenta de recursão, como ela pode ser utilizada no algoritmo Merge Sort e as diferenças dessa ferramenta com relação aos laços de repetição.

#### Na aula 3 aprendi:

- Trabalhei com o conceito de pivô, entendi como selecionar um elemento pivô no código e como posicionar este elemento em uma lista, comparando valores e contando elementos menores;
- Após posicionar um elemento pivô em um array, desenvolvi um código em JavaScript que percorre uma lista e separa todos os elementos entre maiores e menores que o pivô, através da função `encontraMenores()`;
- A partir do conceito de elemento pivô, entendi o funcionamento do algoritmo de ordenação quick sort, fazendo mais simulações e testes;
- Após entender o algoritmo, implementei o código utilizando JavaScript e reaproveitando funções e conceitos das aulas anteriores, como a função `trocaLugar()` e a recursão.
