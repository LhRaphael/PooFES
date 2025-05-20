import { linker } from "./scripts/linkers.js";
import { cadastrarTreino } from "./scripts/treinoConteudo.js";

const CADASTRARBUTTON = document.getElementById("cadastrarButton");
if(CADASTRARBUTTON){
    CADASTRARBUTTON.addEventListener("click", () => linker("./templates/cadastro.html"));
}

const ADICIONARTREINO = document.getElementById("adicionarButton");
if(ADICIONARTREINO){
    ADICIONARTREINO.addEventListener("click", () => cadastrarTreino());
}