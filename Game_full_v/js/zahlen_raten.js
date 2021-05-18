


function playGame(){
    gamerZahl = document.getElementById("gamerChoice").value;


    console.log("versuche in playGame"+ versuche)

    if(versuche > 1){



        versuche--;
        if(gamerZahl <= 0){
            alert("gib eine Zahl ein");
            versuche++;
        }else if(gamerZahl == random){
            changeText.innerText=("Du hast die Zahl erraten!");
            changeButton();
        }else if(gamerZahl < random){
            changeText.innerText=("deine zahl ist zu klein");
        }else{
            changeText.innerText=("deine zahl ist zu groß");
        }
    }else{
        changeText.innerText=("keine versuche mehr übrig");
        changeButton();
    }
        
   


    


    
    


}


function changeButton(){
    brah2.classList.add("nonActive");
    brah.classList.add("activeBrah");
    brah.classList.remove("nonActive");
    
    
}



function playScreen(){
    
    versuche = document.getElementById("triesCounterId").value;
    range = document.getElementById("gameRange").value;
   
    random = Math.floor(Math.random()*(range)+1);
    
    console.log(random);
    console.log(versuche);


    if(versuche <1){
        alert("Du musst mindestens einmal spielen");
    }else{
        
    
        startScreen.classList.toggle("active");
        gameScreen.classList.toggle("active");
        
    }
   
}