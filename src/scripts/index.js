jQuery(document).ready(function ($) {

    $('.homeslider').slick({
        arrows: false,
//        fade: true,
        dots: true
//        variableWidth: true
    });

    $('.quateslider').slick({
        arrows: false,
//        fade: true,
        dots: true
//        variableWidth: true
    });


    var menutabs = $(".submenumenuwrap a");


    $('#menutab-1').css({height: "auto"}).animate({opacity: 1});
    menutabs.first().parent().addClass('submenuactivemenu');

    menutabs.click(function (e) {

        var $this = $(this);

        $this.parent().addClass("submenuactivemenu");
        $this.parent().siblings().removeClass("submenuactivemenu");

        var tab = $this.attr("href");
        $(".menutabs").not(tab).css({display: "none", opacity: 0, height: 0});
        $(tab).show().css({height: "auto"}).animate({opacity: 1});

        e.preventDefault();

    });

    $('.my-form').on('keydown', '#my-input', function (e) {
        var key = e.which;
        switch (key) {
            case 13: // enter
                $('.cover').fadeIn();
                break;
            default:
                break;
        }
    });
    $('.cover').on('click', function (e) {
        $(this).fadeOut();
    });
});