function cambiacolor(){
    debugger;
    color = document.getElementById("colorfondo").innerHTML;
    if (color == "azul") {

        document.getElementsByTagName("body")[0].style.background = "red";
        color = document.getElementById("colorfondo").innerHTML = "rojo";
    }
    if (color == "rojo") {
        document.getElementsByTagName("body")[0].style.background = "rgb(53, 107, 109)";
        color = document.getElementById("colorfondo").innerHTML = "azul";
    }
}
