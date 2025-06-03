let blocos = document.querySelectorAll(".container");
let checkbox = document.getElementsByClassName("opcao");
let btnAtivos = document.getElementById("ativos");
let btnInativos = document.getElementById("inativos");
let btnTodos = document.getElementById("todos");

function selecionarFiltro(botaoSelecionado) {
  btnAtivos.classList.remove("filtros-selecionado");
  btnInativos.classList.remove("filtros-selecionado");
  btnTodos.classList.remove("filtros-selecionado");
  botaoSelecionado.classList.add("filtros-selecionado");
}

function ativo() {
  selecionarFiltro(btnAtivos);
  for (let i = 0; i < blocos.length; i++) {
    let selecao = blocos[i].querySelector(".opcao");
    if (selecao.checked) {
      blocos[i].style.display = "grid";
    } else {
      blocos[i].style.display = "none";
    }
  }
}

function desativado() {
  selecionarFiltro(btnInativos);
  for (let i = 0; i < blocos.length; i++) {
    let selecao = blocos[i].querySelector(".opcao");
    if (selecao.checked) {
      blocos[i].style.display = "none";
    } else {
      blocos[i].style.display = "grid";
    }
  }
}

function todos() {
  selecionarFiltro(btnTodos);
  for (let i = 0; i < blocos.length; i++) {
    blocos[i].style.display = "grid";
  }
}
