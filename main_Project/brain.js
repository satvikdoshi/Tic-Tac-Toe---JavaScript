

// We have to fix the bug of gettting 2 win condition at same time,bug in animation. 

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");
const div7 = document.querySelector("#div7");
const div8 = document.querySelector("#div8");
const div9 = document.querySelector("#div9");
const body=document.querySelector("body");
const select=document.querySelector("select");
const container = document.querySelector(".container");
const divArray = [div1, div2, div3, div4, div5, div6, div7, div8, div9];


const playerFirst=document.querySelector("#playerFirst");
const playerSecond=document.querySelector("#playerSecond");

const music1 = new Audio("../songs/battle-of-the-dragons-8037.mp3");
music1.innerText="Battle-of-dragons";
const music2= new Audio("../songs/game-music-7408.mp3");
music2.innerText="Game-Music";
const music3= new Audio("../songs/1.MainTheme-320bit.mp3")
music3.innerText="MainTheme-320bit";
const music4= new Audio("../songs/Mystery-Mammal-Jingle-Bells.mp3")
music4.innerText="Mystery-Mammal-Jingle-Bells";
const music5= new Audio("../songs/Saga-of-Knight.mp3")
music5.innerText="Saga-of-Knight";
const musicArray=[music1,music2,music3,music4,music5];

for (let div of divArray) {
    div.addEventListener("click", logoAdd);
}

let flag = 0;
let result = false;
let gameOverflag=0;
let id;
let countPlayerFirst=0;
let countPlayerSecond=0;

function src(src){

    musicArray.forEach((music)=>{
        if(music.innerText==src.innerText)
        music.play();
        else 
        music.pause();
    })
}

function logoAdd() {

        if(select.selectedIndex==0){
           src(select[0]);
        }
        else if(select.selectedIndex==1){
            src(select[1]);
        }
        else if(select.selectedIndex==2){
            src(select[2])
        }
        else if(select.selectedIndex==3){
            src(select[3])
        }
        else if(select.selectedIndex==4){
            src(select[4])
        }

    if (flag == 0) {
        if (this.childElementCount == 0) {
            if (result == false) {
                const img = document.createElement("img");
                img.setAttribute("src", "../images/X_new_logo.png");
                this.append(img);
                flag = 1;
            }
        }
    } else {
        if (this.childElementCount == 0) {
            if (result == false) {
                const img = document.createElement("img");
                img.style.height = "120px";
                img.style.width = "120px";
                img.setAttribute("src", "../images/o_new_logo.png");
                this.append(img);
                flag = 0;
            }
        }
    }
    // console.log(result);
    if (result != true)
        result = checkConditions();
}

function checkConditions() {
   
    let flagOfWin = 0;
    imgX = `<img src="../images/X_new_logo.png">`;
    imgO = `<img src="../images/o_new_logo.png" style="height: 120px; width: 120px;">`;

    const arrayOfSpan = new Array();

    const newLine1 = document.createElement("span");
    const newLine2 = document.createElement("span");
    const newLine3 = document.createElement("span");
    const player1Win = document.createElement("span");
    const player2Win = document.createElement("span");
    const gameOver = document.createElement("span");
    const playAgain = document.createElement("button");
    const quit=document.createElement("button");
    playAgain.classList.add("multiPlayerBtns");
    quit.classList.add("multiPlayerBtns");

    playAgain.addEventListener("click", Restart);
    quit.addEventListener("click", quitGame);

    playAgain.textContent = "Play Again";
    playAgain.id="playAgain";
    quit.textContent="Quit";
    quit.id="quit";

    player1Win.textContent = "Player 1 WON";
    player2Win.textContent = "Player 2 WON";
    gameOver.textContent = "Game Over !"

    arrayOfSpan.push(newLine1);
    arrayOfSpan.push(newLine2);
    arrayOfSpan.push(newLine3);

    for (let span of arrayOfSpan) {
        span.style.display = "inline-block";
        span.style.width = "168px";
        span.style.position = "absolute";
        span.style.border = "1px solid black";
        span.style.bottom = "60px";
    }
    //  Checking conditions for player1 (Horizental,Vertical and Diagonals)

    if ((div1.innerHTML === imgX && div2.innerHTML === imgX && div3.innerHTML === imgX) || (div4.innerHTML === imgX && div5.innerHTML === imgX && div6.innerHTML === imgX) || (div7.innerHTML === imgX && div8.innerHTML === imgX && div9.innerHTML === imgX) || (div1.innerHTML === imgX && div5.innerHTML === imgX && div9.innerHTML === imgX) || (div3.innerHTML === imgX && div5.innerHTML === imgX && div7.innerHTML === imgX) || (div1.innerHTML === imgX && div4.innerHTML === imgX && div7.innerHTML === imgX) || (div2.innerHTML === imgX && div5.innerHTML === imgX && div8.innerHTML === imgX) || (div3.innerHTML === imgX && div6.innerHTML === imgX && div9.innerHTML === imgX)) {
        console.log("Player1 Condition True");
        container.append(player1Win);
        container.append(playAgain);
        container.append(quit);
        lineMarker();
        playerFirst.innerHTML=`Player 1: ${++countPlayerFirst}`;
        gameOverflag=0;
        return true;

    }
    // Checking conditions for player2 (Horizental,Vertical and Diagonals)
    
     if ((div1.innerHTML === imgO && div2.innerHTML === imgO && div3.innerHTML === imgO) || (div4.innerHTML === imgO && div5.innerHTML === imgO && div6.innerHTML === imgO) || (div7.innerHTML === imgO && div8.innerHTML === imgO && div9.innerHTML === imgO) || (div1.innerHTML === imgO && div5.innerHTML === imgO && div9.innerHTML === imgO) || (div3.innerHTML === imgO && div5.innerHTML === imgO && div7.innerHTML === imgO) || (div1.innerHTML === imgO && div4.innerHTML === imgO && div7.innerHTML === imgO) || (div2.innerHTML === imgO && div5.innerHTML === imgO && div8.innerHTML === imgO) || (div3.innerHTML === imgO && div6.innerHTML === imgO && div9.innerHTML === imgO)) {
        console.log("Player2 Condition True");
        container.append(player2Win);
        container.append(playAgain);
        container.append(quit);
        lineMarker();
        gameOverflag=0;
        playerSecond.innerHTML=`Player 2: ${++countPlayerSecond}`;
        return true;

    }
    // Game Over Condition
    if ((div1.innerHTML === imgO || div1.innerHTML === imgX) && (div2.innerHTML === imgO || div2.innerHTML === imgX) && (div3.innerHTML === imgO || div3.innerHTML === imgX) && (div4.innerHTML === imgO || div4.innerHTML === imgX) && (div5.innerHTML === imgO || div5.innerHTML === imgX) && (div6.innerHTML === imgO || div6.innerHTML === imgX) && (div7.innerHTML === imgO || div7.innerHTML === imgX) && (div8.innerHTML === imgO || div8.innerHTML === imgX) && (div9.innerHTML === imgO || div9.innerHTML === imgX)) {
        console.log("Game Over Condition True");
        container.append(gameOver);
        container.append(playAgain);
        container.append(quit);
        gameOverflag=1;
        return true;

    }
    return false;
}

