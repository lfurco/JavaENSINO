// Lista de Compras

import Deque from "./lib/deque.mjs"

let listaCompras = new Deque()


console.log(listaCompras.print())
console.log("A Lista está vazia?\n" + listaCompras.isEmpty) // o + é igual , porém mais bonito


// Produtos Alimentícios
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Sal")

// Produtos Higiene/Limpeza
listaCompras.insertBack("Sabão em Pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água Sanitária")
console.log(listaCompras.print())

listaCompras.insertFront("Café")
listaCompras.insertFront("Açúcar")
console.log(listaCompras.print())

listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador")
console.log(listaCompras.print())


// Retirar o Açucar
let removido = listaCompras.removeFront()
console.log({removido})
console.log(listaCompras.print())

let frente = listaCompras.peekFront() 
let ultimo = listaCompras.peekBack()

console.log({frente})
console.log({ultimo})