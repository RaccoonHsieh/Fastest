$(window).on('load', function(){
    $('.prod_el').mousemove(function(){
        $('.prod_el').css({opacity: .6});
        $(this).css({opacity: 1})
    });

    $('.prod_el').mouseleave(function(){
        $('.prod_el').css({opacity: 1})
    });
});