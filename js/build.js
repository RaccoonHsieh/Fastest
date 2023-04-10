//----------- accordion -----------
let button = false;

$(document).ready(function(){
    $('.build-car-plus-head').click(function(){

        $('.build-car-plus-head').removeClass('active');
        $(this).removeClass('active');
        $('.build-car-plus-content').slideUp();

        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
            $(this).addClass('active');
        };
    });
});

// ------- 換顏色 ------
$(function(){
    // $('.build-car-plus-head').click(function(){
        // let Text = $(this).closest('.build-car-plus-text');
        // let Head = Text.find('.build-car-plus-head');
        
        // console.log($('.build-car-plus-content').index());

        $('.color-btn').click(function(){

            $(this).addClass('choice');
            $('.build-img').eq(1).css({opacity: 0});
            $('.build-img').eq(0).css({opacity: 1});
            $('.color-btn').eq(1).removeClass('choice');

                if( $(this).index() == 2 ){
                    $(this).addClass('choice');
                    $('.build-img').eq(1).css({opacity: 1});
                    $('.color-btn').eq(0).removeClass('choice');
                };
        });
    });

// });


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

