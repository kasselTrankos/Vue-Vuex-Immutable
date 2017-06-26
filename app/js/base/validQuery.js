var validQueryObject = function	(pattern, callback){
	var _object = {}, _lexers = [];
	var _startARR = '[', _endARR = ']', _startObj = '.';
	function Lexer(){
		for(var i=0;i<=pattern.length; i++){
			Object(i); Array(i)
		}
	}
	function valid(i){
		Lexer();
		var _o  = _object;
		for(var i=0;i<_lexers.length; i++){
			_o = _o[pattern.slice(_lexers[i].start, _lexers[i].end)];
			if(!_o) break;
		}
		return _o;
	}
	function Object(i){
		if(pattern.charAt(i)===_startObj){
			_lexers.push({
				start: i+1,
				end: -1
			});
		}
		if(
			_lexers.length>0 &&
			pattern.charAt(_lexers.slice(-1)[0].start-1)===_startObj &&
			(pattern.charAt(i)===_startARR || i === pattern.length)){
			_lexers.slice(-1)[0].end = i;
			return true;
		}
		return false;
	}
	function Array(i){
		if(pattern.charAt(i)===_startARR){
			_lexers.push({
				start: i+1,
				end: -1
			});
		}
		if(pattern.charAt(i)===_endARR){
			_lexers.slice(-1)[0].end = i;
			return true;
		}
		return false;

	}
	function validate(obj){
		var isValid = valid();
		if(callback){
			callback(isValid, obj)
		}
		return isValid
	};
	return function (obj){
		_object = obj;
		return validate(obj);
	}
};
