var btn = document.querySelector("#btn");
var picture = document.querySelector('#photo');



//listen for clicks
btn.addEventListener("click", function() {
  //make the request for dog image
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4) {
      if (XHR.status == 200) {
        //store our returned data via JSON parse
        var data = JSON.parse(XHR.responseText);
        //store the url from the data in a variable
        var url = data.message;
        //assign the url to the src of the picture
        picture.src = url;

      } else {
        console.log("error");
      }
    }
  }



  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});