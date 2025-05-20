import { Treino } from '../model/Treino.js'

const KEY = 'chave'
let USUARIOS = JSON.parse(localStorage.getItem(KEY)) || [];

// TODO: Implementar a função para exibir os treinos cadastrados
export function exibirTreinos(){


}

// TODO: Implementar a função para cadastrar um treino
export function cadastrarTreino(){
    let area = document.getElementById("treinosDiv");
    area.innerHTML = ""; // Limpa a área de treinos para evitar duplicação
    let treino = new Treino();
    let secao = document.createElement("section");
    
    let nomeInput = document.createElement("input");
    nomeInput.setAttribute("type", "text");
    nomeInput.setAttribute("placeholder", "Nome do treino");
    
    let seriesInput = document.createElement("input");
    seriesInput.setAttribute("type", "number");
    seriesInput.setAttribute("placeholder", "Total de séries");
    
    let repeticoesInput = document.createElement("input");
    repeticoesInput.setAttribute("type", "number");
    repeticoesInput.setAttribute("placeholder", "Total de repetições");

    let categorias = document.createElement('select');
    for(let i = 0; i < treino.categorias.length; i++){
        let option = document.createElement('option');
        option.value = treino.categorias[i];
        option.text = treino.categorias[i];
        categorias.appendChild(option);
    }

    secao.appendChild(nomeInput);
    secao.appendChild(seriesInput);
    secao.appendChild(repeticoesInput);
    secao.appendChild(categorias);
    area.appendChild(secao);

}

