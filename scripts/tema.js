let tema = document.getElementById("botao-tema");
let lua = "../../browser-extensions-manager-ui-main/assets/images/icon-moon.svg";
let sol = "../../browser-extensions-manager-ui-main/assets/images/icon-sun.svg";
let iconTema = document.getElementById("icon-tema");

function mudarTema() {
    if( iconTema.src.includes("icon-moon.svg")){
        iconTema.src = sol;
    }
    else{
        iconTema.src = lua;
    }
    document.body.classList.toggle("tema-escuro");
}
