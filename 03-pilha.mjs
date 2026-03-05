import Stack from "./lib/stack.mjs";

let frase = "Socorra-me, subi o onibus em Marrocos"

let pilha = new Stack()

// charAt faz um .push de CADA posicao do vetor, cada LETRA
for (let i = 0; i < frase.length; i++){
    pilha.push(frase.charAt(i))
}

// Puxa CADA posicao detalhada do "let frase"
console.log(pilha.print())


// let para reverter tudo
let reverso = ""      // sem nd justamente para colocar dentro

while (! pilha.isEmpty){ // enquanto pilha estiver vazia
    reverso += pilha.pop()
}

console.log({reverso})