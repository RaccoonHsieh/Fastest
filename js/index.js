//----------- 首頁第二格 -----------
$(window).on('load', function(){
    $('.prod_el').mousemove(function(){
        $('.prod_el').css({opacity: .6});
        $(this).css({opacity: 1})
    });

    $('.prod_el').mouseleave(function(){
        $('.prod_el').css({opacity: 1})
    });
});

//----------- 首頁第四格 -----------

    $('.map_search').click(function(){
    if(viewport > 414){
        $('.bgi').animate({height: '920px'}, 500),
        $('.location').animate({height: '920px'}, 500),
        $('.map').animate({opacity: 1}, 700)
    }else{
        $('.bgi').animate({height: '750px'}, 500),
        $('.location').animate({height: '750px'}, 500),
        $('.map').animate({opacity: 1}, 700)
        $('.map').css({height: '350px'})
    };
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


