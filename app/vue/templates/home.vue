<style>
.red{
  color: #f00;
}
</style>

<template>
	<div class="row">
    	<h1 class="col6 red  col-md-offset-4">{{ msg }}!!!!</h1>
    	<my-component></my-component>
    </div>
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