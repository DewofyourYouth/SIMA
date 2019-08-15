/**
 * 
 * Copyright (c) Jacob Shore
 * 
 */


$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoWidth:true,
        autoplayTimeout:3000,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
  
    
    $('.doc-pic').hover(function(){
        $(this).addClass('mouse-over', 'slow');
    }, function(){
        $(this).removeClass('mouse-over', 'slow');
    });

    $('.question').click(function(){
        $(this).toggleClass('show-answer');
        if($(this).hasClass('show-answer')){
          $(this).children('.q-container').children('.icon').text('−');
        } else {
          $(this).children().children('.icon').text('+');
        }
      })


});
