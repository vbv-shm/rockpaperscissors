function computerPlay(){
    let x =Math.random()*3;
    if (x<=1){
        console.log("computer selected rock");
        return "rock";}
    else if(x>1 && x<=2 ){
        console.log("computer selected paper");
        return "paper";}
    else 
    console.log("computer selected scissors");
    return "scissors";
}


function playRound(playerselection){
    var stat;
    computerSelection=computerPlay();
    document.getElementById('stats1').innerText='Player selected '+playerselection+' and computer selected '+computerSelection;

    if (playerselection=="rock"){
        if(computerSelection=="paper"){
            computerScore=computerScore+1;
        stat='cwon';}
        else if(computerSelection=="scissors"){
            playerScore=playerScore+1;
            stat='pwon';}
    }
    else if (playerselection=="paper"){
        if(computerSelection=="rock"){
            playerScore=playerScore+1;
            stat='pwon';}
        else if(computerSelection=="scissors"){
            computerScore=computerScore+1;
            stat='cwon';
        }
    }
    else{
        if(computerSelection=="rock"){
            computerScore=computerScore+1;
            stat='cwon';}
        else if(computerSelection=="paper"){
            playerScore=playerScore+1;
            stat='pwon';
            }
 
    };
    if(stat=='cwon'){
        document.getElementById('stats2').innerText='Computer Won this round';
    }
    else if(stat=='pwon'){
        document.getElementById('stats2').innerText='Player Won this round';
    }
    else{document.getElementById('stats2').innerText='This round is draw';}
    document.getElementById('playerscore').innerText='Player score ='+playerScore;

    document.getElementById('computerscore').innerText=`Computer score =${computerScore}`;
    scoreCheck();
}

function scoreCheck(){
    if (playerScore==5){
        playerScore=0;
        computerScore=0;
        alert("PLAYER WON");}
    else if(computerScore==5){
        playerScore=0;
        computerScore=0;
        alert("COMPUTER WON");
    }
}

// function game(){
//     while(playerScore<5 && computerScore<5){
//         let x;
//     }
//     if(playerScore==5){
//         alert('player won');
//     }
//     else{
//         alert('computer won');
//     }
// }
let playerScore=0;
let computerScore=0;


function rockSelected(){
    playRound('rock');
}
function paperSelected(){
    playRound('paper');
}
function scissorsSelected(){
    playRound('scissors');
}


document.getElementById('rock').addEventListener('click',rockSelected);
document.getElementById('paper').addEventListener('click',paperSelected);
document.getElementById('scissors').addEventListener('click',scissorsSelected);

document.getElementById('playerscore').innerText='Player score ='+playerScore;
document.getElementById('computerscore').innerText=`Computer score =${computerScore}`;

