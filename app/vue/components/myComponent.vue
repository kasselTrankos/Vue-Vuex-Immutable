<style>
.red{
  color: #f00;
}
</style>

<template>
	<div class="row">
    	<h1 class="col6 red  col-md-offset-4">{{ msg }}!!!!</h1>
    	<form class="col4 col-md-offset-6">
    		<div class="checkbox">
		    <label>
		      <input type="checkbox" v-model="checked"> {{title}}
		    </label>
		  </div>
    	</form>
    </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Mi componente',
      checked: true,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
}
</script>