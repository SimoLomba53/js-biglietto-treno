//CHIEDERE A UTENTE NUMERO KM CHE VUOLE PERCORRERE
//CHIEDERE UTENTE L'ETA
//CALCOLARE PREZZO TOTALE SEGUENDO QUESTE REGOLE:
//-PREZZO BIGLIETTO 0.21 EURO A KM
//20% DI SCONTO PER I MINORENNI
//40% DI SCONTO OVER 65
//PREZZO FINALE CON MASSIMO 2 DECIMALI

//NUMERO KM 
const kmnumber=prompt('Quanti km vuoi percorrere?');
console.log('Totale Kilometri:', kmnumber);
//ETA'
const eta = prompt('Quanti anni hai?');
console.log('Anni:', eta);
//PREZZO SENZA SCONTO
let pricenosale = (kmnumber * 0.21);
console.log('Prezzo senza sconto:', pricenosale)
//SCONTI
let price=pricenosale;

if (eta < 18){
    price = (price - (pricenosale / 100 * 20));
    console.log(price.toFixed(2));
}
 
if(eta > 65)
{
    price = (price - (pricenosale / 100 * 40));
    console.log(price.toFixed(2));
}

//IMPORT PRICE IN HTML
const prezzofinale = `Il tuo prezzo sarà: ${price} €`;
console.log(prezzofinale);
const prezzofinito=document.getElementById('finalprice');
prezzofinito.innerHTML=prezzofinale;

