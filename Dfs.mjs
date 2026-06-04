import Stack from "./lib/Stack.mjs";

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
};

// Implementação de busca em profundidade (DFS)

function dfs(grafo, inicio){

    // O Set guarda os nós já visitados
    // Assim evitamos visitar o mesmo nó várias vezes
    const visitados = new Set();

    // Cria uma nova pilha
    const pilha = new Stack();

    // Coloca o nó inicial no topo da pilha
    pilha.push(inicio);

    // Executa enquanto a pilha NÃO estiver vazia
    while(!pilha.isEmpty){

        // Remove o elemento que está no topo da pilha
        const no = pilha.pop();

        // Se ainda não foi visitado
        if(!visitados.has(no)){

            // Mostra o nó atual
            console.log(no);

            // Marca como visitado
            visitados.add(no);

            // Pega a lista de vizinhos do nó atual
            const vizinhos = grafo[no];

            // Percorre os vizinhos de trás para frente
            // Isso faz com que o primeiro vizinho fique mais próximo do topo
            // e seja visitado antes
            for(let i = vizinhos.length - 1; i >= 0; i--){

                // Se o vizinho ainda não foi visitado
                if(!visitados.has(vizinhos[i])){

                    // Coloca o vizinho na pilha
                    // Como é uma pilha (LIFO), ele será explorado em breve
                    pilha.push(vizinhos[i]);
                }
            }
        }
    }
}

dfs(grafo, "A");