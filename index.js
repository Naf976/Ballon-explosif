const ballon = document.querySelector("#ballon");
const bouton = document.querySelector(".btn");
let ballonWidth = 350;
let refresh = document.querySelector(".refresh");
let flash = document.querySelector(".flash");
ballon.style.width = "350px";


if (ballonWidth < 500) {
  gonfler()
};

// Function qui permet de gonfler le ballon lorsque l'on appuie sur le bouton "gonfler"
function gonfler() {
  bouton.addEventListener("click", function gonflage() {
    ballonWidth += 20;
    ballon.style.width = ballonWidth + "px";
    ballon.style.transition = "0.5s";

    if (ballonWidth < 495) {
      let gonflement = new Audio("son/gonflement.mp3");
      gonflement.play();
      animationBtn();
    }



    // Les actions quand le ballon éclate
    if (ballonWidth > 500) {
      ballon.style.display = "none";
      bouton.removeEventListener("click", gonflage);
      bouton.style.backgroundColor = "#a0a0a0";
      refresh.style.backgroundColor = "#fff";
      let eclatement = new Audio("son/explosion.wav");
      eclatement.play();
      flash.style.display = "block";
      setTimeout(()=>{flash.style.display = "none"}, 50);
      document.querySelector(".regles").innerHTML = "Ah dommage il a éclaté !!";
      bouton.addEventListener("mouseover", ()=>{bouton.style.backgroundColor = "#a0a0a0"});
      bouton.addEventListener("mouseleave", ()=>{bouton.style.backgroundColor = "#a0a0a0"});

      refresh.addEventListener("click", function initialiser() {
        ballonWidth = 350;
        ballon.style.width = ballonWidth + "px";
        ballon.style.display = "block";
        bouton.style.backgroundColor = "#67b398";
        animationBtn();
        refresh.removeEventListener("click", initialiser);
        refresh.style.backgroundColor = "#a0a0a0";
        flash.style.display = "none";
        document.querySelector(".regles").innerHTML = "Appuis sur le bouton pour gonfler le ballon !";

        if (ballonWidth < 500) {
          gonfler();
        }
      });

    }
  })
};
function animationBtn(){
  bouton.addEventListener("mouseover", function hover(){bouton.style.backgroundColor = "#b6ffe8"});
  bouton.addEventListener("mouseleave", ()=>{bouton.style.backgroundColor = "#67b398"});
}

// Permet de recommmencer lorsqu'on appuie sur le bouton refresh

