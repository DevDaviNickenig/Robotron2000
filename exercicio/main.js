
// const botao = document.querySelector('[data-botao]');
// const fechar = document.querySelector(".close");
// const lista = document.querySelector("[data-lista]");
// console.log(botao)
// console.log(fechar)
// console.log(lista)


// document.getElementById("[data-botao]").addEventListener("click", () => {
//   lista.setAttribute(".lista", "[data-botao]");
// });

// document.querySelector(".close").addEventListener("click", () => {
//   lista.style.display(".lista", ".close")
// });

function mostraTintas() {
  const lista = document.querySelector("[data-lista]");
  if (lista.style.display === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}

