let gameSequence = [];
let userSequence = [];

let buttons = ["one", "two", "three", "four"];

let started = false;
let level = 0;

let button = document.querySelector("button");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(!started){
        console.log("Game started!");
        started = true;
        levelUp();
    }
});

function buttonFlash(button){
    button.classList.add("flash");
    setTimeout(function(){
        button.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userSequence=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = buttons[randomIndex];
    let randomButton = document.getElementById(randomColor);
    gameSequence.push(randomColor);
    buttonFlash(randomButton);
}

function checkAns(index){
    if(userSequence[index]===gameSequence[index]){
        if(userSequence.length==gameSequence.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}

function buttonPress(){
    let button = this;
    buttonFlash(button);
    userColor = button.getAttribute("id");
    userSequence.push(userColor);
    checkAns(userSequence.length-1);
}

let allButtons = document.querySelectorAll(".button");
for(button of allButtons){
    button.addEventListener("click", buttonPress);
}
function reset(){
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}