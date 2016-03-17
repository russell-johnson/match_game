$(document).ready(function() {
  var clickCheck = false;
  var clickOne = null;
  var clickTwo = null;

  $('.grid_box').click(function() {
    $(this).addClass('black-background');
    $(this).find('.number').removeClass('hide').css('color', 'white');
    if (clickCheck) {
      clickTwo = $(this);
      compare();
    } else {
      clickOne = $(this);
    }
    clickCheck = !clickCheck;
  })

  function compare(){
    if(clickOne[0].children[0].innerHTML == clickTwo[0].children[0].innerHTML){
    } else {
      setTimeout(function(){
        clickOne.removeClass('black-background');
        clickTwo.removeClass('black-background');
        clickOne.find('.number').addClass('hide').css('color', 'grey');
        clickTwo.find('.number').addClass('hide').css('color', 'grey');
      }, 300);
    }
  }

});
