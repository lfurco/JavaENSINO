import DoublyLinkedList from "./lib/DoublyLinkedList.mjs";

const lista = new DoublyLinkedList()

// Lista vazia
console.log("Lista está vazia? ", lista.isEmpty ? "Está vazia?" : "Não")
console.log(lista.print())

// Lista com Fiat
lista.insert(0, "Fiat 147")
console.log("Lista está vazia? ", lista.isEmpty ? "Está vazia?" : "Não")
console.log(lista.print())

// Lista com Fiat e Opala
lista.insert(0, "Opala")
console.log(lista.print())

// Inserir em ultimo
lista.insertTail("Chevette")
console.log(lista.print())

// Inserir mais um na lista
lista.insert(1, "Corcel")
console.log(lista.print())

// Para remover o    (0) = Opala
let removido = lista.remove(0) 
console.log({removido}, lista.print())

// Remover o Chevette
removido = lista.remove(1)
console.log({removido}, lista.print())

// Verificar as posições 0 e 1
let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
console.log({pos0, pos1})

// Para achar o Chevette
let posChevette = lista.indexOf("Chevette")
console.log({posChevette})

