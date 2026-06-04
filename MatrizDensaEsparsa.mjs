class MatrizDensaEsparsa {
  constructor(linhas, colunas) {
    this.linhas = linhas;
    this.colunas = colunas;
    this.dados = [];
  }

  inserir(linha, coluna, valor) {
    if (valor !== 0) {
      this.dados.push({ linha, coluna, valor });
    }
  }

  exibir() {
    for (const item of this.dados) {
      console.log(`Linha: ${item.linha}, Coluna: ${item.coluna}, Valor = ${item.valor}`);
    }
  }
}

const matriz = new MatrizDensaEsparsa(4,4)
matriz.inserir(0,0,0)
matriz.inserir(1,0,0)
matriz.inserir(2,0,0)
matriz.inserir(3,0,3)
matriz.inserir(0,1,0)
matriz.inserir(1,1,8)
matriz.inserir(2,1,0)
matriz.inserir(3,1,0)
matriz.inserir(0,2,0)
matriz.inserir(1,2,0)
matriz.inserir(2,2,0)
matriz.inserir(3,2,0)
matriz.inserir(0,3,5)
matriz.inserir(1,3,0)
matriz.inserir(2,3,0)
matriz.inserir(3,3,0)
matriz.exibir()



// MatrizDensaEsparsa seria na base de:

// matriz 4x4:

// [0,0,0,5]
// [0,8,0,0]
// [0,0,0,0]
// [3,0,0,0]

// normalmente uma matriz guarda TODOS os valores,
// inclusive os zeros

// mas a matriz esparsa guarda SOMENTE
// os valores diferentes de 0

// então ela salva apenas:

// linha 3 coluna 0 = 3
// linha 1 coluna 1 = 8
// linha 0 coluna 3 = 5

// os zeros são ignorados:

// if(valor !== 0)

// isso economiza memória,
// principalmente em matrizes muito grandes
// que possuem muitos zeros

// o exibir() percorre apenas os valores salvos,
// mostrando somente os elementos importantes


// Mesma base sobre matriz DANIEL, com      matriz[linha]][coluna]
// Com length e mais