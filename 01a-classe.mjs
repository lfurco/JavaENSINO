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

let forma1 = new FormaGeometrica()
let forma2 = new FormaGeometrica()

forma1.altura = 7
forma1.base = 12
forma1.tipo = "T"

console.log(`Área de um Triângulo de 7x12: ${forma1.calcArea()}`)

forma2.base= 7.5,
forma2.altura= 12.3,
forma2.tipo= "E"


console.log(`Área de uma Elipse de 7.5x12.3: ${forma2.calcArea()}`)