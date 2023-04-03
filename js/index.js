$(window).on('load', function(){
    $('.prod_el').mousemove(function(){
        $('.prod_el').css({opacity: .6});
        $(this).css({opacity: 1})
    });

    $('.prod_el').mouseleave(function(){
        $('.prod_el').css({opacity: 1})
    });
});

//------ mobile ------
let viewport = $(window).width();

//------ 漢堡線click後出現選單 ------

let burger = false; //關閉時

$(window).on('load', function(){
    if(viewport <= 414){
        $('.burger').click(function(){
            if( burger == false ) {
                $('.burger').addClass('open'),
                $('.burger').addClass('openbutton'),
                // $('.nav_el').css({opacity: 1}),
                $('.nav_el').slideToggle();
                burger = true;
            }else{
                $('.burger').removeClass('open'),
                $('.burger').removeClass('openbutton'),
                $('.nav_el').slideToggle();

                burger = false;
            }
        });
    }
});
