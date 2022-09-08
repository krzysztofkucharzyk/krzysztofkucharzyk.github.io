$(document).ready(function(){

   $('#btn').click(function(){
    $.getJSON('https://api.blockchain.com/v3/exchange/tickers')
        .done(function(data){
            let storedValue = [];
            let btc = $.grep(data, function(v){return v.symbol === 'BTC-USD'}); 
                
            // console.log(btc);

                $.each(btc, function(key, value){
                    let currentValue = value.last_trade_price;
                    storedValue.push(currentValue);
                    // let old = storedValue.findIndex(x => x === currentValue) - 1;
                    


                    console.log(storedValue);
                    console.log(currentValue);
                    console.log(btc);
                    console.log(value);
                    
                    console.log(storedValue[old]);
                });
                
            
            
            
        });
   });


});


// let high = $("<p></p>").text(value.last_trade_price).append($('#btcHigh'));
//                     let low = $("<p></p>").text(value.price_24h);
        
//                     $('.btcHigh').append(high);
//                     $('.btcLow').append(low);


// last_trade_price: 19341.96​
// price_24h: 18756.06
// symbol: "BTC-USD"

// Zmienna do przechowywania obecnej wartości
// tablica do przechowywania obecnej wartości
//tablica do przechowywania poprzedniej wartosci
// porównać currentValue czy jest większe lub mniejsze i dodać do tablicy ??? ?_?