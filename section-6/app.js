var arr = [1, 2, 3, 4, 5, 6]
//===================
// CALLBACKS
//===================
function forEach(arr, callback) { //pass in the array and the call back
  for (var i = 0; i < arr.length; i++) { //loop through array
    callback(arr[i], i, arr); //the callback takes the item, index, and array
  }
}

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    } else {
      return -1;
    }
  }
}

findIndex(arr, function(a) {

});

//Implement function countDown -- accept one parameter for time in seconds
function countDown(time) {
  //use set interval for count down
  var count = setInterval(function() {
    //console log the count down
    time--; //decrease time each interval
    console.log("Timer: " + time);
    //if time = 0 then print Ring Ring Ring and clearInterval
    if (time === 0) {
      console.log("Ring Ring Ring!!!");
      clearInterval(count);
    }
  }, 1000);
}
//