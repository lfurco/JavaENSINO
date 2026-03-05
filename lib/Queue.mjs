export default class Queue{

    #data //Vetor print

    constructor(){
        this.#data = []
    }

    //método de inserção na fila
    enqueue(val){
        this.#data.push(val)    // enqueue = insere
    }

    //método de remoção na fila
    dequeue(){
        return this.#data.shift()   // dequeue = retira
    }

    //método para consultar o inicio da fila sem remover o elemento
    peek(){
        return this.#data[0]  // peek = olha, não faz nada
    } 

    get isEmpty(){
        return this.#data.length === 0
    }

    //método para imprimir a fila(efeitos de depuração)
    print(){
        let output = '[ '       // Abrir colchete
        for(let i=0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "         // Para organizar, colocar virgula
            } 
            output += `(${i + 1}): ${this.#data[i]}`
        }
        return output + " ]"        // Fechar colchete
    }

}