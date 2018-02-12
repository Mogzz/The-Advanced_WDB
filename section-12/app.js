//create function constructor for a person with first name,
//last name, fav color and fav number

var Person = function(firstname, lastname, favColor, favNumber) {
  return new Person.init(firstname, lastname, favColor, favNumber);
}

//function constructor
Person.init = function(firstname, lastname, favColor, favNumber) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.favNumber = favNumber;
  this.favColor = favColor;
  this.family = [];
}

Person.init.prototype = {

  fullName: function() {
    return this.firstname + ' ' + this.lastname;
  },

  addToFamily: function(obj) {
    if (obj instanceof this.init === true && this.family.indexOf(obj === -1)) {
      this.family.push(obj);
    } else {
      throw "";
    }
    return this.family.length;
  },


}
//reverse string method
String.prototype.reverse = function() {
  let newStr = "";
  for (var i = this.length - 1; i >= 0; i--) {
    newStr += this[i];
  }
  return newStr;
}