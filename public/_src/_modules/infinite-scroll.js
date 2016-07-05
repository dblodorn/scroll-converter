//-------------------------------------------------------------------
// Reverse Scroll
//-------------------------------------------------------------------

define('infiniteScroll', function() {
  
  var infiniteScroll = function(){
    setInterval(appendContent, 10);
    
    var container = $('#photos'),
        content = container.html(),
        tic = 0;
    
    function appendContent() {
      if($(window).scrollTop() + $(window).height() * 2 > $(document).height()) {
        container.html(container.html() + container.html());
        tic = tic + 1;
        if(tic == 3) {
          tic = 0;
          $(container).empty();
          $(container).append(content);
        }
      }
    }
  }

  return infiniteScroll;

});
