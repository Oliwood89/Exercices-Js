let hover = document.querySelectorAll(".hoverMe");

function hoverMe () {
    this.classList.add("display");
    this.classList.remove("display2");
}


function reset() {
    this.classList.remove("display");
    this.classList.add("display2");
} 

for (i=0 ; i < hover.length; i++) {
    let h = hover[i];
    h.addEventListener("mouseover", hoverMe);
}

for (i=0 ; i < hover.length; i++) {
    let h = hover[i];
    h.addEventListener("click", reset);
}

/* Mouse coordinates */

let infoX = document.getElementById("axe-x");

function TellPosX(p) {
    infoX.innerHTML = "Position X: "+ p.pageX;
}
addEventListener("mousemove",TellPosX);

let infoY = document.getElementById("axe-y");

function TellPosY(p) {
    infoY.innerHTML = "Position Y: "+ p.pageY;
}
addEventListener("mousemove",TellPosY);