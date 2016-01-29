var express = require('express');
var router = express.Router();
var Dog = require('../models/dog')
var jquery = require('jquery');

function randomDog(dogsArray){
  var dogs = dogsArray;
  return dogs[Math.floor(Math.random()*dogs.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {

  Dog.find({}, 'name url', function(err,data){
    if (err) console.log(err);

    var dog = randomDog(data);

    res.render('index', { title: 'OKC', name: dog.name, url: dog.url});
  })

});

module.exports = router;
