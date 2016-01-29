var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },

});

// userSchema.methods.sayHello = function() {
//   console.log("Hi, I'm " + this.name + ' and ' + this.favorite + ' is my favorite');
// };

var Dog = mongoose.model('Dog', dogSchema);

// Make this available to our other files
module.exports = Dog;
