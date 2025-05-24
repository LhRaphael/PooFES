
async function usuarioAtual(){
    const url = 'http://localhost:3000/coletarUsuario';  // URL do servidor

    try {
      const response = await fetch(url);
      const data = await response.json();  // Obtém a resposta como texto
      return data;  // Retorna o texto recebido
    } catch (error) {
      console.error('Erro ao obter o dado do servidor:', error);
      throw error;  // Lança o erro caso algo dê errado
    }
}

export async function exibirDados(){
    const usuario = await usuarioAtual();
    let nome = document.getElementById("nomeUsuario");
    let idade = document.getElementById("idadeUsuario");
    let peso = document.getElementById("pesoUsuario");
    let altura = document.getElementById("alturaUsuario");
    let imc = document.getElementById("imcUsuario");

    nome.innerHTML = usuario.nome;
    idade.innerHTML = usuario.idade;
    peso.innerHTML = usuario.peso;
    altura.innerHTML = usuario.altura;
    imc.innerHTML = usuario.imc;
}