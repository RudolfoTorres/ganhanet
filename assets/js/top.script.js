$(document).ready(function(){

    var btn = $("#back-to-top");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > 0) {
            $('#back-to-top').removeClass('mostra');
        } else {
            $('#back-to-top').addClass('mostra');
        }
    });

    btn.click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
    });

});