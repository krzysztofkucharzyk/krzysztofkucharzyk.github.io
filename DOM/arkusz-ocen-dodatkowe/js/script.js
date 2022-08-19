let uczen = document.querySelectorAll("[id^='uczen']");
// let input = document.querySelectorAll('input[type="number"]');
let mat = document.getElementsByClassName('matematyka');
let pol = document.getElementsByClassName('polski');
let bio = document.getElementsByClassName('biologia');
let geo = document.getElementsByClassName('geografia');
let fiz = document.getElementsByClassName('fizyka');
let che = document.getElementsByClassName('chemia');
let inf = document.getElementsByClassName('informatyka');
let sredniaInput = document.getElementsByClassName('srednia');
// let sredniaInput = document.querySelectorAll('span[class="srednia"]');
// let sredniaInput = document.querySelectorAll("[id^='uczen']").getElementsByClassName('srednia');
let dodatkowe = document.getElementsByClassName('zajecia-dodatkowe');

for (i = 0; i < uczen.length + 1; i++) {

    let sredniaOcen = [parseFloat(mat[i].value) + parseFloat(pol[i].value) + parseFloat(bio[i].value) + parseFloat(geo[i].value) + parseFloat(fiz[i].value) + parseFloat(che[i].value) + parseFloat(inf[i].value)] / 7;

    let valueRound = sredniaOcen.toFixed(1);

    sredniaInput[i].innerHTML= valueRound;
    


    console.log(valueRound);

}