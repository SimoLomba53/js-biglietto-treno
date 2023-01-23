//CHIEDERE A UTENTE NUMERO KM CHE VUOLE PERCORRERE
//CHIEDERE UTENTE L'ETA
//CALCOLARE PREZZO TOTALE SEGUENDO QUESTE REGOLE:
//-PREZZO BIGLIETTO 0.21 EURO A KM
//20% DI SCONTO PER I MINORENNI
//40% DI SCONTO OVER 65
//PREZZO FINALE CON MASSIMO 2 DECIMALI

//NUMERO KM 
const kmnumber=prompt('Quanti km vuoi percorrere?');
console.log(kmnumber);
//ETA'
const età = prompt('Quanti anni hai?');
console.log(età);
//PREZZO SENZA SCONTO
let pricenosale = (kmnumber * 0.21);
console.log(pricenosale)
//SCONTI
if (età < 18){
    price = ((pricenosale) - (pricenosale / 100 * 20));
    console.log(price);
}else (età > 65)
{
    price = ((pricenosale) - (pricenosale / 100 * 40));
    console.log(price);
}

//IMPORT PRICE IN HTML
const prezzofinale = `Il tuo prezzo sarà: ${price} €`;

const prezzofinito=document.getElementById('finalprice');
prezzofinito.innerHTML=prezzofinale;