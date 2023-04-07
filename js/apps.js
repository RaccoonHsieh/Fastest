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


        // if( button == false ) {
        //     $('.apps-qa-content').slideUp();
        //     $(this).next().slideDown();
        //     button = true;
        // }else{
        //     $(this).next().slideUp();
        //     button = false;
        // };

    });
});

