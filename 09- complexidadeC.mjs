function factorialIterativo(n){
    const inicio = performance.now()

    let resultado = 1
    for (let i = 2; i <= n; i++){       // Ta fazendo 5x4x3x2
        resultado *= i      // Multiplicacao do sistema, até resultar no desejado
    }

    // Pra saber o tempo gasto
    const fim = performance.now()
    const tempoGasto = fim - inicio

    // Para chegar nos MegaBytes
    const memorialPilhaMB = (n * 4) / (1024 * 1024)


    let memoriaTotalMB = 'N/A' 
    if(typeof process !== 'undefined' && process.memoryUsage()){
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024 
    }

    console.clear();
    console.log("--- Análise de Complexidade Iterativa O(n!)---")
    console.log("Tamanho da entrada: ", n)
    console.log("Resultado da Fatorial: ", resultado)
    console.log("Tempo de Execução: ", tempoGasto.toFixed(6), "ms")
    console.log("Memória estimada da pilha de entradas: ", memorialPilhaMB.toFixed(6), "Mb")
    console.log("Memória total usada pelo processo: ",
        typeof memoriaTotalMB === 'number'
        ? memoriaTotalMB.toFixed(6) + "Mb"
        : memoriaTotalMB
    );
   
}

// Chamar o numero desejado e TESTAR
const numero = 5
factorialIterativo(numero)




//  factorialIterativo seria na base de:
//  5!  (é uma fatorial comum, 5x4x3x2)

//  resultado = 1

//  i = 2
//  resultado = 1 x 2 = 2

//  i = 3
//  resultado = 2 x 3 = 6

//  i = 4
//  resultado = 6 x 4 = 24

//  i = 5
//  resultado = 24 x 5 = 120

//  ele vai multiplicando o resultado anterior
//  pelo próximo número da sequência,
//  até chegar no valor final do fatorial

//  diferente da recursão,
//  aqui ele faz tudo em um único FOR,
//  sem criar várias chamadas na memória

//  por isso ele costuma ser mais leve
//  e mais rápido que o recursivo