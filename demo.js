// // calculate fibonacci number
// // get bitcoin price
// const axios = require('axios');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// get pitcoin price
// function bt_price() {
//     var url = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json";
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             var json = JSON.parse(xhr.responseText);
//             var price = json.bpi.USD.rate;
//             return price;
//         }
//     }   
//     xhr.send();
// }

// // get bitcoin price with axios
// async function bt_price_axios() {
//     await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
//     .then(function(response) {
//         console.log(response.data.bpi.USD.rate);
//     }
//     ).catch(function(error) {
//         console.log(error);
//     });
// }

// console.log('Bitcoin price', bt_price());
// console.log('Bitcoin price', bt_price_axios());

// warn user evry 5s that his is running out of pancakes
setInterval(function() {
    console.log('Pancakes are running out!');
}, 5000);
