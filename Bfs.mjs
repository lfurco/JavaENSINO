import Queue from "./lib/Queue.mjs"

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
}

// Implementação de busca em largura (BFS)

function bfs(grafo, inicio){

    // O Set é uma estrutura de dados nativa do JS (parecida com Array)
    // Ele não permite valores repetidos
    // Também é muito rápido para verificar se um valor já existe
    const visitados = new Set();

    // Cria uma nova fila
    const fila = new Queue();

    // Coloca o nó inicial na fila
    fila.enqueue(inicio)

    // Executa enquanto a fila NÃO estiver vazia
    while(!fila.isEmpty){

        // Remove o primeiro elemento da fila (o mais antigo)
        const no = fila.dequeue()

        // Se esse nó ainda não foi visitado
        if(!visitados.has(no)){

            // Mostra o nó atual
            console.log(no)

            // Marca como visitado para não processar novamente
            visitados.add(no)

            // Percorre todos os vizinhos do nó atual
            for(const vizinho of grafo[no]){

                // Se o vizinho ainda não foi visitado
                if(!visitados.has(vizinho)){

                    // Coloca o vizinho no final da fila
                    // Ele será processado futuramente
                    fila.enqueue(vizinho)
                }
            }
        }
    }
}

bfs(grafo, "A")