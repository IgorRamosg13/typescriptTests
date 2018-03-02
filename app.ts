class Carro{
    private modelo: string
    private numeroDePortas: number
    private velocidade: number=0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void{
        this.velocidade = this.velocidade +10
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number{
        return this.velocidade
    }
} 

class Concessionaria {

    private endereco: string
    private listaDeCarros: Array<Carro> // Any = Variável pode recever qualquer tipo de dado.

    constructor (endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    } 
}

class Pessoa{

    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNomer(): string{
        return this.nome
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void{
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro{
        return this.carro
    }

}

/* --- criar carros --- */
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC] // Ou Carro []

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro ---*/
let cliente = new Pessoa('João','veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if (carro['modelo']  == cliente.dizerCarroPreferido()){

        //comprar o carro
        cliente.comprarCarro(carro)
    }

})

console.log(cliente.dizerCarroQueTem())


/*
let pessoa = new Pessoa('José','Veloster')
console.log(pessoa.dizerCarroPreferido())
*/

/*
let concessionaria = new Concessionaria('Avenida Paulista')
console.log(concessionaria)
*/

/*
//Instanciando um Carro passando o modelo como parâmetro
let carroA = new Carro('Veloster', 3)

//Apresentando objeto instanciado
console.log(carroA)

//Chamando Método
carroA.acelerar()
console.log(carroA)
*/