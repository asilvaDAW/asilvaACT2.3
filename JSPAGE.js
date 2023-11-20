function cambiacolor() {
    debugger;
    let color = document.getElementById("colorfondo").innerText;
  
    if (color === "azul") {
      document.getElementsByTagName("body")[0].style.backgroundColor = "red";
      document.getElementById("colorfondo").innerText = "rojo";
    } else if (color === "rojo") {
      document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(199, 233, 204)";
      document.getElementById("colorfondo").innerText = "azul";
    }
  }
  