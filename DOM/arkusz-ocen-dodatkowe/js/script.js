let uczenId = document.querySelectorAll("[id^='uczen']");
let button = document.getElementById('oblicz');

const wyliczenieSredniej = () => {

    for (i = 0; i < uczenId.length; i++) {

        let uczenName = uczenId[i].getElementsByClassName('uczen')[0];
        let przedmioty = uczenId[i].querySelectorAll("[type=number]");
        let przedmiotyIlosc = przedmioty.length;
        let dodatkowe = uczenId[i].getElementsByClassName('zajecia-dodatkowe')[0].value.split(',');

        let suma = 0;

        for (const przedmiot of przedmioty) {
            suma += parseFloat(przedmiot.value);

            dodatkowe.forEach(element => {
                if(przedmiot.className === element && przedmiot.value != 6) {
                    suma += 0.5;
                }
            });

            if (parseFloat(przedmiot.value) == 1) {
                uczenName.style.backgroundColor = 'red';
            }
        }
 
        let wynik = (suma / przedmiotyIlosc).toFixed(2);

        let srednia = uczenId[i].getElementsByClassName('srednia')[0];
        srednia.innerHTML = wynik;

        if (dodatkowe[i].value === 'chemia' && parseFloat(che[i].value) < 6) {
            let chePodwyzszona = parseFloat(che[i].value) + podwyzszenieOceny;
            che[i].value = chePodwyzszona.toFixed(1);
        }

        if (dodatkowe[i].value === 'informatyka' && parseFloat(inf[i].value) < 6) {
            let infPodwyzszona = parseFloat(inf[i].value) + podwyzszenieOceny;
            inf[i].value = infPodwyzszona.toFixed(1);
        }

        let sredniaOcen = [parseFloat(mat[i].value) + parseFloat(pol[i].value) + parseFloat(bio[i].value) + parseFloat(geo[i].value) + parseFloat(fiz[i].value) + parseFloat(che[i].value) + parseFloat(inf[i].value)] / divInputLen;

        sredniaInput[i].innerHTML = sredniaOcen.toFixed(2);
        
        

    }

button.addEventListener('click', wyliczenieSredniej);