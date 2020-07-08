
$('.ham-menu  i').click(function() {
  $('main').addClass('hide');
  $('.menu-responsive').removeClass('hide');

});

$('.top-nav.responsive i').click(function(){
  $('main').removeClass('hide');
  $('.menu-responsive').addClass('hide');
});


$('.nav-bar a').click(function(){
  $('.dropdown').removeClass('hide');
  $('.dropdown').addClass('show');

});

$('').click(function(){
  $('.dropdown').removeClass('show');
  $('.dropdown').addClass('hide');

});
