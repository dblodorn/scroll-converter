//-------------------------------------------------------------------
// Reverse Scroll
//-------------------------------------------------------------------

define('reverseAnimation', function(){
  
  var reverseAnimation = {},
      rightHeight = $('.right').height(),
      leftHeight = $('.right').height(),
      chunkHeight = $('.chunk-l').height(),
      speed = 35,
      progress = 0,
      initHeight = (leftHeight - chunkHeight),
      container = $('#photos'),
      content = container.html();

  reverseAnimation.init = function(){ 

    var positionInit = function(){
      $('.left').css('top', -(initHeight) );
    }

    leftInit();

    var marginAdd = function(){
      tac = tac + wh;
      $('.right').css('margin-top', -(tac) );
      $('.left').css('margin-top', tac );

      if( tac >= (leftHeight + chunkHeight)){
        speed = 0;
        $(container).empty();
        $(container).append(content);
        $('.left').css('top', -(leftHeight));
        $('.right').css('top', chunkHeight);
      }
    }

    setInterval(function() {
      marginAdd();
    }, 10);

  }

  return reverseAnimation;

});
