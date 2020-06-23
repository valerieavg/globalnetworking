(function() {
    //Con el EFI aseguramos que el código se ejecute una sola vez.
    "use strict";
    //Al cargar la pagina
    barraF();
})
//Menu fijo
$(window).scroll(function() {
    barraF();
});
//Menu Responsive
$('.menu-movil').on('click', function() {
    $('.navegacion-principal').slideToggle(); //slideToggle pone hide() y show() con animación
    //console.log("Diste click")
});

function barraF() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight() /* innerHeight() altura con padding y margin*/

    if (scroll > windowHeight) {
        $('.barra').addClass('fixed');
        $('body').css({ 'margin-top': barraAltura + 'px' });
    } else {
        $('.barra').removeClass('fixed');
        $('body').css({ 'margin-top': '0px' });
    }
}