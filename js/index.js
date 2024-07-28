// O intuito deste código é criar um banco de dados temporario para login e senha de usuarios
//O código não tem intuito de ser usado para login e senha para casos reais apenas foi criado para testes



let bd = [] //array bd(banco de dados) para por os usuarios e senhas nele
let trigger = true //variavel trigger para ativação e desligamento do loop


//loop para abrir um prompt pergunta se deseja fazer login ou se logar
while (trigger) {
  // variavel chamando o prompt
  const chamado = Number(
    //usando `` para poder pular linha
    prompt(`digite 
          1- para criar um usuario
          2- para fazer login
  `)
  )

  
//se for escrito 1 no prompt, abrir dois prompts, um para criar seu usuario e outra para criar sua senha
  if (chamado === 1) {
    let user = prompt("digite seu novo usuario") //varialve para chamar o prompt de criar usuario

    let senha = prompt("digite sua senha") //varialve para chamar o prompt de criar senha

    //adiciona a o usuario e a senha na array do banco de dados
    //deixando o primeiro login nas casas 0(user) e 1(senha), e assim continuamente 2 e 3, 4 e 5
    //podendo a quantidade de logins ser aumentado apenas repetindo o código
    bd.push(user, senha) //adiciona o user e a senha na array

    //alerta avisando que o usuario foi criado
    alert("usuario criado com sucesso")
  }





  //se for escrito no prompt 2, chamar dois prompts, um de colocar o seu user e outro de botar sua senha
  if (chamado === 2) {
   
    //prompt pedindo para colocar seu usuario
    let user = prompt("digite seu usuario")
    
    //prompt pedindo para colocar sua senha
    let senha = prompt("digite sua senha")
    
    

    //checa se as condições de login estão corretas
    //verificando se as senhas e logins estão em seus corretos lugares
    if (
      (user === bd[0] && senha === bd[1]) ||
      (user === bd[2] && senha === bd[3]) ||
      (user === bd[4] && senha === bd[5])
    ) {
    
    //desativa o loop
      trigger = false
    
      //sobe alerta falando que o login foi concluido
      alert(
        "login foi concluido com sucesso, seja bem vindo(a) a lista de frutas"
      )

    
      //redireciona para outra
      window.location.href = "../html/logado.html"
    }
    
      //caso o login estiver errado, subir alerta falando q login está invalido
    else {
      alert("login invalido")
    }
  }


}
