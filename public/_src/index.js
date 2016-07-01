import './_sass/main.sass'

import smoothScroll from 'smooth-scroll'
import Vue from 'vue'
import VueRouter from 'vue-router'

//-------------------------------------------------------------------
// VUE APP
//-------------------------------------------------------------------

Vue.use(VueRouter)

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/': {
      component: require('./_vue/Shell.vue'),
      subRoutes: {
        '/': {
          component: require('./_vue/Photos.vue')
        }
      }
    }
})

router.start(App, 'body')

//-------------------------------------------------------------------
// FLAVOR FUNCTIONS
//-------------------------------------------------------------------

import mousewheel from 'jquery-mousewheel'

// SmoothScroll
var initVendor = function() {
  //scrollAppend();
  //reverseScroll();
  reverseAnimation();
}

// Scroll Append Infinity
var scrollAppend = function(){
  setInterval(appendContent, 10);
  
  var b = $('#photos'),
      tic = 0,
      content = b.html();
  
  function appendContent() {
    if($(window).scrollTop() + $(window).height() * 2 > $(document).height()) {
      b.html(b.html() + b.html());
      tic = tic + 1;
      if(tic == 3) {
        tic = 0;
        $(b).empty();
        $(b).append(content);
      }
    }
  }
}

// Scroll Append Two directions Infinity
var reverseScroll = function(){ 
  var rightHeight = $('.right').height(),
      leftHeight = $('.right').height(),
      chunkHeight = $('.chunk-l').height(),
      wh = window.innerHeight / 35,
      tac = 0,
      initHeight = (leftHeight - chunkHeight),
      b = $('#photos'),
      content = b.html();

      console.log(chunkHeight , initHeight , rightHeight);

  var leftInit = function(){
    $('.left').css('top', -(initHeight) );
  }

  var marginAdd = function(){
    tac = tac + wh;
    $('.right').css('margin-top', -(tac) );
    $('.left').css('margin-top', tac );
    console.log(tac);

    if( tac >= (leftHeight + chunkHeight)){
      tac = 0;
      $(b).empty();
      $(b).append(content);
      leftInit();
      console.log('reset');
    }
  }

  leftInit();

  $('#photos').on( 'DOMMouseScroll mousewheel', function ( event ) {
    marginAdd();
  });
}

// Scroll Append Two directions Infinity
var reverseAnimation = function(){ 
  var rightHeight = $('.right').height(),
      leftHeight = $('.right').height(),
      chunkHeight = $('.chunk-l').height(),
      wh = window.innerHeight / 25,
      tac = 0,
      initHeight = (leftHeight - chunkHeight),
      b = $('#photos'),
      content = b.html();

      console.log(chunkHeight , initHeight , rightHeight);

  var leftInit = function(){
    $('.left').css('top', -(initHeight) );
  }

  var marginAdd = function(){
    tac = tac + wh;
    $('.right').css('margin-top', -(tac) );
    $('.left').css('margin-top', tac );

    if( tac >= (leftHeight + chunkHeight)){
      tac = 0;
      $(b).empty();
      $(b).append(content);
      $('.left').css('top', -(leftHeight));
      $('.right').css('top', chunkHeight);
    }
  }

  leftInit();

  setInterval(function() {
    marginAdd();
  }, 10);

}

// RUN FLAVOR FUNCTIONS

document.addEventListener('DOMContentLoaded', initVendor);
