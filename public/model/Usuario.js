class Usuario{

    constructor(nome, senha, idade, peso, altura){
        this.nome = nome;
        this.senha = senha;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.treinos = [];
        this.imc = this.calcularIMC();
    }

    getNome(){
        return this.nome;
    }
    getSenha(){
        return this.senha;
    }
    setNome(nome){
        this.nome = nome;
    }
    setSenha(senha){
        this.senha = senha;
    }
    getIdade(){
        return this.idade;
    }
    setIdade(idade){
        this.idade = idade;
    }
    getPeso(){
        return this.peso;
    }
    setPeso(peso){
        this.peso = peso;
    }
    getAltura(){
        return this.altura;
    }
    setAltura(altura){
        this.altura = altura;
    }
    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

}

module.exports = {Usuario}