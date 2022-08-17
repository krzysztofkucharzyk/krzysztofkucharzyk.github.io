let czas = document.getElementsByClassName('czas');
let stawka = document.getElementsByClassName('stawka');

for (let i = 0; i < czas.length; i++) {
    for (let j = 0; j < stawka.length; j++) {

        console.log(parseInt(czas[i].value) + parseInt(stawka[j].value));
        
    }
    
}


// for (let i = 0; i < czas.length; i++) {
//     for (let j = 0; j < stawka.length; j++) {

//         let sum = parseInt(czas[i].value) + parseInt(stawka[j].value);
//         document.getElementsByClassName('wyplata').value = sum;
//         // console.log(czas[i].value);
        
//     }
    
// }



