let uczenId = document.querySelectorAll("[id^='uczen']");
let button = document.getElementById('oblicz');

const wyliczenieSredniej = () => {

    for (i = 0; i < uczenId.length; i++) {

        let uczenName = uczenId[i].getElementsByClassName('uczen')[0];
        let przedmioty = uczenId[i].querySelectorAll("[type=number]");
        let przedmiotyIlosc = przedmioty.length;
        let dodatkowe = uczenId[i].getElementsByClassName('zajecia-dodatkowe')[0].value.split(',');

        uczenName.style.backgroundColor = '';

        let suma = 0;

        for (const przedmiot of przedmioty) {
            suma += parseFloat(przedmiot.value);

            dodatkowe.forEach(element => {
                if(przedmiot.className === element && przedmiot.value != 6) {
                    suma += 0.5;
                }
            });

            if (przedmiot.value == 1) {
                uczenName.style.backgroundColor = 'red';
            }
        }
 
        let wynik = (suma / przedmiotyIlosc).toFixed(2);

        if (wynik >= 4.75) {
            uczenName.style.backgroundColor = 'green';
        } 

        let srednia = uczenId[i].getElementsByClassName('srednia')[0];
        srednia.innerHTML = wynik;
    }
    
}


button.addEventListener('click', wyliczenieSredniej);