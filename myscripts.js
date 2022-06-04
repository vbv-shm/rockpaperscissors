function computerPlay(){
    let x =Math.random()*3;
    if (x<=1){return "stone";}
    else if(x>1 && x<=2 ){return "paper";}
    else return "scissors";
}


function playGround(playerselection,computerSelection){
    if (playerselection=="rock"){
        if(computerSelection=="rock"){return "Draw";}
        else if(computerSelection=="paper"){return "Computer wins";}
        else if(computerSelection=="scissors"){return "Player wins";}
    }
    else if (playerselection=="paper"){
        if(computerSelection=="rock"){return "Player wins";}
        else if(computerSelection=="paper"){return "Draw";}
        else if(computerSelection=="scissors"){return "Computer wins";}
    }
    else{
        if(computerSelection=="rock"){return "Computer wins";}
        else if(computerSelection=="paper"){return "Player wins";}
        else if(computerSelection=="scissors"){return "Draw";}
    }
}

function game(){
    let playerScore=0;
    let computerScore=0;
    for (let i = 0; i < 5; i++) {
        const computerSelection=computerPlay();
        const playerselection="rock";
        result=playGround(playerselection,computerSelection);
        if (result=="Player wins"){playerScore=playerScore+1;}
        if (result=="Computer wins"){computerScore=computerScore+1;}
        
     }
     return "players score is $(playerScore) and computer score is $(computerScore)";

}


console.log(game())