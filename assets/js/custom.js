

// floating menu
var top = $('.thisone').offset().top;
$('.trigger').click(function () {
    $('.thisone').css('position','');
    $('.left2').toggle('slow',function(){
        top = $('.thisone').offset().top;
    });
    
    
});

    
    
    $(document).scroll(function(){
        $('.thisone').css('position','');
        top = $('.thisone').offset().top;
      $('.thisone').css('position','absolute');   $('.thisone').css('top',Math.max(top,$(document).scrollTop()));
    });

