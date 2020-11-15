var calcolaBottone = document.getElementById('bottone');
calcolaBottone.addEventListener("click",
  function() {
    var nomeCognome= document.getElementById('name').value;
    var chilometri = document.getElementById('km').value;
    var anni = document.getElementById('anni').value;
    var prezzoAlChilometro = 0.21;
    var prezzo = (chilometri * prezzoAlChilometro).toFixed(2);
    var prezzoScontanto;
    var messaggio = 'Nessuna offerta'
    if (anni ==  "minorenni") {
      prezzoScontanto =  (prezzo - (prezzo * 0.2)).toFixed(2);
      messaggio = "Sconto minorenni"
      document.getElementById('sconto').innerHTML = prezzoScontanto
    } else if (anni == "senior" ) {
      prezzoScontanto =  (prezzo - (prezzo * 0.4)).toFixed(2);
      messaggio = 'Sconto senior'
      document.getElementById('sconto').innerHTML = prezzoScontanto;
    } else {
      document.getElementById('sconto').innerHTML = prezzo;
    }
    var nomeUtente = document.getElementById('name').value;
    document.getElementById('nome_utente').innerHTML= nomeUtente;
    document.getElementById('offerta').innerHTML = messaggio;

    var numeroCarrozza = Math.floor(Math.random() * 9 ) + 1;
    document.getElementById('carrozza').innerHTML = numeroCarrozza;

    var numeroCP = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById('CP').innerHTML = numeroCP;

    var biglietto = document.getElementById('dati_biglietto');
    biglietto.classList.remove('hidden');
    biglietto.classList.add('show');

    var gifHidden = document.getElementById('gif');
    gifHidden.className = 'hidden';
  }
);

var calcolaAnnulla = document.getElementById('annulla')
calcolaAnnulla.addEventListener("click",
  function() {
    document.getElementById('name').value =" ";
    document.getElementById('km').value =" ";
    document.getElementById('anni').value =" ";
    document.getElementById('offerta').innerHTML = " ";
    document.getElementById('sconto').innerHTML = " ";
    document.getElementById('nome_utente').innerHTML= " ";
    document.getElementById('offerta').innerHTML = " ";
    document.getElementById('carrozza').innerHTML = " ";
    document.getElementById('CP').innerHTML = " ";

    var biglietto = document.getElementById('dati_biglietto');
    biglietto.classList.remove('show');
    biglietto.classList.add('hidden');

    var gifHidden = document.getElementById('gif');
    gifHidden.className = 'show';
  }
);
