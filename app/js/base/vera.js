




var r = route(null, '#home');

listener.add('HASH_CHAGE', function(e, el, hash){
  var elm = document.getElementById('test-route');
  elm.innerHTML+= '<p>site link actual: '+hash+'</p>';
});
/////////////////////////////////////////////////
