//----------------------------/
//                            /
//           Scroll           /
//                            /
//----------------------------/ 

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


//----------------------------/
//                            /
//         Carrosel           /
//                            /
//----------------------------/ 

$(document).ready(function(){
    $('.carousel-portfolio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
});


