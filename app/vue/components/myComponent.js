import Vue from 'vue';
import tpl from'./myComponent.vue';
Vue.component('myComponent', {
    render (h) {
	    return <div class="row">
	    		<p class="col-md-4 col-md-offset-4 text-primary">{ this.vAkira }</p>
		    	<div class="row">
		    		<form class="col-md-4 col-md-offset-4">
		    			<div class="form-group">
						    <label for="exampleInputEmail1">{ this.iLabel }:</label>
						    <input type="text" class="form-control" on-input={(e) => this.sync('vAkira', e.target.value)}  id="exampleInputEmail1" placeholder={ this.vAkira } />
					  	</div>
		    		</form>
		    	</div>
		    </div>
  	},
  	data () {
	    return {
	    	vAkira: 'ddasddasdasd',
	    	iLabel: 'Akira',
	      	msg: 'Mi componente',
	      	checked: true,
	      	title: 'Check me'
	    }
	},

	methods: {
	    check() {
	     	this.checked = !this.checked;
	    },
	    sync (prop, value) {
	      this[prop] = value
	    }
	}
});