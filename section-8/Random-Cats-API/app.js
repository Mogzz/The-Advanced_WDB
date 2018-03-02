//click event on button to generate random cat pic
$('#button').click(function() {
  //get the cat photo via getJSON
  $.getJSON('https://random.cat/meow')
    .done(function(data) {
      //when done change the src of the img
      $('#catPhoto').attr("src", data.file);
    })
    .fail(function(err) {
      console.log(err);
    })

});