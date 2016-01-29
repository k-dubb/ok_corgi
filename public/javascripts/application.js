$(function() {
  var savedDogs = localStorage.getItem('likedDogs') || '0';
  var dislikedDogs = localStorage.getItem('disliked') || '0';
  $('.likeddogs').html(savedDogs);
  $('.disliked').html(dislikedDogs);
  var name = $('.dog-name');
  var dogpic = $('.dog-pic').text();

  $('#paw-left').on('click', function(){
    dislikedDogs++;
    localStorage.setItem('disliked', dislikedDogs)

    window.location.reload();



  })

  $('#paw-right').on('click', function(){


    console.log(name.text());
    console.log(dogpic);
    $(".likeddogs").html(name);
    savedDogs++;
    localStorage.setItem('likedDogs', savedDogs);

    window.location.reload();

  });



});
