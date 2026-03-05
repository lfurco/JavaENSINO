// Importa a classe Stack do arquivo stack.mjs
import Stack from "./stack.mjs"

// Cria uma nova instância da pilha
let pilha = new Stack()

// Mostra a pilha inicial (vazia)
console.log(pilha.print())

// Verifica se a pilha está vazia (getter, não usa parênteses)
console.log("Está vazio? ", pilha.isEmpty)


// Adiciona elementos no topo da pilha
pilha.push(35)
pilha.push(77)
pilha.push(19)

// Mostra a pilha após inserções
console.log(pilha.print())

// Verifica novamente se está vazia
console.log("Está vazio? ", pilha.isEmpty)


// Remove o elemento do topo da pilha
let removido = pilha.pop()

// Mostra o elemento removido e o estado atual da pilha
console.log({ removido }, pilha.print())


// Consulta o elemento do topo sem remover
let ultimo = pilha.peek()

// Mostra o último elemento e o estado atual da pilha
console.log({ ultimo }, pilha.print())