import Queue from "./lib/Queue.mjs"

let fila = new Queue()
console.log(fila.print())
console.log("Está vazia? :", fila.isEmpty)   // Confirmação se está vazia

//insercoes de fila
fila.enqueue("Alexandre")
fila.enqueue("João")
fila.enqueue("Maria")
fila.enqueue("Jose")
fila.enqueue("Lucas")
fila.enqueue("Bianca")

console.log(fila.print())

// quem sera atendido
let proximo = fila.peek()  // Só pra saber quem será o próximo a ser chamado
console.log({proximo})


//remoção da fila
let atendido = fila.dequeue()  // Se foi atendido = exclui da lista
console.log({atendido})


console.log(fila.print())   // Segue a lista com os que NAO foram atendidos

    