const ballon = document.querySelector("#ballon");
const bouton = document.querySelector(".btn");
let ballonWidth = 350;
let refresh = document.querySelector("img");
ballon.style.width = "350px";


if(ballonWidth < 500){
   bouton.addEventListener("click", function gonfler() {
  ballonWidth += 20;
  ballon.style.width = ballonWidth + "px";
  ballon.style.transition = "0.5s";
  refresh.style.display = "none";

  if (ballonWidth > 500) {
    ballon.style.width = "0px";
    ballon.style.transition = "0s";
    let bravo = document.createElement("p");
    bravo.innerHTML = "BOOMM !!!";
    document.getElementById("conteneur").appendChild(bravo);
    bravo.classList.add("bravo");
    ballon.style.display = "none";
    bouton.removeEventListener("click", gonfler);
    bouton.style.backgroundColor = "#a0a0a0";
    refresh.style.display = "block"
  }
})};
let gonfler = function(){
    
}
refresh.addEventListener("click", ()=>{
  ballonWidth = 350;
  ballon.style.width = ballonWidth + "px";
  ballon.style.display = "block";
document.querySelector(".bravo").remove();
bouton.style.backgroundColor ="#7fffd4";
bouton.addEventListener("click", function gonfler() {
  ballonWidth += 20;
  ballon.style.width = ballonWidth + "px";
  ballon.style.transition = "0.5s";
  refresh.style.display = "none";

  if (ballonWidth > 500) {
    ballon.style.width = "0px";
    ballon.style.transition = "0s";
    let bravo = document.createElement("p");
    bravo.innerHTML = "BOOMM !!!";
    document.getElementById("conteneur").appendChild(bravo);
    bravo.classList.add("bravo");
    ballon.style.display = "none";
    bouton.removeEventListener("click", gonfler);
    bouton.style.backgroundColor = "#a0a0a0";
    refresh.style.display = "block"
  }
})
})
console.log(bouton);
