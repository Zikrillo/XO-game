// Даем событие при клике на кнопки 
let symbolOfBox = "x";
let scoreBoard = [0,1,2,3,4,5,6,7,8];
let blocker = document.querySelector(".container_blocker");
let giveFunction = function () {
    let arrayOfBoxses = document.querySelectorAll(".box");
    arrayOfBoxses.forEach((box, key) => {
        var boxClickFunc = () => {
            if (symbolOfBox === "x") {
                box.innerHTML = `<img src="./X.png">`;
                scoreBoard[key] = symbolOfBox;
                symbolOfBox = "o";
                console.log(scoreBoard);
                box.removeEventListener('click', boxClickFunc);
                check();
            } else {
                box.innerHTML = `<img src="./O.png">`;
                scoreBoard[key] = symbolOfBox;
                symbolOfBox = "x";
                console.log(scoreBoard);
                box.removeEventListener('click', boxClickFunc);
                check();
            }
        };
        box.addEventListener("click", boxClickFunc);
    });
}

var check = function(){
    if(scoreBoard[0] === scoreBoard[1] && scoreBoard[0] === scoreBoard[2] && scoreBoard[1] === scoreBoard[2]){
        putBlock(scoreBoard[0]);
    }
    if(scoreBoard[3] === scoreBoard[4] && scoreBoard[3] === scoreBoard[5] && scoreBoard[4] === scoreBoard[5]){
        putBlock(scoreBoard[3])
    }
    if(scoreBoard[6] === scoreBoard[7] && scoreBoard[6] === scoreBoard[8] && scoreBoard[7] === scoreBoard[8]){
        putBlock(coreBoard[6])
    }
    if(scoreBoard[0] === scoreBoard[3] && scoreBoard[0] === scoreBoard[6] && scoreBoard[3] === scoreBoard[6]){
        putBlock(scoreBoard[0])
    }
    if(scoreBoard[1] === scoreBoard[4] && scoreBoard[1] === scoreBoard[7] && scoreBoard[4] === scoreBoard[7]){
        putBlock(scoreBoard[1])
    }
    if(scoreBoard[2] === scoreBoard[5] && scoreBoard[2] === scoreBoard[8] && scoreBoard[5] === scoreBoard[8]){
        putBlock(scoreBoard[2])
    }
    if(scoreBoard[0] === scoreBoard[4] && scoreBoard[0] === scoreBoard[8] && scoreBoard[4] === scoreBoard[8]){
        putBlock(scoreBoard[0])
    }
    if(scoreBoard[2] === scoreBoard[4] && scoreBoard[2] === scoreBoard[6] && scoreBoard[4] === scoreBoard[6]){
        putBlock(scoreBoard[2])
    }
    if(scoreBoard.includes(Number) === 0){
        console.log("hi");
    }
}
var  putBlock  = function(value){
    blocker.style.display = "inline-flex";
    let label = document.querySelector(".container_blocker h1");
    label.textContent = `Победили ${(value=="x"?"крестики":"нолики")}`;
};

giveFunction();