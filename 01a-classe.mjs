class FormaGeometrica {

    #base       // propriedade privada
    #altura
    #tipo

    // Getters → para ler os valores privados
    get base() { return this.#base }
    get altura() { return this.#altura }
    get tipo() { return this.#tipo }

    // Setters → para definir os valores com validação
    set base(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error("ERRO: a base precisa ser numérica e maior que zero.")
        }
        this.#base = valor
    }

    set altura(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error("ERRO: a altura precisa ser numérica e maior que zero.")
        }
        this.#altura = valor
    }

    set tipo(valor) {
        if (!["R", "T", "E"].includes(valor.toUpperCase())) {
            throw new Error("ERRO: o tipo precisa ser R, T ou E.")
        }
        this.#tipo = valor
    }

    // Calcula a área dependendo do tipo
    calcArea() {
        switch (this.#tipo) {
            case "R": // Retângulo
                return this.#base * this.#altura
            case "T": // Triângulo
                return this.#base * this.#altura / 2
            case "E": // Elipse
                return (this.#base / 2) * (this.#altura / 2) * Math.PI
        }
    }
}

// Exemplo 1: elipse
let forma1 = new FormaGeometrica()
forma1.base = 7
forma1.altura = 22.5
forma1.tipo = "E"
console.log("Area da Forma1: ", forma1.calcArea())

// Exemplo 2: retângulo
let forma2 = new FormaGeometrica()
forma2.base = 7
forma2.altura = 22.5
forma2.tipo = "R"
console.log("Area da Forma2: ", forma2.calcArea())