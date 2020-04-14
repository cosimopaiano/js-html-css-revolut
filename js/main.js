$(document).ready(function () {

  //variabili
  var dropDown = $('.dropdown');
  var hoverDropDown = $('.with-dropdown');
  
  // menu che appare e scompare con mouse enter/leave
  hoverDropDown.mouseenter(function() {
    hoverDropDown.not($(this)).next('.dropdown').hide();
    $(this).next('.dropdown').show();

  });

  dropDown.mouseleave(function() {
    hoverDropDown.not($(this)).next('.dropdown').hide();
  });


  //variabili per arrow up e down
  var arrow = $('.select-language > i')
  var select = $('.select-language')

  //cambio arrow up e down
  select.click(function(){
    arrow.removeClass("fas fa-angle-down");
    arrow.addClass("fas fa-angle-up");
  })

  select.mouseleave(function(){
    arrow.removeClass("fas fa-angle-up");
    arrow.addClass("fas fa-angle-down");
  })


// chiusura document ready
});