function Restart() {
    for (let key of divArray) {
        key.innerHTML = "";
    }
    container.removeChild(container.children[1]);
    container.removeChild(container.children[1]);
    container.removeChild(container.lastElementChild);
    if(gameOverflag!=1)
    container.removeChild(container.lastElementChild);
    // console.log(container.childElementCount);
    result = false;
    flag = 0;
    
}
function quitGame(){
    window.close();
}

function lineMarker() {

    const line = document.createElement("div");
    line.style.border = "1px solid rgb(40 50 255)";
 
    function horizentalLine() {
        line.style.width = "450px";
        line.style.position = "absolute";
        line.className="lineMarker";
        line.style.left = "98px";
        line.className="horizentalLine";
        container.append(line);
        return line;
    }

    if ((div1.innerHTML == imgX && div2.innerHTML == imgX && div3.innerHTML == imgX) || (div1.innerHTML == imgO && div2.innerHTML == imgO && div3.innerHTML == imgO)) {
        let line = horizentalLine();
        line.style.top = "80px";

    } else if ((div4.innerHTML == imgX && div5.innerHTML == imgX && div6.innerHTML == imgX) || (div4.innerHTML == imgO && div5.innerHTML == imgO && div6.innerHTML == imgO)) {
        let line = horizentalLine();
        line.style.top = "227px";

    } else if ((div7.innerHTML == imgX && div8.innerHTML == imgX && div9.innerHTML == imgX) || (div7.innerHTML == imgO && div8.innerHTML == imgO && div9.innerHTML == imgO)) {
        let line = horizentalLine();
        line.style.top = "383px";
    }

    function verticalLine() {
        line.style.height = "440px";
        line.style.position = "absolute";
        line.style.top = "5px";
        line.className="verticalLine";
        container.append(line);
        return line;
    }
    if ((div1.innerHTML == imgX && div4.innerHTML == imgX && div7.innerHTML == imgX) || (div1.innerHTML == imgO && div4.innerHTML == imgO && div7.innerHTML == imgO)) {
        let line = verticalLine();
        line.style.left = "157px";
    } else if ((div2.innerHTML == imgX && div5.innerHTML == imgX && div8.innerHTML == imgX) || (div2.innerHTML == imgO && div5.innerHTML == imgO && div8.innerHTML == imgO)) {
        let line = verticalLine();
        line.style.left = "330px";

    } else if ((div3.innerHTML == imgX && div6.innerHTML == imgX && div9.innerHTML == imgX) || (div3.innerHTML == imgO && div6.innerHTML == imgO && div9.innerHTML == imgO)) {
        let line = verticalLine();
        line.style.left = "500px";
    }

    function diagonalLine(){
        line.style.height = "425px";
        line.style.position = "absolute";
        line.style.top="17px";
        line.className="diagonalLine";
        container.append(line);
        return line;
    }
    if ((div1.innerHTML == imgX && div5.innerHTML == imgX && div9.innerHTML == imgX)||(div1.innerHTML == imgO && div5.innerHTML == imgO && div9.innerHTML == imgO)) {
        let line=diagonalLine();
        line.style.left="90px";
        line.style.transform="skewX(48deg)";

    }
    else  if ((div3.innerHTML == imgX && div5.innerHTML == imgX && div7.innerHTML == imgX)||(div3.innerHTML == imgO && div5.innerHTML == imgO && div7.innerHTML == imgO)) {
        let line=diagonalLine();
        line.style.top="13px";
        line.style.right="72px";
        line.style.transform="skewX(-48.5deg)";
    }
}


