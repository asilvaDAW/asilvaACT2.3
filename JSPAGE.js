function cambiacolor(){
    color = document.getElementById("colorfondo").innerText;
    if (color == "azul") {

        document.getElementsByTagName("body")[0].style.background = "red";
        color = document.getElementById("colorfondo").innerText = "rojo";
    }
    if (color == "rojo") {
        document.getElementsByTagName("body")[0].style.background = "rgb(53, 107, 109)";
        color = document.getElementById("colorfondo").innerText = "azul";
    }
}
