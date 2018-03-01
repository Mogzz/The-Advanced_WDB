const fullname = document.querySelector("#fullname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const avatar = document.querySelector("#avatar");
const btn = document.querySelector("#btn");
const url = 'https://randomuser.me/api/';

//putt all this in a click event on the button
btn.addEventListener("click", function() {

  fetch(url)
    .then(handleErrors)
    .then(function(request) {
      //need to parse the JSON here
      // console.log(request);
      return request.json();
    })
    .then(buildProfile)
    .catch(function(err) {
      console.log(err);
    })
});

function buildProfile(request) {
  const req = request.results[0];
  //use the JSON info to append the HTML
  console.log(request);
  //change the names
  fullname.innerHTML = req.name.first + ' ' + req.name.last;
  //change username
  username.innerHTML = req.login.username;
  //change picture
  avatar.src = req.picture.medium;
  //change Email
  email.innerHTML = req.email;
  //change city
  city.innerHTML = req.location.city;
}

function handleErrors(request) {

  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}