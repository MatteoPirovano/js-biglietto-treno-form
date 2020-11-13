// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
var nomeCognome= document.getElementById('name');
var chilometri = document.getElementById('km');
var anni = document.getElementById('età').value;
var calcolaBottone = document.getElementById('bottone')
calcolaBottone.addEventListener("click",
  function() {
    var prezzoAlChilometro = 0.21;
    var minorenni = 18;
    var anziani = 65;
    var sconto1 = 20;
    var sconto2 = 40;
    var prezzoScontanto;
    var prezzo;
    prezzo = (chilometri * prezzoAlChilometro).toFixed(2);

    if (!isNaN(anni) && !isNaN(chilometri)) {
      if (anni < minorenni) {
        prezzoScontantosconto =  (prezzo - ((prezzo * sconto1) / 100)).toFixed(2);
        document.getElementById('sconto').innerHTML = prezzoScontantosconto;
      } else if (anni >= anziani) {
        prezzoScontantosconto =  (prezzo - ((prezzo * sconto2) / 100)).toFixed(2);
        document.getElementById('sconto').innerHTML = prezzoScontantosconto;
      } else {
        document.getElementById('sconto').innerHTML = prezzo;
      }
    }

  }
)


// var element=document.getElementById("saluto");
// element.addEventListener('click',  function() {
//   // codice
//  });
