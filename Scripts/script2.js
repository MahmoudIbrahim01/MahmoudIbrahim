/*
    Auteur: Mahmoud Ibrahim 
    Datum: 20-12-2023
    Project CV
*/

// hier onder maak ik een functie om de hamburgermenu zicht baar te maken wanneer je er op klikt en weer niet*/

var menuVis = "show";

function menu()
{
    if(menuVis == "show")
    {
        document.getElementById("menuToggle").style.display= "block";
        menuVis = "hidden";
    }
    else
    {
        document.getElementById("menuToggle").style.display= "none";
        menuVis = "show";
    }
}

const huidigJaar = new Date().getFullYear();
document.getElementById('jaar').textContent = huidigJaar;
