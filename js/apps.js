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
    var slideCount = $('.slider ul li').length;//3
    var slideWidth = $('.slider ul li').width();//33.333%
    var slideHeight = $('.slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;//100%

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
    
  



