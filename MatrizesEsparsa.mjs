// Lição Alexandre - Matriz Esparsa sobre a Netflix
// NÃO esquecer de colocar //comentarios das respostas no final da lição


// linha = usuários      ||      coluna = filmes

function multiplicarRecomendacao(matrizEsparsa, vetorDenso){

    // cria o vetor de resultado com 4 usuários
    const resultado = new Array(4).fill(0)


    // percorre SOMENTE os elementos existentes
    // da matriz esparsa
    for(const { linha, coluna, valor } of matrizEsparsa){

        // multiplica a nota do usuário
        // pelo peso do filme correspondente
        resultado[linha] += valor * vetorDenso[coluna]
    }

    return resultado
}




// --- DADOS PARA TESTE ---

const avaliacoes = [

    // Usuário 0 -> Filme 1 (Nota 5)
    { linha: 0, coluna: 1, valor: 5 },

    // Usuário 1 -> Filme 3 (Nota 2)
    { linha: 1, coluna: 3, valor: 2 },

    // Usuário 3 -> Filme 0 (Nota 4)
    { linha: 3, coluna: 0, valor: 4 }

]


// pesos dos filmes
const pesos = [10, 20, 30, 40, 50]


console.log("Seu resultado:", multiplicarRecomendacao(avaliacoes, pesos))





// -------------------------------------------------------------------
// RESPOSTAS TEÓRICAS
// -------------------------------------------------------------------



// 1)
// MATRIZ DENSA

// usuários = 1.000.000
// filmes = 10.000

// total de posições:

// 1.000.000 x 10.000 = 10.000.000.000

// cada número ocupa 4 bytes

// 10.000.000.000 x 4 = 40.000.000.000 bytes


// convertendo para GB:

// 40.000.000.000 / 1024 / 1024 / 1024

// resultado ≈ 37,25 GB


// a matriz densa precisaria de aproximadamente:
// 37,25 GB





// 2)
// MATRIZ ESPARSA COO

// média de filmes assistidos por usuário = 100


// total de avaliações:

// 1.000.000 x 100 = 100.000.000


// cada tripla possui:

// {linha, coluna, valor}


// ou seja:

// 3 números de 4 bytes


// 3 x 4 = 12 bytes por tripla


// total:

// 100.000.000 x 12 = 1.200.000.000 bytes


// convertendo para GB:

// 1.200.000.000 / 1024 / 1024 / 1024


// resultado ≈ 1,12 GB


// a matriz esparsa precisaria de aproximadamente:
// 1,12 GB





// 3)
// ECONOMIA DE MEMÓRIA


// fórmula:

// ((memória densa - memória esparsa)
// / memória densa) x 100


// ((37,25 - 1,12) / 37,25) x 100


// resultado ≈ 96,99%


// economia aproximada:
// 97% de memória






// -------------------------------------------------------------------
// JUSTIFICATIVA
// -------------------------------------------------------------------


// este algoritmo é mais rápido porque ele percorre
// somente os elementos que realmente existem
// na matriz esparsa


// uma matriz densa percorreria linha por linha
// e coluna por coluna,
// incluindo milhões de posições com valor 0


// já a matriz esparsa ignora os zeros,
// processando apenas os dados importantes


// isso reduz:

// - uso de memória
// - quantidade de operações
// - tempo de processamento


// tornando o algoritmo muito mais eficiente
// para sistemas grandes como a Netflix






// -------------------------------------------------------------------
// EXPLICAÇÃO DO CÓDIGO
// -------------------------------------------------------------------


// multiplicarRecomendacao seria na base de:


// usuário 0 assistiu filme 1 com nota 5


// peso do filme 1 = 20


// então:

// 5 x 20 = 100


// resultado[0] = 100





// usuário 1 assistiu filme 3 com nota 2


// peso do filme 3 = 40


// então:

// 2 x 40 = 80


// resultado[1] = 80





// usuário 3 assistiu filme 0 com nota 4


// peso do filme 0 = 10


// então:

// 4 x 10 = 40


// resultado[3] = 40





// resultado final:

// [100, 80, 0, 40]


// cada posição do vetor representa
// o score de recomendação de um usuário