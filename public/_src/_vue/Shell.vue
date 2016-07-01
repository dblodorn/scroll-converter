<template lang="jade">
  header#top
    h1 {{title}}
  router-view
</template>

<script>
  export default {
    data () {
      return {
        title: 'SCROLL'
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">
  
  @import "../_sass/utilities/_utilities.sass"

  header
    @extend %aligner
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    z-index: 10
    padding: 3rem 1rem 0
    z-index: 12000
    pointer-events: none

</style>