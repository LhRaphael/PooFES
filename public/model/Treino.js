export class Treino{
    constructor(nome, data, tipo, duracao, intensidade){
        this.nome = nome;
        this.data = data;
        this.tipo = tipo;
        this.duracao = duracao;
        this.intensidade = intensidade;
    }

    getNome(){
        return this.nome;
    }
    getData(){
        return this.data;
    }
    getTipo(){
        return this.tipo;
    }
    getDuracao(){
        return this.duracao;
    }
    getIntensidade(){
        return this.intensidade;
    }

    setNome(nome){
        this.nome = nome;
    }
    setData(data){
        this.data = data;
    }
    setTipo(tipo){
        this.tipo = tipo;
    }
    setDuracao(duracao){
        this.duracao = duracao;
    }
    setIntensidade(intensidade){
        this.intensidade = intensidade;
    }

}