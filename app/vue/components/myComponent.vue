<style>
.red{
  color: #f00;
}
</style>

<template>
	<div class="row">
		<div class="row">
	    	<h4 class="col-md-6  col-md-offset-4">{{ msg }}!!!!</h4>
	    </div>
	    <div class="row">
	    	<form class="col-md-4 col-md-offset-2">
	    		<div class="checkbox">
			    <label>
			      <input type="checkbox" v-model="checked"> {{title}}
			    </label>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">{{iLabel}}:</label>
			    <input type="email" v-model="vAkira" class="form-control col-md-4" id="exampleInputEmail1" v-bind:placeholder="iLabel">
			  </div>
	    	</form>
	    </div>
	    <div class="row">
	    	<p class="text-primary col-md-6 col-md-offset-6">{{vAkira}}</p>
	    </div>
	</div>
</template>
<script>
export default {
  data () {
    return {
    	vAkira: '',
    	iLabel: 'Akira',
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