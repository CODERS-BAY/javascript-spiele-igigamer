function addPopUp (text){
    //div id="popUp"> Du hast gewonnen<button>Ok</button></div>

    //clickHandler/ Eventlistener

    //css. -absolute

    let myPopup = document.createElement("div");
    myPopup.setAttribute("id", "popUp");
    myPopup.append(text);

    let button = document.createElement("button");

    if(reload)
        button.addEventListener("click", reloadPage);

    else    
        button.addEventListener("click", closePopUp);

    




    button.append("ok");

    myPopup.append(button);

    document.getElementsByTagName("body")[0].append(myPopup);



}

function reloadPage(){
    location.reload();
}

function closePopUp(){
    popUp.remove();
}