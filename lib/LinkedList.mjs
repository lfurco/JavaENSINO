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
        else if(pos >=   this.#count){ // Se a posição for a ULTIMA
            this.#tail.next = inserted
            this.#tail = inserted   // Agora o TAIL é ele, roubou o lugar e ficou em ultimo
        }

        // 4* Caso = Posição intermediária  ||  Caso não é nenhuma alternativa acima
        else{

            let before = this.#head
            for(let i = 1; i < pos; i++){    // Para antes da ultima posicao
                before = before.next
            }
            // Para visualizar quem vai ser DEPOIS da lista
            let after = before.next

            inserted.next = after   //  Aponta pro proximo e pega o lugar
            before.next = inserted
        }


        this.#count++   // Aumenta a Contagem, para entender as posiçoes

    }

    // Metodo para insercao na primeira posicao (atalho)
    insertHead(val){
        this.insert(0, val)
    }

    // Metodo para insercao na utltima posicao (atalho)
    insertTail(val){
        this.insert(this.#count, val)
    }

    // Metodo para remocao de um nodo na lista
    remove(pos){
        // 1* Caso = a lista vazia ou a posicao informada é menor q zero ou ??
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){ //      "||"" = ou
            return undefined
        }

        let remove 

        // 2* Caso = remoção do inicio da lista
        if(pos === 0){
            removed = this.#head    // pq head é o inicio
            this.#head = this.#head.next    // Vai passar a ser o next e vai remover ele


            if(this.#count === 1){
                this.#tail = null

            }
        }


        // 3* Caso = Remoção de nodo intermediario ou final
        else{
            let before  = this.#head

            for(let i = 1; i < pos; i++){    // Pra saber quem é o anterior
                before = before.next
            }

            removed = before.next

            let after =  removed.next   // Depois do removido
            before .next = after    //   Apontado pro Depois

            // Atualiza o tail em caso de remoção 
            if(pos === this.#count - 1){    // -1 pq pode dar maior que a posição
                this.#tail = before
            }
        }


        this.#count--
    
        return removed.data
    }
}