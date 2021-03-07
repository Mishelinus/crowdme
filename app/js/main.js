$(function(){

  $('.slider').slick();
  



 //start tabs 

 $('.presentation__inner .tab').on('click', function(event) {
   var id = $(this).attr('data-id');
      $('.presentation__inner').find('.tab-item').removeClass('active-tab').hide();
      $('.presentation__inner .presentation__tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
   });

 //end tabs 
    
// Обязательно Должен быть самом конце кода. 
//иначе всё, что после него не будет работать, 
//если не найдёт себя в доме 
//var mixer = mixitup('.products__inner-box');

});

