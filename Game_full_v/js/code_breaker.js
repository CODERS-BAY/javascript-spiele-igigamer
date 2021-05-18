let codeCounter = 0;
let u1 = "*";
let u2 = "*";
let u3 = "*";

let easy;

function randomComputer(){

    c1 = 1;//Math.floor(Math.random() * 6) +1;
    c2 = 2;//Math.floor(Math.random() * 6) +1;
    c3 = 3;//Math.floor(Math.random() * 6) +1;
}


//wen i auf a zahl klick wird der code zähler erhöht und zahlen werden verglichen 
function playGame(choice){
    codeCounter ++;
    gameScore.innerText = "";
    //choice wird einzeln übergebn
    if(codeCounter == 1){
        u1 = choice;
        user123.innerText = choice;
        checkCode();
    }else if(codeCounter == 2){
        u2 = choice;
        user234.innerText = choice;
        checkCode();
    }else{
        u3 = choice;
        user345.innerText = choice;
        checkCode();
    }

    //sobald playGame 3 mal geklick wurde, wird der code überprüft und der codeCounter auf 0 gesetzt

   

}


function checkCode(){
    
    //zaehler überprüft ob noch genügend versuche da sind


    if(zaehler > 1){
            //falls der code überein stimmt 
        if(u1 == c1 && u2 == c2 && u3 == c3){
                //SiegerScreen 
            gameScore.innerText = "Du hast gewonnen";
            finalScore();
        }else if(codeCounter ==1){
            if(u1==c1){
                gameScore.innerText=("Deine 1. Zahl ist korrekt");
            }else if(u1 ==c2 || u1== c3){
                gameScore.innerText=("Deine 1. Zahl ist im Code enthalten");
            }else{
                gameScore.innerText=( "Deine 1. Zahl ist nicht im Code enthalten");
            }
            
        
        }else if(codeCounter == 2 ){
            if(u2==c2){
                gameScore.innerText = ("Deine 2. Zahl ist korrekt") ;
            }else if(u2 ==c1 || u2== c3){
                gameScore.innerText= ("Deine 2. Zahl ist im Code enthalten");
            }else{
                gameScore.innerText= ("Deine 2. Zahl ist nicht im Code enthalten");
            }



        }else if (codeCounter == 3){
            codeCounter = 0;
            if(u3==c3){
                gameScore.innerText=("Deine 3. Zahl ist korrekt");
            }else if(u3 ==c1 || u3== c2){
                gameScore.innerText=( "Deine 3. Zahl ist im Code enthalten");
            }else{
                gameScore.innerText=("Deine 3. Zahl ist nicht im Code enthalten");
            }clearEingabe();
        }else 
            console.log("Spiel defekt")

            
    }
                    
          
        


}


 



function finalScore(){


    brah.classList.add("activeBrah");
    brah.classList.remove("nonActive")
}



function clearEingabe(){

    user123.innerText = "*";
    user234.innerText = "*";
    user345.innerText = "*";

}





function changeCode(choice){

    //code wird geändert aber immer nur eine Zahl
    //innerText muss eins weiter springen 
    console.log("changeCode funktion " + choice);

    codeScreen.innerText = choice;

}












function playScreen(){


    randomComputer();

    zaehler = document.getElementById("triesCounterId").value;
    if(zaehler <1){
        alert("Du musst mindestens einmal spielen");
    }else{
        
        console.log(zaehler+" zaehler");
        startScreen.classList.toggle("active");
        gameScreen.classList.toggle("active");
        


    }










}
