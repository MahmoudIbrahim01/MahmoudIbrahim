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

/*
// hier onder heb ik allemaal arrys met info over modules en cijfers van thema 1 op school
var resultatenVan = ["Oefeningen", "Praktijk opdracht", "Project", "Gemiddelden"];
var vakken = ["Praktijk", "Realiseren", "Plannen & Ontwerpen", "Tesen & Verbeteren", "Computervaardigheden"];
var Oefeningencifers = [9.3,9.3,9.3,9.2,9.2];
var praktijkopdrachtcijfers = [8.9,8.8,8.5,8.9,8.5];
var projectcijfers = [8.9,9,8.5,8.6,9]; 

//hier onder maak ik een for loop om de tabel te maken en in te vullen
for(i = 0; i < resultatenVan.length; i++)
{
    document.getElementById("cijfersvan").innerHTML += "<th>" + resultatenVan[i] + "</th>";
}

for(i = 0; i < vakken.length; i++)
{
    document.getElementById("table1").innerHTML += "<tr><td>" + vakken[i] + "</td><td>" + Oefeningencifers[i] +
     "</td><td>" + praktijkopdrachtcijfers[i] + "</td><td>" + projectcijfers[i] + "</td></tr>";
}
*/

var gemiddeldeshow1 = false;

// hier onder maak ik een functie om de gemiddelde cijfer te berekenen
function gemiddeldePra(Praktijk)
{
    if(gemiddeldeshow1 == false)
    {
        result = 9.3 + 8.9 + 8.9;
        Praktijk = result/3;
        // hier onder rond ik het getal af
        Praktijkrs = Math.round(Praktijk*10)/10;
        document.getElementById("span1").style.display = "none";
        document.getElementById("gemiddeldePra").innerHTML += Praktijkrs;
        console.log(Praktijk);
        gemiddeldeshow1 = true;
    }
    else
    {
    }
}

var gemiddeldeshow2 = false;
function gemiddeldeRea(Realiseren)
{
    if(gemiddeldeshow2 == false)
    {
        result = 9.3 + 8.8 + 9;
        Realiseren = result/3;
        Realiserenrs = Math.round(Realiseren*10)/10;
        document.getElementById("span2").style.display = "none";
        document.getElementById("gemiddeldeRea").innerHTML += Realiserenrs;
        console.log(Realiseren);
        gemiddeldeshow2 = true;
    }
    else
    {
    }
}

var gemiddeldeshow3 = false;
function gemiddeldePo(Plannen)
{
    if(gemiddeldeshow3 == false)
    {
        result = 9.3 + 8.5 + 8.5;
        Plannen = result/3;
        Plannenrs = Math.round(Plannen*10)/10;
        document.getElementById("span3").style.display = "none";
        document.getElementById("gemiddeldePo").innerHTML += Plannenrs;
        console.log(Plannen);
        gemiddeldeshow3 = true;
    }
    else
    {
    }
}

var gemiddeldeshow4 = false;
function gemiddeldeTv(Testen)
{
    if(gemiddeldeshow4 == false)
    {
        result = 9.2 + 8.9 + 8.6;
        Testen = result/3;
        Testenrs = Math.round(Testen*10)/10;
        document.getElementById("span4").style.display = "none";
        document.getElementById("gemiddeldeTv").innerHTML += Testenrs;
        console.log(Testen);
        gemiddeldeshow4 = true;
    }
    else
    {
    }
}

var gemiddeldeshow5 = false;
function gemiddeldeCo(Computer)
{
    if(gemiddeldeshow5 == false)
    {
        result = 9.2 + 8.5 + 9;
        Computer = result/3;
        Computerrs = Math.round(Computer*10)/10;
        document.getElementById("span5").style.display = "none";
        document.getElementById("gemiddeldeCo").innerHTML += Computerrs;
        console.log(Computer);
        gemiddeldeshow5 = true;
    }
    else
    {
    }
}

function gemiddelde_alles()
{
    gemiddeldePra()
    gemiddeldeRea()
    gemiddeldePo()
    gemiddeldeTv()
    gemiddeldeCo()
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
