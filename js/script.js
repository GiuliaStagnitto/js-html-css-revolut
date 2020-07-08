
$(document).ready(function (){

  $('.ham-menu  i').click(function() {
    $('main').addClass('hide');
    $('.menu-responsive').removeClass('hide');
  });

  $('.top-nav.responsive i').click(function(){
    $('main').removeClass('hide');
    $('.menu-responsive').addClass('hide');
  });
// quando clicco sulle icone a freccetta delle comparire la lista
  $('li.padre').click(function(){

    $('.lista').slideUp(2000);
    $('.fas.fa-angle-down').removeClass('hide');
    
      $(this).children('.lista').slideDown(2000, function(){
        $('.fas.fa-angle-down').addClass('hide');
      });

    console.log($(this).children('.lista'));
  });


});
