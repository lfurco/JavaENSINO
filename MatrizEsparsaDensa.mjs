function MatrizEsparsaDensa(matrizEsparsa, linhas, colunas) {
  const matriz = Array.from({ length: linhas }, () => Array(colunas).fill(0));
  for (const { linha, coluna, valor } of matrizEsparsa) {
    matriz[linha][coluna] = valor;
  }
  return matriz.map((linha) => linha.join("  ")).join("\n");
}

const matrizEsparsa = [
  { linha: 3, coluna: 0, valor: 3 },
  { linha: 1, coluna: 1, valor: 8 },
  { linha: 0, coluna: 3, valor: 5 },
];

console.log(MatrizEsparsaDensa(matrizEsparsa, 4, 4));


// MatrizEsparsaDensa seria na base de:

// aqui acontece o contrário da matriz esparsa

// antes, somente os números diferentes de 0
// eram armazenados:

// linha 3 coluna 0 = 3
// linha 1 coluna 1 = 8
// linha 0 coluna 3 = 5

// agora o sistema cria novamente
// a matriz completa cheia de zeros:

// [0,0,0,0]
// [0,0,0,0]
// [0,0,0,0]
// [0,0,0,0]

// depois ele percorre os valores salvos
// da matriz esparsa:

// { linha: 3, coluna: 0, valor: 3 }
// { linha: 1, coluna: 1, valor: 8 }
// { linha: 0, coluna: 3, valor: 5 }

// e coloca cada valor na posição correta:

// matriz[3][0] = 3
// matriz[1][1] = 8
// matriz[0][3] = 5

// resultado final:

// [0,0,0,5]
// [0,8,0,0]
// [0,0,0,0]
// [3,0,0,0]

// ou seja,
// ele transforma uma matriz esparsa
// novamente em uma matriz densa (completa)