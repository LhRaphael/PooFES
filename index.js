const { criarUsuario } =  require('./public/scripts/criarUsuario.js');
const { validarUsuario } = require('./public/scripts/criarUsuario.js');
const { existeUsuario } = require('./public/scripts/criarUsuario.js');
const { alterarSenha } = require('./public/scripts/criarUsuario.js');

const express = require('express');
const path = require('path');  // Importa o módulo path
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.urlencoded({ extended: true })); // para interpretar dados de formulários


app.post('/tratamento', (req, res) => {
  const nome = req.body.nomeInput;
  const senha = req.body.senhaInput;

  if (validarUsuario(nome, senha)) {
    res.redirect('/templates/base.html');
  } else {
    res.send(`
      <script>
        alert('Usuário ou senha inválidos!');
        window.location.href = '/';
      </script>
    `);
  }
});


app.post('/mudarSenha', (req, res)=> {
  const usuario = req.body.nomeSenhaInput;
  const senha = req.body.mudarSenhaInput;
  console.log(usuario, senha);

 if(existeUsuario(usuario)){
    alterarSenha(usuario, senha);
    res.send(
      `<script>
        alert("Senha alterada com sucesso.")
        window.location.href = '/';
      </script>`);
 }
 else{
    res.send(
      `<script>
        alert("Usuário inexistente.")
        window.location.href = '/';
      </script>`);
 }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


app.post('/cadastrarUsuario', (req, res)=>{
  const nome = req.body.nomeInput
  const idade = req.body.idadeInput
  const peso = req.body.pesoInput
  const altura = req.body.alturaInput
  const senha = req.body.senhaInput
  criarUsuario(nome, senha, idade, peso, altura)
  res.redirect('/')
})