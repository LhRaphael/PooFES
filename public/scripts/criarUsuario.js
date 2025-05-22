const { Usuario } = require("../model/Usuario.js")
const { KEY } = require("./global.js")
const { localStorage } = require('./global.js')

function criarUsuario(nomeUser, senha, idade, peso, altura){
    const USUARIO = new Usuario(nomeUser, senha, idade, peso, altura);
    const USUARIOS = getLocalStorage();
    USUARIOS.push(USUARIO)
    atualizarUsuarios(USUARIOS)
    console.log(USUARIOS)
    
}

function validarUsuario(nomeUser, senha){
    const USUARIOS = getLocalStorage();
    const usuario = USUARIOS.find(usuario => usuario.nome === nomeUser && usuario.senha === senha);
    return usuario;
}

function existeUsuario(nome){
    const USUARIOS = getLocalStorage();
    const usuario = USUARIOS.find(usuario => usuario.nome === nome);
    return usuario
    
}

function alterarSenha(nomeUser, senha){
    const USUARIOS = getLocalStorage();
    const usuario = USUARIOS.find(usuario => usuario.nome === nomeUser);
    if(usuario){
        usuario.senha = senha;
        localStorage.setItem(KEY,JSON.stringify(USUARIOS));
    }
    console.log(USUARIOS)
}

function atualizarUsuarios(usuarios){
    localStorage.setItem(KEY,JSON.stringify(usuarios))
    console.log(JSON.parse(localStorage.getItem(KEY)))
}

function getLocalStorage(){
    let local = JSON.parse(localStorage.getItem(KEY)) || []
    return local
}


module.exports = {criarUsuario, validarUsuario, existeUsuario, alterarSenha, atualizarUsuarios, getLocalStorage}
