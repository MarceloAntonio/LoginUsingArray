//bagulho pr aguardar
let bd = []
let o = true

while (o) {
  const chamado = Number(
    prompt(`digite 
          1- para fazer login
          2- para criar um usuario
  `)
  )

  if (chamado === 1) {
    let user = prompt("digite seu usuario")
    let senha = prompt("digite sua senha")
    user
    senha

    if (
      (user === bd[0] && senha === bd[1]) ||
      (user === bd[2] && senha === bd[3]) ||
      (user === bd[4] && senha === bd[5])
    ) {
      o = false
      alert(
        "login foi concluido com sucesso, seja bem vindo(a) a lista de frutas"
      )
      window.location.href = "../html/logado.html"
    } else {
      alert("login invalido")
    }
  }

  if (chamado === 2) {
    let user = prompt("digite seu usuario")

    let senha = prompt("digite sua senha")

    user
    senha
    bd.push(user, senha)
    chamado
  }
}
