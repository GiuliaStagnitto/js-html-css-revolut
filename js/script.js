


//
// $('.nav-bar a').click(function(){
//   $('dropdown').removeClass('hide');
//   $('.dropdown').addClass('show');
//
//
// });

// $('').click(function(){
//   $('.dropdown').removeClass('show');
//   $('.dropdown').addClass('hide');
//
// });

$(document).ready(function (){

  $('.ham-menu  i').click(function() {
    $('main').addClass('hide');
    $('.menu-responsive').removeClass('hide');
  });

  $('.top-nav.responsive i').click(function(){
    $('main').removeClass('hide');
    $('.menu-responsive').addClass('hide');
  });
// quando clicco sulle icone a freccetta delle comparire la freccia opposta
  $('div .icone').click(function(){
    var visibile = $('.fas.fa-angle-down').hasClass('hide');

    if (visibile == false) {
      $('.lista').slideDown(2000, function(){
        $('.fas.fa-angle-down').addClass('hide');
      });
    } else {
      $('.lista').slideUp(2000);
      $('.fas.fa-angle-down').removeClass('hide');      
    }
  });

  // $('#bottone').click(function () {
  //       var isVisible = $('#sipario').hasClass('visible');
  //
  //       if(isVisible == false) {
  //         $('#sipario').slideDown(2000, function() {
  //           $('#sipario').addClass('visible');
  //         });
  //       } else {
  //         $('#sipario').slideUp(2000);
  //         $('#sipario').removeClass('visible');
  //       }
  //       console.log(miaFunzione());
  //     }
  //   );
});
