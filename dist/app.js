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
//Instanciando um Carro passando o modelo como parâmetro
var carroA = new Carro('Veloster', 3);
//Apresentando objeto instanciado
console.log(carroA);
//Chamando Método
carroA.acelerar();
console.log(carroA);
