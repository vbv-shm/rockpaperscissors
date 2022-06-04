function computerPlay(){
    let x =Math.random()*3;
    if (x<=1){return "stone";}
    else if(x>1 && x<=2 ){return "paper";}
    else return "scissors";
}
const computerSelection=computerPlay();
const playerselection="rock";

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