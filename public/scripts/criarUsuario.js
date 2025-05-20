import { Usuario } from "../model/Usuario.js"
import { Treino } from "../model/Treino.js"
import { KEY } from "global.js"

export function criarUsuario(nomeUser, senha){
    const USUARIO = new Usuario(nomeUser, senha, idade, peso, altura);
    const USUARIOS = JSON.parse(localStorage.getItem(KEY)) || [];
    USUARIOS.push(USUARIO)
    localStorage.setItem(KEY,JSON.stringify(USUARIOS));
    
}


