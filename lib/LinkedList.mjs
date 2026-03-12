// Lista Encadeada
// Não precisa de (data) e (next) pois JS já puxa sozinho no construtor
    data
    next

class Node {
    constructor(val){
        this.data = val
        this.next = null
    }
}

export default class LinkedList{
    #head // início da lista
    #tail // fim da lista
    #count // quantidade de nós

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    // Getter que retorna se a lista encadeada está vazia ou nao
    get isEmpty(){
        return this.count === 0 // Pra ver se esta vazia ou não
    }

    // Getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count
    }

    // Método para inserir em qualquer posição
    insert(pos, val){   // Vai trazer a posição e o valor

        // Cria o Nodo para armazenar o valor pretendido
        const inserted = new Node(val)


        // 1* Caso = A lista está vazia
        if(this.isEmpty){   //  Se está vazia
            this.#head = inserted
            this.#tail = inserted
        
        }

        // 2* Caso = Lista não vazia e inserção na Primeira Posição
        else if(pos === 0){  // Se a posição for 0
            inserted.next = this.#head
            this.#head = inserted  // Inverte e deixa a NOVA posicao apontando passada
        }

        // 3* Caso = Inserção no Final da lista
        else if(pos >= this.#count){ // Se a posição for a ULTIMA
            this.#tail.next = inserted
            this.#tail = inserted   // Agora o TAIL é ele, roubou o lugar e ficou em ultimo
        }



        this.#count++   // Aumenta a Contagem, para entender as posiçoes

    }

}