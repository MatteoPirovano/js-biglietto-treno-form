// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)


//     var prezzoAlChilometro = 0.21;
//     var minorenni = 18;
//     var anziani = 65;
//     var sconto1 = 20;
//     var sconto2 = 40;
//     var prezzoScontanto;
//     var prezzo;
//     prezzo = (chilometri * prezzoAlChilometro).toFixed(2);
//
//     if (!isNaN(anni) && !isNaN(chilometri)) {


//
//   }
// )
var calcolaBottone = document.getElementById('bottone')
calcolaBottone.addEventListener("click",
  function() {
    var nomeCognome= document.getElementById('name').value;
    console.log(nomeCognome);
    var chilometri = document.getElementById('km').value;
    console.log(chilometri);
    var anni = document.getElementById('anni').value;
    console.log(anni);
    var prezzoAlChilometro = 0.21;
    var prezzo = (chilometri * prezzoAlChilometro).toFixed(2);
    console.log(prezzo)
    var prezzoScontanto;

    if (anni ==  "minorenni") {
      prezzoScontanto =  (prezzo - (prezzo * 0.2)).toFixed(2);
      document.getElementById('sconto').innerHTML = prezzoScontanto;
    } else if (anni == "senior" ) {
      prezzoScontanto =  (prezzo - (prezzo * 0.4)).toFixed(2);
      document.getElementById('sconto').innerHTML = prezzoScontanto;
    } else {
      document.getElementById('sconto').innerHTML = prezzo;
    }
  }
)
