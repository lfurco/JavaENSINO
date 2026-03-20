import LinkedList from "./lib/LinkedList.mjs";

const lista = new LinkedList()

console.log("A lista está vazia? \n", lista.isEmpty ? "Sim, está vazia" : "Não, não está vazia")


lista.insert(0, "Fusca")
lista.insert(0, "Corcel")

console.log(lista.print())

// Insere na lista
lista.insert(2, "Opala")
lista.insert(2, "Chevette")
lista.insert(2, "Maverick")
console.log(lista.print())

// Insere em 3
lista.insert(3, "Brasilia")
console.log(lista.print())

// Insere em 0 e em ultimo
lista.insertHead("Belina")
lista.insertTail("GoLLL")
console.log(lista.print())

// Remove a pos 0
let removido = lista.remove(0)
console.log({removido})     // Fala quem foi removido
console.log(lista.print())

// Usos de IndexOF
let idxFusca = lista.indexOf("Fusca")
let idxOpala = lista.indexOf("Opala")
let idxGoLLL = lista.indexOf("GoLLL")
let idxNE = lista.indexOf("NE")
console.log({idxFusca, idxGoLLL, idxOpala, idxNE})

// Somente olhando
let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
let pos5 = lista.peek(5)
console.log({pos0, pos1, pos5})