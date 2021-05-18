




entfernungZumMonster = Math.random() * 90 + 10;
entfernungZumMonster = Math.floor(entfernungZumMonster);





function playScreen(){

    let triesCounter = document.getElementById("triesCounterId").value;

    console.log("eingabe check" + triesCounter);

    checker = document.getElementById("triesCounterId").value;

    if(triesCounter<=0){
        alert("Du musst mindestens 1x spielen");
    }else {
        startScreen.classList.toggle("active");
        gameScreen.classList.toggle("active");
    }



   
   
}



function playGame(){

    
    let g = document.getElementById("planetSelect").value;

    let v0 = document.getElementById("kraft").value;

    let derWinkel= document.getElementById("derWinkel").value;


    
    derWinkel = derWinkel * ( Math.PI / 180 );
    wurfweite = ((v0 * v0) * Math.sin(2 * derWinkel)) / g;

    wurfweite =  Math.floor(wurfweite);





    if(checker <= 0){
        endGame();

    }else{

        if(wurfweite == entfernungZumMonster){
            endGame();
            }else{
            checker--;
            changeParagraph();            
        }



    }
        

    


       
}




    




function endGame(){

    console.log("endgame text");
    checker = 0;

    if(wurfweite == entfernungZumMonster){
        versuche.innerText= "Du hast gewonnen";

    }else{
        versuche.innerText= "Du hast verloren";
    }
        


}



function changeParagraph(){

    loesung.innerText = "Du hast das Monster um " + (entfernungZumMonster-wurfweite)+ "m verfehlt";
    versuche.innerText= "Versuche übrig " + checker;
}