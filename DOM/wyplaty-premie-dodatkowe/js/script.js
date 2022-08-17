let button = document.getElementById('oblicz');

let pracownik = document.getElementsByClassName('pracownik');
let czas = document.getElementsByClassName('czas');
let stawka = document.getElementsByClassName('stawka');
let wyplata = document.getElementsByClassName('wyplata');

let arrNajlepsi = [];
let najlepsi = parseInt(czas[0].value);
        arrNajlepsi.push(najlepsi);
        console.log(arrNajlepsi);

const przeliczWyplaty = () => {

    for (let i = 0; i < czas.length; i++) {

        let wyplataRazem = (parseInt(czas[i].value) * parseInt(stawka[i].value));
        let premia = ((parseInt(czas[i].value) - 160) * (parseInt(stawka[i].value) * 2));
        let wyplataPremia = wyplataRazem + premia;

        if (parseInt(czas[i].value) < 100) {
            pracownik[i].style.backgroundColor = 'red';
        }

        if (parseInt(czas[i].value) <= 160) {
            wyplata[i].innerHTML = `${wyplataRazem} PLN`;
        } else {
            wyplata[i].innerHTML = `${wyplataPremia} PLN (premia: ${premia} PLN)`;
        }

        

    }
}






button.addEventListener('click', przeliczWyplaty);
