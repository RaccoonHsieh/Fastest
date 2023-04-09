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
// let build_img = document.getElementsByClassName('build-img');
// let color_btn = document.getElementsByClassName('color-btn');
// let text = document.getElementsByClassName('text');
// let Head = document.getElementsByClassName('build-car-plus-head');

// console.log(text);
// console.log(text[7]);



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
