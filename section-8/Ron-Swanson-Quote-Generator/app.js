var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quote = document.querySelector('#quote');
const xhrBtn = document.querySelector('#xhr');
const fetchBtn = document.querySelector('#fetch');
const axiosBtn = document.querySelector('#axios');
// xhr
//select the button and click event
xhrBtn.addEventListener('click', function() {

  //new xhr request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    //if ready state is good and status code good..
    if (XHR.readyState == 4 && XHR.status == 200) {
      //parse our json data
      var data = JSON.parse(XHR.responseText);
      //append our quote to the paragraph
      quote.innerText = data;
    }
  }

  XHR.open('GET', url);
  XHR.send();

});


// Fetch
fetchBtn.addEventListener('click', function() {

  //fetch the url
  fetch(url)
    //handle errors
    .then(function(result) {
      if (!result.ok) {
        //if the result is not ok, throw status code error
        throw Error(result.status);
      }
      //else return the result
      return result;
    })
    .then(function(result) {
      //now parse the JSON
      return result.json();
    })
    .then(function(result) {
      //add json data to document
      quote.innerText = result;
    })
    .catch(function(err) {
      console.log(err);
    })


});
// jQuery
//click on query button
$('#jquery').click(function() {
  //fetch the json
  $.getJSON(url)
    .done(function(data) {
      $('#quote').text(data);
    })
    .fail(function(err) {
      console.log(err);
    })


});

// Axios
axiosBtn.addEventListener('click', function() {
  //fetch data with Axios
  axios.get(url)
    //add quote to document
    .then(function(data) {
      quote.innerText = data.data;
    })
    .catch(function(err) {
      if (err.response) {
        console.log("Problem With Response ", err.response.status);
      } else if (err.request) {
        console.log("Problem With Request!");
      } else {
        console.log('Error', err.message);
      }
    })

});