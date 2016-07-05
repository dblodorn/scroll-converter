//-------------------------------------------------------------------
// Reverse Scroll
//-------------------------------------------------------------------

define('ReversePanelScroll', ['jquery-mousewheel'], function(mousewheel) {
  
  var ReversePanelScroll = {},
      positionInit = {},
      rightHeight = $('.right').height(),
      leftHeight = $('.right').height(),
      chunkHeight = $('.chunk-l').height(),
      speed = window.innerHeight / 35,
      progress = 0,
      initHeight = (leftHeight - chunkHeight),
      container = $('#photos'),
      content = container.html();

  ReversePanelScroll.init = function(){
    var positionInit = function(){
      $('.left').css('top', -(initHeight) - chunkHeight );
      $('.right').css('top', chunkHeight );
    }
    positionInit();
  }

  // Scroll Forward
  ReversePanelScroll.forwardScroll = function(){
    progress = progress + speed;
    $('.right').css('margin-top', -(progress) );
    $('.left').css('margin-top', progress );

    if( progress >= (leftHeight + chunkHeight)){
      progress = 0;
      $(container).empty();
      $(container).append(content);
      positionInit();
    }
  }

  // Scroll Backward
  ReversePanelScroll.backwardScroll = function(){
    progress = progress + speed;
    $('.right').css('margin-top', -(progress) );
    $('.left').css('margin-top', progress );

    if( progress >= (leftHeight + chunkHeight)){
      progress = 0;
      $(container).empty();
      $(container).append(content);
      positionInit();
    }
  }

  return ReversePanelScroll;

});
