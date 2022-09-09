$(document).ready(function(){

let kursBtc = 0;

   $('#btn').click(function(){
    $.getJSON('https://api.blockchain.com/v3/exchange/tickers')
        .done(function(data){
            
            let btc = $.grep(data, function(v){return v.symbol === 'BTC-USD'}); // Tworzy tablice
            
            let ostatniaWartosc = btc[0].last_trade_price;

            console.log(btc[0].last_trade_price);
            console.log(btc);

            if($('p')) {

                $("p").text(ostatniaWartosc);
                console.log('paragraf istnieje');
            // $('.btcLow').append(low);
            } else {
                let high = $("<p></p>").text(ostatniaWartosc);
        
                $('.btcHigh').append(high);
            }

            

            if (kursBtc === ostatniaWartosc) {
                console.log('kurs jest równy');
            } else if ( kursBtc > ostatniaWartosc) {
                console.log('kurs sie zmiejszył');
            } else if ( kursBtc < ostatniaWartosc) {
                console.log('kurs się zwiększył');
            }

            kursBtc = ostatniaWartosc;



            // let previousValue = [];
            // let currentValue = [];

                // $.each(btc, function(key, value){                               // Tworzy obiekt
                //     let currentValue = value.last_trade_price;

                    // let previousValue  = [value.last_trade_price];
                    // let currentValue = [];
                    // currentValue.splice(0, 1, previousValue);

                    // for (i in btc) {
                    //     previousValue.push(btc[i].last_trade_price);
                    // }

                    // let newPreviouseValue = previousValue;

                    // let cc = [].concat(newPreviouseValue, previousValue);


                    // let previousValue  = [];
                    // let currentValue = [];

                    // previousValue.push(value.last_trade_price);
                    // currentValue.concat(previousValue);

                    // let old = storedValue.findIndex(x => x === currentValue) - 1;


                    // console.log(previousValue);
                    // console.log(cc);
                    // console.log(currentValue);


                    // console.log(btc);
                    // console.log(value);
                    
                    // });
                

            
            
        });
   });


});









// last_trade_price: 19341.96​
// price_24h: 18756.06
// symbol: "BTC-USD"

// Zmienna do przechowywania obecnej wartości
// tablica do przechowywania obecnej wartości
//tablica do przechowywania poprzedniej wartosci
// porównać currentValue czy jest większe lub mniejsze i dodać do tablicy ??? ?_?