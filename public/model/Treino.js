export class Treino{
    categorias = ["Peito", "Costas", "Perna", "Ombro", "Braço", "Abdômen", "Cardio"];

    constructor(nome, data, series, repeticoes, nota, categoria){
        this.nome = nome;
        this.data = data;
        this.categoria = categoria;
        this.series = series;
        this.repeticoes = repeticoes;
        this.nota = nota;
    }

    getNome(){
        return this.nome;
    }
    getData(){
        return this.data;
    }
    getSeries(){
        return this.series;
    }
    getRepeticoes(){
        return this.repeticoes;
    }
    getNota(){
        return this.nota;
    }

    setNome(nome){
        this.nome = nome;
    }
    setData(data){
        this.data = data;
    }
    setSeries(series){
        this.series = series;
    }
    setRepeticoes(repeticoes){
        this.repeticoes = repeticoes;
    }
    setNota(nota){
        this.nota = nota;
    }
}