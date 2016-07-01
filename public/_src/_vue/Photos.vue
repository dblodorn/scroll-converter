<template lang="jade">
  section#photos
    ul#col-left
      li(v-for="photo_l in photos_left" v-bind:style="{ backgroundImage: 'url(' + photo_l.image + ')' }")
    ul#col-right
      li(v-for="photo_r in photos_right" v-bind:style="{ backgroundImage: 'url(' + photo_r.image + ')' }")
</template>

<script>
  export default {
    data () {
      return {
        photos_left: [
          { image: 'imgs/photos-left/photo-l-01.png' },
          { image: 'imgs/photos-left/photo-l-02.png' },
          { image: 'imgs/photos-left/photo-l-03.png' },
          { image: 'imgs/photos-left/photo-l-04.png' },
          { image: 'imgs/photos-left/photo-l-05.png' }
        ],
        photos_right: [
          { image: 'imgs/photos-right/photo-r-01.png' },
          { image: 'imgs/photos-right/photo-r-02.png' },
          { image: 'imgs/photos-right/photo-r-03.png' },
          { image: 'imgs/photos-right/photo-r-04.png' },
          { image: 'imgs/photos-right/photo-r-05.png' }
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"
    
  section#photos
    @extend %clearfix
    display: block
    min-height: 100vh
    width: 100vw
    z-index: 10
    ul
      width: 50vw
      float: left 
      position: relative
      li
        @extend %full-bg
        width: 100%
        height: 100vh

</style>