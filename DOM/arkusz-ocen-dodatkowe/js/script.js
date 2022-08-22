let uczenId = document.querySelectorAll("[id^='uczen']");


let mat = document.getElementsByClassName('matematyka');
let pol = document.getElementsByClassName('polski');
let bio = document.getElementsByClassName('biologia');
let geo = document.getElementsByClassName('geografia');
let fiz = document.getElementsByClassName('fizyka');
let che = document.getElementsByClassName('chemia');
let inf = document.getElementsByClassName('informatyka');
let sredniaInput = document.getElementsByClassName('srednia');
let dodatkowe = document.getElementsByClassName('zajecia-dodatkowe');

let button = document.getElementById('oblicz');

let div = document.querySelector("[id^='uczen']");
let divInput = div.querySelectorAll('input[type="number"]');
let divInputLen = div.querySelectorAll('input[type="number"]').length;
let divInputValue = div.querySelectorAll('input[type="number"]')[0].value;

// const liczenieSredniej = (event) => {
    
    for (i = 0; i < uczenId.length +1; i++) {

        const podwyzszenieOceny = 0.5;
        
        // if (!(dodatkowe[i].value == "") && sredniaOcen < 6) {
        //     let ocenaDodatkowa = sredniaOcen + podwyzszenieOceny;
        //     sredniaInput[i].innerHTML = ocenaDodatkowa.toFixed(2);
            
        // }

        if (dodatkowe[i].value === 'matematyka' && parseFloat(mat[i].value) < 6) {
            let matPodwyzszona = parseFloat(mat[i].value) + podwyzszenieOceny;
            mat[i].value = matPodwyzszona.toFixed(1);
        }

        if (dodatkowe[i].value === 'polski' && parseFloat(pol[i].value) < 6) {
            let polPodwyzszona = parseFloat(pol[i].value) + podwyzszenieOceny;
            pol[i].value = polPodwyzszona.toFixed(1);
        }

        if (dodatkowe[i].value === 'biologia' && parseFloat(bio[i].value) < 6) {
            let bioPodwyzszona = parseFloat(bio[i].value) + podwyzszenieOceny;
            bio[i].value = bioPodwyzszona.toFixed(1);
        }

        if (dodatkowe[i].value === 'geografia' && parseFloat(geo[i].value) < 6) {
            let geoPodwyzszona = parseFloat(geo[i].value) + podwyzszenieOceny;
            geo[i].value = geoPodwyzszona.toFixed(1);
        }

        if (dodatkowe[i].value === 'fizyka' && parseFloat(fiz[i].value) < 6) {
            let fizPodwyzszona = parseFloat(fiz[i].value) + podwyzszenieOceny;
            fiz[i].value = fizPodwyzszona.toFixed(1);
        }

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


    // let input = document.querySelectorAll('input[type="number"]');
    // let uczen = document.getElementsByClassName('uczen');
    
    // let inputValue = new Array();

    // for (let i = 0; i < input.length; i++) {
    //     inputValue[i] = input[i].value;
         
    // }
    
    

    

    // console.log(inputValue);



    // for (i = 0; i < input.length; i ++) {
    //     let uczen = document.getElementsByClassName('uczen');
       
    //     let inputValue = input[i].value;
        
    //     if (inputValue.includes(1)) {
    //         uczen[i].style.backgroundColor = 'red';
    //     }

    //     console.log(inputValue);
    // }




// console.log(divInput);

// }

// button.addEventListener('click', liczenieSredniej);