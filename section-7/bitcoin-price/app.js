var btn = document.querySelector("#btn-submit");
var price = document.querySelector('#price');

btn.addEventListener("click", function() {

  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {

    if (XHR.readyState == 4 && XHR.status == 200) {
      //get JSON data and parse
      var data = JSON.parse(XHR.responseText);
      var usd = data.bpi.USD.rate;
      //append span to show the price in USD
      price.innerHTML = usd;

    }

  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  XHR.send();



});