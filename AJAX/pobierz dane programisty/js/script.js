let btn = document.getElementById('btn');
let daneProgramisty = document.getElementById('dane-programisty');

const getData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then((data) => {

        let imie = document.createElement('p');
        let nazwisko = document.createElement('p');
        let zawod = document.createElement('p');
        let firma = document.createElement('p');

        imie.innerText = `Imię: ${data.imie}`;
        nazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
        zawod.innerText = `Zawod: ${data.zawod}`;
        firma.innerText = `Firma: ${data.firma}`;

        daneProgramisty.appendChild(imie);
        daneProgramisty.appendChild(nazwisko);
        daneProgramisty.appendChild(zawod);
        daneProgramisty.appendChild(firma);

        console.log(data);
    })
}



btn.addEventListener('click', getData);
