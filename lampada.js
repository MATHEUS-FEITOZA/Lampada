let turnOn = document.getElementById("turnOn");
let turnOff = document.getElementById("turnOff");
let lamp = document.getElementById("lamp");
let reset = document.getElementById("resetLamp");
let lampBroken = false;






function LampOn() {
    if (!lampBroken) {

        lamp.src = "./imagens/ligada.jpg";
        
    }
}

function LampOff() {
    if (!lampBroken) {

        lamp.src = "./imagens/desligada.jpg";
    }
}

function LampBroke() {
    if (!lampBroken) {

        lamp.src = "./imagens/quebrada.jpg";
    }
    return lampBroken = true;

}

function LampReset() {

    if (lampBroken) {

        lamp.src = "./imagens/desligada.jpg";
        lampBroken = false;
        
    }

    

}


turnOn.addEventListener("click", LampOn);
turnOff.addEventListener("click", LampOff);
lamp.addEventListener("mouseover", LampOn);
lamp.addEventListener("mouseleave", LampOff);
lamp.addEventListener("dblclick", LampBroke)
reset.addEventListener("click", LampReset)



