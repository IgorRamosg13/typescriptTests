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
    private listaDeCarros: any // Any = Variável pode recever qualquer tipo de dado.

    constructor (endereco: string){
        this.endereco = endereco
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): any{
        return this.listaDeCarros
    } 
}

class Pessoa{

    private nome: string
    private carroPreferido: string
    private carro: any

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

    public comprarCarro(carro: any): void{
        this.carro = carro
    }

    public dizerCarroQueTem(): any{
        return this.carro
    }

}

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