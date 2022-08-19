let button = document.getElementById('oblicz');

let pracownik = document.getElementsByClassName('pracownik');
let czas = document.getElementsByClassName('czas');
let stawka = document.getElementsByClassName('stawka');
let wyplata = document.getElementsByClassName('wyplata');


const przeliczWyplaty = () => {

    for (let i = 0; i < czas.length; i++) {

        let wyplataRazem = (parseInt(czas[i].value) * parseInt(stawka[i].value));
        let premia = ((parseInt(czas[i].value) - 160) * (parseInt(stawka[i].value) * 2));
        let wyplataPremia = wyplataRazem + premia;

        if (parseInt(czas[i].value) < 100) {
            pracownik[i].style.backgroundColor = 'red';
            pracownik[i].style.color = 'white';
        }

        if (parseInt(czas[i].value) <= 160) {
            wyplata[i].innerHTML = `${wyplataRazem} PLN`;
        } else {
            wyplata[i].innerHTML = `${wyplataPremia} PLN (premia: ${premia} PLN)`;
        }
    }
}

const najlepsiPracownicy = () => {

    let najPracownicy = document.getElementById('najlepsi-pracownicy');
    let pracownik = document.getElementsByClassName('pracownik');

    najPracownicy.innerHTML = '';

    let czasInputValue = new Array();

    for (let i = 0; i < czas.length; i++) {
        czasInputValue[i] = czas[i].value + ' ' + pracownik[i].textContent;
    }

    czasInputValue.sort((a, b) => (parseInt(a) > parseInt(b) ? -1 : 1));
      
    for (let i = 0; i < 3; i++) {
        najPracownicy.innerHTML += `<li>${czasInputValue[i]}</li>`;
    }

}

button.addEventListener('click', najlepsiPracownicy)
button.addEventListener('click', przeliczWyplaty);


