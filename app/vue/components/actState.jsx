import Vue from 'vue';

Vue.component('actState', {
    render (h) {
	    return (<div class="row">
    			<ol class="breadcrumb col-md-4 col-md-offset-4">
    				<li><a href="#">{this.text}</a></li>
    			</ol>
    		</div>);
  	},
	props:{
		text: {
	      type: String,
	      required: true
	    }
	}

});