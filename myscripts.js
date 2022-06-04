function computerPlay(){
    let x =Math.random()*3;
    if (x<=1){return "stone";}
    else if(x>1 && x<=2 ){return "paper";}
    else return "scissors";
}
