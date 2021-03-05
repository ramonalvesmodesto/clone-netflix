$( document ).ready(function() {
    var btnMenuMobile = $('.btn-menumobile');
  
    $(btnMenuMobile).on('click', function() {
      $('#menu-esquerda ul').toggleClass('open');
    });
  });



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            item:1
        },
        467:{
            items:2
        },
        655:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function popupabrir() {
    document.getElementById('popup').style.display = 'block';

}

function popupfechar() {
    document.getElementById('popup').style.display = 'none';

}

// function open() {
//     document.getElementById('open').style.display = 'block';

// }



