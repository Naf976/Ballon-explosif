const ballon = document.querySelector("#ballon");
const bouton = document.querySelector(".btn");
let ballonWidth = 350;
ballon.style.width = "350px";


bouton.addEventListener("click", function gonfler() {
  ballonWidth += 20;
  ballon.style.width = ballonWidth + "px";
  ballon.style.transition = "0.5s";

  if (ballonWidth > 500) {
    ballon.style.width = "0px";
    ballon.style.transition = "0s";
    let bravo = document.createElement("p");
    bravo.innerHTML = "Bravo !!!!";
    document.getElementById("conteneur").appendChild(bravo);
    bravo.classList.add("bravo");
  }
});
