export default class Stack {
    #data   // Array privado que armazena os elementos da pilha

    constructor() {
        this.#data = []     // Inicializa a pilha vazia
    }

    // Método para adicionar um elemento no topo da pilha (LIFO)
    push(val) {
        this.#data.push(val)
    }

    // Método para remover e retornar o elemento do topo da pilha
    pop() {
        return this.#data.pop()   // pop() não recebe parâmetro
    }

    // Retorna o elemento do topo sem removê-lo
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Verifica se a pilha está vazia (retorna true ou false)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Retorna uma representação em string da pilha
    print() {
        return JSON.stringify(this.#data)
    }
}