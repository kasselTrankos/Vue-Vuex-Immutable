<style lang="stylus">
.red
  color #f00
</style>

<template>
    <div class="red">Hello, {{ msg }}!</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>