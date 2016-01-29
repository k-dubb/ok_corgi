var express = require('express');
var router = express.Router();
var Dog = require('../models/dog')

function randomDog(dogsArray){
  var dogs = dogsArray;
  return dogs[Math.floor(Math.random()*dogs.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {

  Dog.find({}, 'dog', function(err,data){
    if (err) console.log(err);

    var dog = randomDog(data);
  })


  res.render('index', { title: 'OKC', dog: dog.dog });
});

module.exports = router;
