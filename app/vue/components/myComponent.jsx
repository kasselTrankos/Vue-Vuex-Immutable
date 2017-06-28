import Vue from 'vue';
import actState from './actState.jsx';
import { mapMutations, mapGetters  } from 'vuex'


Vue.component('myComponent', {
	computed: {
		...mapGetters({
			state: 'getState',
			states: 'getAllStates'
		})

	},
    render (h) {
	    return (<div class="row">
			{this.state.map((el)=>{
				return (<act-state text={el}></act-state>);
			})}
			<div class="row">
				<ol class="breadcrumb  col-md-4 col-md-offset-4">
				{ this.states.map((el, i)=>{
					return (<li><a href={'#'+(i+1)} on-click={(e)=>this.resetState(i)}>{i+1}</a></li>);
				})}
				</ol>
			</div>
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

  		... mapMutations([
	      'addState',
	      'setState'

	    ]),

	    check() {
	     	this.checked = !this.checked;
	    },
	    resetState(i){
	    	this.setState(i);
	    	this.addState(this.state);
	    },
	    sync (prop, value) {
	      this[prop] = value
	    },

	    onsubmit(e){
	    	e.preventDefault();

	    	this.state.push(this.vAkira);
	    	this.addState(this.state);
	    	this.vAkira = '';
	    	document.getElementById('myelm').value = this.vAkira;

	    	return false;
	    }
	},
  	data () {
	    return {
	    	vAkira: 'ddasddasdasd',
	    	iLabel: 'Akira',
	      	msg: 'Mi componente',
	      	checked: true,
	      	title: 'Check me'
	    };
	}

});