const ballon = document.querySelector("#ballon");
const bouton = document.querySelector(".btn");
let ballonWidth = 350;
let refresh = document.querySelector("img");
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
    refresh.style.display = "none";

    // Les actions quand le ballon éclate
    if (ballonWidth > 500) {
      ballon.style.width = "0px";
      ballon.style.transition = "0s";
      let bravo = document.createElement("p");
      bravo.innerHTML = "BOOMM !!!";
      document.getElementById("conteneur").appendChild(bravo);
      bravo.classList.add("bravo");
      ballon.style.display = "none";
      bouton.removeEventListener("click", gonflage);
      bouton.style.backgroundColor = "#a0a0a0";
      refresh.style.display = "block"
    }
  })
};

// Permet de recommmencer lorsqu'on appuie sur le bouton refresh
refresh.addEventListener("click", () => {
  ballonWidth = 350;
  ballon.style.width = ballonWidth + "px";
  ballon.style.display = "block";
  document.querySelector(".bravo").remove();
  bouton.style.backgroundColor = "#7fffd4";

  if (ballonWidth < 500) {
    gonfler();
  }
});
