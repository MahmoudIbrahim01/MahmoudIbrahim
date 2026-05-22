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


function emailverzenden()
{
    Email.send({
    SecureToken : "15151a08-df06-4097-963f-a6c7f182d9c5",    
    To : 'mi087399@gmail.com',
    From : "mi087399@gmail.com",
    Subject : "Email van de website",
    Body : "Naam: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value +
    "<br> Telefoonnummer: " + document.getElementById("tel").value
    + "<br> Vraag: " + document.getElementById("text").value,
    })
}

 
const huidigJaar = new Date().getFullYear();
document.getElementById('jaar').textContent = huidigJaar;
