"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNomer = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* --- criar carros --- */
var carroA = new Carro('dodge journey', 4);
var carroB = new Carro('veloster', 3);
var carroC = new Carro('cerato', 4);
/* --- montar a lista de carros da concessionaria --- */
var listaDeCarros = [carroA, carroB, carroC]; // Ou Carro []
var concessionaria = new Concessionaria('Av Paulista', listaDeCarros);
/* --- exibir lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())
/* --- comprar o carro ---*/
var cliente = new Pessoa('João', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
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
