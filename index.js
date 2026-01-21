let gem = document.querySelector(".gem-cost");
let clickSound = document.getElementById("clickSound");

function incrementGem() {
    gem.innerHTML = parseFloat(gem.innerHTML) + 1;

    clickSound.currentTime = 0; 
    clickSound.play();
}
