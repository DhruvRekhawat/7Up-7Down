let balanceEl=document.querySelector("#balance");
let balance=5000;
let ScoreEl=document.querySelector("#score");
let score=0;
let currentBet=document.querySelector("#currentBet");
let bet=0;
let num1=0;
let num2=0;
let sum=0;
let screen1=document.querySelector("#num1");
let sumScreen=document.querySelector("#sum");
let screen2=document.querySelector("#num2");
let winLoseScreen=document.querySelector(".winLoseScreen");

const betOne=function(){
    bet=50;
    console.log("50");
    currentBet.innerHTML="Bet : $ "+bet;
    return bet;
}
const betTwo=function(){
    bet=100;
    console.log("100");
    currentBet.innerHTML="Bet : $ "+bet;
    return bet;
}
const betThree=function(){
    bet=500;
    console.log("500");
    currentBet.innerHTML="Bet : $ "+bet;
    return bet;
}
const update=function(){
    num1=Math.floor(Math.random()*6)+1;
    num2=Math.floor(Math.random()*6)+1;
    screen1.innerHTML=num1;
    screen2.innerHTML=num2;
    
    sumScreen.innerHTML=num1+num2;
    return num1,num2;
}
const reset= function(){
     winLoseScreen.style.opacity="0%";
}
const up=function(){
    
    update();
    console.log(bet);
    
    if(num1+num2 >7){
        balance=balance+bet;
        balanceEl.innerHTML="Balance $: " + balance;
        winLoseScreen.style.opacity="90%"
        winLoseScreen.innerHTML="YOU WIN! 	&#127881;"
        
    }
    else{
        balance=balance-bet;
        balanceEl.innerHTML="Balance $: " + balance;
        winLoseScreen.style.opacity="90%"
        winLoseScreen.innerHTML="YOU LOSE! &#128557"
        
    }
    score= balance-5000;
   ScoreEl.innerHTML="Score: $ " + score;
   setTimeout(reset,1000);

}
const down=function(){
    update();
    console.log(bet);
    
    if(num1+num2 <7){
        balance=balance+bet;
        balanceEl.innerHTML="Balance $: " + balance;
        winLoseScreen.style.opacity="90%"
        winLoseScreen.innerHTML="YOU WIN! 	&#127881;"
      
    }
    else{
        balance=balance-bet;
        balanceEl.innerHTML="Balance $: " + balance;
        winLoseScreen.style.opacity="90%"
        winLoseScreen.innerHTML="YOU LOSE! &#128557"
        
    }
    score= balance-5000;
   ScoreEl.innerHTML="Score: $ " + score;
   setTimeout(reset,1000);

}

