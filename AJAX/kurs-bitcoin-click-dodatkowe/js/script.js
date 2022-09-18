$(document).ready(function () {
    let currentBuy = null
    let currentSell = null
  
    let memoryBuy = null
    let memorySell = null
  
    $("button").click(function () {
      $.getJSON("https://api.blockchain.com/v3/exchange/tickers")
  
        .done(function (data) {
          let btc = $.grep(data, function (v) {
            return v.symbol === "BTC-USD"
          })
           // console.log(currentBuy === null && currentSell === null)
  
          if (memoryBuy != null) {
            currentBuy = btc[0].price_24h
            currentSell = btc[0].last_trade_price
          }
  
          if (currentBuy === null && currentSell === null) {
            currentBuy = btc[0].price_24h
            currentSell = btc[0].last_trade_price
  
            console.log(currentBuy)
  
            $("#currentBuy").text(`Obecne kupno: ${currentBuy}`)
            $("#currentSell").text(`Obecna sprzedaz: ${currentSell}`)
            $("#memoryBuy").text(`Poprzednie kupno: brak danych`)
            $("#memorySell").text(`Poprzednia sprzedaz: brak danych`)
          } else if (currentBuy != null && currentSell != null) {
            $("#currentBuy").text(`Obecne kupno: ${currentBuy}`)
            $("#currentSell").text(`Obecna sprzedaz: ${currentSell}`)
            $("#memoryBuy").text(`Poprzednie kupno: ${memorySell}111111111111111`)
            $("#memorySell").text(`Poprzednia sprzedaz: ${memorySell}1111111111111111`
            )
          }
  
      
          memoryBuy = currentBuy
          memorySell = currentSell
        })
  
        .fail(function (error) {
          console.error(error)
        })
    })
  })


// $(document).ready(function(){

// let kursBtc = 0;

//    $('#btn').click(function(){
//     $.getJSON('https://api.blockchain.com/v3/exchange/tickers')
//         .done(function(data){
            
//             let btc = $.grep(data, function(v){return v.symbol === 'BTC-USD'}); // Tworzy tablice
            
//             let ostatniaWartosc = btc[0].last_trade_price;

//             console.log(btc[0].last_trade_price);
//             console.log(btc);

//             $('p').empty();
          
//             let high = $("<p></p>").text(ostatniaWartosc);
//             // let low = $("<p></p>").text(value.price_24h);
        
//             $('.btcHigh').append(high);
//             // $('.btcLow').append(low);

//             if (kursBtc === ostatniaWartosc) {
//                 $('p').toggleClass('fa fa-minus');
                
//                 console.log('kurs jest równy');

//             } else if ( kursBtc > ostatniaWartosc) {
//                 $('p').toggleClass('fa fa-arrow-down');
                
//                 console.log('kurs sie zmniejszył');
//             } else if ( kursBtc < ostatniaWartosc) {
//                 $('p').toggleClass('fa fa-arrow-up');

//                 console.log('kurs się zwiększył');
//             }

//             kursBtc = ostatniaWartosc;

//             console.log(ostatniaWartosc);


//             let previousValue = [];
//             let currentValue = [];

//                 $.each(btc, function(key, value){                               // Tworzy obiekt
//                     let currentValue = value.last_trade_price;

//                     let previousValue  = [value.last_trade_price];
//                     let currentValue = [];
//                     currentValue.splice(0, 1, previousValue);

//                     for (i in btc) {
//                         previousValue.push(btc[i].last_trade_price);
//                     }

//                     let newPreviouseValue = previousValue;

//                     let cc = [].concat(newPreviouseValue, previousValue);


//                     let previousValue  = [];
//                     let currentValue = [];

//                     previousValue.push(value.last_trade_price);
//                     currentValue.concat(previousValue);

//                     let old = storedValue.findIndex(x => x === currentValue) - 1;


//                     console.log(previousValue);
//                     console.log(cc);
//                     console.log(currentValue);


//                     console.log(btc);
//                     console.log(value);
                    
//                     });
                

            
            
//         });
//    });


// });









// last_trade_price: 19341.96​
// price_24h: 18756.06
// symbol: "BTC-USD"

// Zmienna do przechowywania obecnej wartości
// tablica do przechowywania obecnej wartości
//tablica do przechowywania poprzedniej wartosci
// porównać currentValue czy jest większe lub mniejsze i dodać do tablicy ??? ?_?