import { linker } from "./scripts/linkers.js";
import { cadastrarTreino } from "./scripts/treinoConteudo.js";
import { exibirTreinos } from "./scripts/treinoConteudo.js";
import { exibirDados } from "./scripts/perfil.js";

const CADASTRARBUTTON = document.getElementById("cadastrarButton");
if(CADASTRARBUTTON){
    CADASTRARBUTTON.addEventListener("click", () => linker("./templates/cadastro.html"));
}

const ADICIONARTREINO = document.getElementById("adicionarButton");
if(ADICIONARTREINO){
    ADICIONARTREINO.addEventListener("click", () => cadastrarTreino());
}

const MOSTRARTREINO = document.getElementById("exibirTreino");
if(MOSTRARTREINO){
    MOSTRARTREINO.addEventListener("click", () => {
        const area = document.getElementById("treinoConteudo")
        if(area.innerHTML !== ""){
            area.innerHTML = ""
        }
        else{
            exibirTreinos()
        }
    })
}

const DADOSUSUARIO = document.getElementById("dadosDiv");
if(DADOSUSUARIO){
    exibirDados()
}