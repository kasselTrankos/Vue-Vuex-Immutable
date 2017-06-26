var validQueryObject = function	(pattern){
	var _object = {};
	var _startARR = '[', _endARR = ']', _obj = '.'
	function valid(begin, end){
		_object = _object[pattern.slice(begin+1, end)];
		return _object || false;
	}
	function validate(){
		var _begin = 0, _end =0, _contObject = 0;
		for(var i=0;i<=pattern.length; i++){
			if(pattern.charAt(i)===_obj){
				_contObject++;
				if(_contObject===1){
					_begin = i;
				}
				if(_contObject===2){
					_contObject=0;
					_end = i;
					if(!valid(_begin, _end+1)) return false;
				}
			}
			if(i===pattern.length && _contObject===1){
				_contObject = 0;

				_end = i;
				if(!valid(_begin, _end+1)) return false;
			}
			if(pattern.charAt(i)===_startARR){
				if(_contObject===1){
					_contObject++;
					if(_contObject===2){
						_contObject=0;
						_end = i;
						if(!valid(_begin, _end)) return false;
					}
				}
				_begin = i;
			}

			if(pattern.charAt(i)===_endARR){
				_end = i;
				if(!valid(_begin, _end)) return false;

			}


		}
		return _object;
	};
	return function (obj){
		_object = obj;

		return validate(obj);
	}
};
