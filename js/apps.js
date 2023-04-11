//----------- accordion -----------
let button = false;

$(document).ready(function(){
    $('.apps-qa-head').click(function(){

        $('.apps-qa-head').removeClass('active');
        $(this).removeClass('active');
        $('.apps-qa-content').slideUp();

        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown();
            $(this).addClass('active');
          }
    });
});

//----------- slider -----------
$(document).ready(function() {
    var slideCount = $('.slider ul li').length;
    var slideWidth = $('.slider ul li').width();
    var slideHeight = $('.slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.slider').css({ width: slideWidth, height: slideHeight });
    $('.slider ul').css({ width: sliderUlWidth});
    // $('.slider ul li:last-child').prependTo('.slider ul');
    
    function moveRight() {
      $('.slider ul').animate({
        left: +slideWidth
      }, 1000, function() {
        $('.slider ul li:last-child').prependTo('.slider ul');
        $('.slider ul').css('left', '');
      });
    };
    
    function moveLeft() {
      $('.slider ul').animate({
        left: -slideWidth
      }, 1000, function() {
        $('.slider ul li:first-child').appendTo('.slider ul');
        $('.slider ul').css('left', '');
      });
    };
    
    $('.slider_prev').click(function() {
      moveRight();
    });
    
    $('.slider_next').click(function() {
      moveLeft();
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
    
  



