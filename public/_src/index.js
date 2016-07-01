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

// SmoothScroll
var initVendor = function() {
  scrollAppend();
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

// RUN FLAVOR FUNCTIONS

document.addEventListener('DOMContentLoaded', initVendor);
