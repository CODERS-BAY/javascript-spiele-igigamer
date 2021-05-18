let zaehler = 0;



let comCount= 0;

let playerCount = 0;

function randomComputer(){

    computerWahl = Math.ceil(Math.random()*3);

}



function playGame(choice){
    randomComputer();
    console.log(computerWahl);
    console.log(choice);
    console.log(zaehler);

  
    if(zaehler==1){
        endScore();
    }

    

        if(zaehler> 1){ 
            if(choice == computerWahl){ //unentschieden
                console.log("unentschieden");
                zaehler--;
                comCount++;
                playerCount++;
                changeScore();
            }    
            else if(choice == 1 && computerWahl == 2 || choice == 2 && computerWahl == 3 || choice == 3 && computerWahl == 1){
                console.log("du hast verloren");
                zaehler--;
                comCount++;
                changeScore();
            }
            else if(choice == 1 && computerWahl == 3 ||choice == 2 && computerWahl == 1 ||choice == 3 && computerWahl == 2){
                console.log("du hast gewonnen");
                zaehler--;
                playerCount++;
                changeScore();
            }
            
        }
        

}







function endScore(){


    
    brah.classList.add("activeBrah");
    brah.classList.remove("nonActive")
    

    if(playerCount > comCount){
        gameScore.innerText="DU HAST GEWONNEN!"
    }
    else if(comCount > playerCount){
        gameScore.innerText="Du HAST VERLOREN!"
    }
    else{
        gameScore.innerText="UNENTSCHIEDEN! TRY AGAIN"
    }
        
    
        
}



function changeScore(){

    gameScore.innerText="Es steht "+playerCount+" zu " + comCount;

}



function playScreen(){
    zaehler = document.getElementById("triesCounterId").value;
    if(zaehler <1){
        alert("Du musst mindestens einmal spielen");
    }else{
        
       
        
        console.log(zaehler+" zaehler");
    
        startScreen.classList.toggle("active");
        gameScreen.classList.toggle("active");
        
    }
   
}