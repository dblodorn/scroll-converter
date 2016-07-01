<template lang="jade">
  section#photos
    ul.left
      li.chunk-l(v-for="photo_l in photos_left" v-bind:style="{ backgroundImage: 'url(' + photo_l.image + ')' }")
    ul.right
      li.chunk-r(v-for="photo_r in photos_right" v-bind:style="{ backgroundImage: 'url(' + photo_r.image + ')' }")
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
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    display: block
    height: 100vh
    width: 100vw
    z-index: 10
    ul
      width: 50vw
      display: block 
      position: absolute
      li
        @extend %full-bg
        width: 100%
        height: 100vh
    .left
      left: 0
    .right
      right: 0

</style>