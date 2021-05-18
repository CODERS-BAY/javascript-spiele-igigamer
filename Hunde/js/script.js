console.log("test");

let counter;
let userCounter = 0;
let pcCounter = 0;


function addCounter(){
    //Input einlesen
    //Fehler bei unter 1
    //Screen wechseln

    // globale Variable
    counter= document.getElementById("counterInput").value;

    if(counter <1 ){
        //Fehlermeldung
        //Hier kommt ein PopUp
        alert("Bitte geben Sie eine Zahl über 0 ein");
    }else{


        screen1.classList.add("hidden");
        screen2.classList.remove("hidden");
    }

}


function play(dogNumber){

   

    if(counter > 0) {
        // Zufallszahl generieren 1-4
        //Math.random
        //Math.floor(Math.random()* 4 + 1);
        console.log("test2")
        let pcChoice = Math.ceil(Math.random()*4); //Math.ceil()-- rundet immer auf
 

        // Muster-Bilder tauschen 
    
        userChoiceImg.setAttribute("src", "images/hund"+ dogNumber+ ".jpg"); //Pfad vom index.html ausgehend
        pcChoiceImg.setAttribute("src", "images/hund"+ pcChoice +".jpg");

        // Zahlen vergleichen

        if(dogNumber== pcChoice){
            userCounter++;

            document.getElementById(userCounterContainer).innerHTML = "<strong>" + userCounter + "</strong>";
            
        }else{
            pcCounter++;
            userCounterContainer.innerText = pcCounter;
        }



        counter--;


        if(counter == 0){
            setTimeout(function(){
                if(userCounter > pcCounter)
                    addPopUp("Du hast gewonnen", true);
                 else if(pcCounter>userCounter)
                    addPopUp("Du hast leider verloren", true);
                else
                    addPopUp("Unentschieden", true);
            }, 1000); 
            
                
            


        }


        //counter == 0;
        //PopUp mit Gewonnen/ Verloren / Unentschieden 
    }

}