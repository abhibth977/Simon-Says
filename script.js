let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red", "purple","green"];

let para = document.querySelector("p");

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("Game Started")
        started = true;

        levelUp()
    } 
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(
        function(){
            btn.classList.remove("flash");
        }, 250 );
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(
        function(){
            btn.classList.remove("userflash");
        }, 250 );
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    para.innerText = "Game Started";

    let randomIndex = Math.floor(Math.random() *4 );
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);

    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);

}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was :- <b>${level*5} </b> <br/> Press any key to start.`;
        para.innerText = "";
        reset();
    }

}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}