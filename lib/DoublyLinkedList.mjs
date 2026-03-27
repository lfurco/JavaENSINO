class Node {
    constructor(val){
        this.prev = null    // ponteiro para o nó anterior
        this.data = val     // valor armazenado no nó
        this.next = null    // ponteiro para o próximo nó


    }
}

export default class DoublyLinkedList{

    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Verifica se a lista está vazia
    get isEmpty(){
        return this.#count === 0    // se for = 0  ->  retorna true
    }

    get count(){
        return this.#count
    }

    // Método Privado que encontra um nodo por sua posição
    #findNode(pos){ 
        let node
        // Se a posição estiver na PRIMEIRA metade da lista (o nodo se encontra lá)
        if(pos < this.#count / 2){      // se for menor q a metade da lista
            node = this.#head
            // percorre do início até a posição desejada
            for(let i = 0; i < pos; i++){
                node = node.next    // isso faz com que a gnt pega uma atras da posicao
            }
            // Se estiver na SEGUNDA metade da lista (o nodo)
        }else{
            node = this.#tail
            for(let i = (this.#count - 1); i > pos; i--){   //
                node = node.prev    // Colocou a posicao la dentro
            }
        }
        return node;
    }

    // Método para inserir em qualquer posição
    insert(pos, val){
        let inserted = new Node(val)


        // 1º CASO: lista vazia
        if(this.isEmpty){   // Se lista está vazia
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º CASO: inserção no INÍCIO (head)
        else if(pos === 0){ 
            inserted.next = this.#head          // novo aponta para o antigo head
            this.#head.prev = this.inserted     // antigo head aponta para o novo
            this.#head = inserted               // atualiza o head
        }

        // 3º CASO: inserção no FINAL
        else if(pos >= this.#count){     // Coloca em ultimo (nao no #tail, mas sim no ULTIMO)
            inserted.prev = this.#tail          // novo aponta para o antigo tail
            this.#tail.next = this.inserted     // antigo tail aponta para o novo
            this.#tail = inserted               // atualiza o tail
        }

        // 4º CASO: inserção no MEIO
        else{
            let nodePos = this.#findNode(pos)   // Ele procura a posicao q deseja (find = procura (pos) = posicao)
            // A partir do nodePos, acha os q estão atras e na frente
            let before = nodePos.prev   // Só pra saber qual é o anterior dele, pra inserir o outro depois

            before.next = inserted  // Insere no meio de ambos e aponta pra ele
            inserted.prev = before   // O inserted recebe o anterior
            inserted.next = nodePos // O inserted tambem recebe o proximo
            nodePos.prev = inserted // O proixmo começa apontar pro inserted
        }


        this.#count++   // Toda vez q inserir (inserted), ele conta e deixa de ser vazio    
    }


    // Método de atalho para inserção na primeira posição
    insertHead(val){
        this.insert(0, val)
            
    }

    // Método de atalho para inserção na última posição
    insertTail(val){
        this.insert(this.#count, val)
    }

    // Método para remover um nodo da lista
    remove(pos){
        // 1* Caso = Lista vazia ou Posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        let removed     // Para depois desligar da lista

        // 2* Caso = Remoção do primeiro nodo
        if(pos === 0){
            removed = this.#head       // Está armazenado no removed
            this.#head = removed.next   // o Head vira o removed

            if(this.#head){     // se ele existir (ou seja, vai)
                this.#head.prev = null
            }

            // Se ele fosse o último
            if(this.#count === 1){
                this.#tail = null
            }
        }


        // 3* Caso = remoção do último nodo (tail)
        else if(pos === this.#count - 1){
            removed = this.#tail
            this.#tail = removed.prev   // Passa o tail pro anterior

            if(this.#tail){
                this.#tail.next = null  // Remove o proximo (que seria o tail antigo, ultimo)
            }

            if(this.#count === 1){
                this.#head = null;
            }

        }

        // 4* Caso = Remoção em posição intermediária 
        else{
            removed = this.#findNode(pos)   // Para achar quem quer remover
            let before = removed.prev   // Acha o anterior do n*
            let after = removed.next    // Acha o depois do n*

            // Um aponta pro outro e removem o do meio deles
            before.next = after
            after.prev = before


        }
        
        
        
        this.#count--

        return removed.data
    }

    // Método de atalho para remover o PRIMEIRO elemento (head)
    removeHead(){
        return this.remove(0)
    }


    // Método de atalho para remover o ÚLTIMO elemento (tail)
    removeTail(){
        return this.remove(this.#count - 1)     // remove a última posição
    }

    // Método para visualizar (sem remover) um elemento pela posição
    peek(pos){
        // lista vazia OU posição inválida
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined;
        }
        // encontra o nó na posição desejada
        const node = this.#findNode(pos)
        // retorna apenas o valor armazenado no nó
        return node.data

    }

    // Método para visualizar o PRIMEIRO elemento
    peekHead(pos){
        return this.peek(0) // pega o valor do início da lista
    }

    // Método para visualizar o ÚLTIMO elemento
    peekTail(pos){
        return this.peek(this.#count - 1)   // pega o valor do final da lista
    }

}