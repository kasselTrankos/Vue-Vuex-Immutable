import Vue from 'vue';
import actState from './actState.jsx';


Vue.component('myComponent', {
    render (h) {
	    return (<div class="row">
    			{this.elms.map((el)=>{
    				return (<act-state text={el}></act-state>);
    			})}
	    		<p class="col-md-4 col-md-offset-4 text-primary">{ this.vAkira }</p>
		    	<div class="row">
		    		<form class="col-md-4 col-md-offset-4" on-submit={(e) => this.onsubmit(e)}>
		    			<div class="form-group">
						    <label for="myelm">{ this.iLabel }:</label>
						    <input type="text" class="form-control" on-input={(e) => this.sync('vAkira', e.target.value)}  id="myelm" placeholder={ this.vAkira } />
					  	</div>
		    		</form>
		    	</div>
		    </div>);
  	},
  	methods: {
	    check() {
	     	this.checked = !this.checked;
	    },
	    sync (prop, value) {
	      this[prop] = value
	    },
	    onsubmit(e){
	    	e.preventDefault();

	    	this.elms.push(this.vAkira);
	    	this.vAkira = '';
	    	document.getElementById('myelm').value = this.vAkira;

	    	return false;
	    }
	},
  	data () {
	    return {
	    	elms: ['los', 'mola el segindpo'],
	    	vAkira: 'ddasddasdasd',
	    	iLabel: 'Akira',
	      	msg: 'Mi componente',
	      	checked: true,
	      	title: 'Check me'
	    }
	}

});