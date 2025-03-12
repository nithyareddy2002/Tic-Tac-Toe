let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

let winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText="O";
            box.style.color="#b0413e";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            turn0=true;
        }
        box.disabled = true;
        count++;

        checkWinner();

    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
 
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){

                showWinner(val1);
                return;
            }
        }
    }
    if(count == 9)
        {
            msg.innerText="It is a Tie !";
            msgContainer.classList.remove("hide");

        }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations. Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();


}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);