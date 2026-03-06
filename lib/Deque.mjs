export default class Deque {
    #data

    constructor(){
        this.#data = []
    }

    // Método para insercao no inicio da estrutura
    insertFront(val){
        this.#data.unshift(val)
    }

    // Método para insercao no final da estrutura
    insertBack(val){
        this.#data.push(val)
    }

    // Método para remocao do inicio da estrutura
    removeFront(){  // sem parametro pq é remocao
        return this.#data.shift()   // shift remove posicao 0
    }

    // Método para remocao do final da estrutura
    removeBack(){
        return this.#data.pop()
    }


    // Método para consultar o inicio da estrutura
    peekFront(){
        return this.#data[0]    // para olhar a primeira posição
    }

    //Método para consultar o final da estrutura
    peekBack(){
        return this.#data[this.#data.length - 1]    // .length para pegar o ultimo e olhar
    }

    get isEmpty(){  // ? = se for vdd, faz algo, se nao, faz outra || ternário
        return this.#data.length === 0 ? "Sim, está vazia!" :  "Não, falso!"
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