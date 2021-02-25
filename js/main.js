$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})

function popupabrir() {
    document.getElementById('popup').style.display = 'block';

}

function popupfechar() {
    document.getElementById('popup').style.display = 'none';

}



