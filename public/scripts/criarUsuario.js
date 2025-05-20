const { Usuario } = require("../model/Usuario.js")
const { KEY } = require("global.js")

function criarUsuario(nomeUser, senha, idade, peso, altura){
    const USUARIO = new Usuario(nomeUser, senha, idade, peso, altura);
    const USUARIOS = JSON.parse(localStorage.getItem(KEY)) || [];
    USUARIOS.push(USUARIO)
    localStorage.setItem(KEY,JSON.stringify(USUARIOS));
    console.log(USUARIOS)
    
}
module.exports = {criarUsuario}

