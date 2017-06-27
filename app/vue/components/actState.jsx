import Vue from 'vue';

Vue.component('actState', {
    render (h) {
	    return (<div class="row">
    			<span class="col-md-offset-4 badge">{this.text}</span>
    		</div>);
  	},
	props:{
		text: {
	      type: String,
	      required: true
	    }
	}

});