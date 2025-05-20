import { linker } from "./scripts/linkers.js";

const CADASTRARBUTTON = document.getElementById("cadastrarButton");
if(CADASTRARBUTTON){
    CADASTRARBUTTON.addEventListener("click", () => linker("./templates/cadastro.html"));
}
