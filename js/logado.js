let lista = []

let o = true
while (o) {
  const fruta = Number(
    prompt(
      `crie sua lista de frutas aqui! 
  1- para adicionar as frutas na lista
  2- para remover a ultima fruta da lista
  3- para mostrar a lista
  4- para apagar toda a lista
  5- para sair da monstagem da lista
  `
    )
  )

  if (fruta === 1) {
    const qual = prompt("qual fruta adicionar?")
    qual
    lista.push(qual)
    const mais = prompt("mais alguma? (s/n)")
    mais
    if (mais === "s") {
      const qual = prompt("qual fruta adicionar?")
      qual
      lista.push(qual)
    }
  }

  if (fruta === 2) {
    lista.pop()
  }

  if (fruta === 3) {
    alert(lista)
  }

  if (fruta === 4) {
    lista = []
  }
  if (fruta === 5) {
    o = false
  }
}

document.getElementById("span").innerHTML = lista
