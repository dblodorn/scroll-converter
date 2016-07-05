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
  reverseScroll();
}

// Scroll Append Two directions Infinity
var reverseScroll = function(){ 
  var rightHeight = $('.right').height(),
      leftHeight = $('.right').height(),
      chunkHeight = $('.chunk-l').height(),
      rate = 45,
      progress = 0,
      initHeight = (leftHeight - chunkHeight),
      container = $('#photos'),
      content = container.html();

  var positionInit = function(){
    $('.left').css('top', -(initHeight) - chunkHeight );
    $('.right').css('top', chunkHeight );
  }

  var fwdScroll = function(){
    progress = progress + rate;
    $('.right').css('margin-top', -(progress) );
    $('.left').css('margin-top', progress );
    if( progress >= (leftHeight + chunkHeight)){
      progress = 0;
      $(container).empty();
      $(container).append(content);
      positionInit();
    }
  }

  var revScroll = function(){
    progress = progress - rate;
    $('.right').css('margin-top', -(progress) );
    $('.left').css('margin-top', progress );
    if( progress <= 0){
      progress = 0;
    }
  }

  positionInit();

  $(container).bind({'mousewheel DOMMouseScroll onmousewheel touchmove scroll': 
    function(e) {
      if (e.target.id == 'el') return;
      e.preventDefault();
      e.stopPropagation();

      //Determine Direction
      if (e.originalEvent.wheelDelta && e.originalEvent.wheelDelta >= 0) {
        revScroll();
      } else {
        fwdScroll();
      }
    }
  });
}

// RUN FLAVOR FUNCTIONS

document.addEventListener('DOMContentLoaded', initVendor);
