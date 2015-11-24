////////////////////////Dispatcher
function existy(x) { return x != null };
function truthy(x) { return (x !== false) && existy(x) };
function dispatch(/* funs */) {
  var funs = _.toArray(arguments);
  var size = funs.length;
  return function(target /*, args */) {
    var ret = undefined;
    var args = _.rest(arguments);
    for (var funIndex = 0; funIndex < size; funIndex++) {
      var fun = funs[funIndex];
      ret = fun.apply(fun, construct(target, args));
      if (existy(ret)) return ret;
    }
    return ret;
  };
}
function doWhen(cond, action) {
  if(truthy(cond))
    return action();
  else
    return undefined;
}
function invoker (NAME, METHOD) {
  return function(target /* args ... */) {
    if (!existy(target)) fail("Must provide a target");
    var targetMethod = target[NAME];
    var args = _.rest(arguments);
    return doWhen((existy(targetMethod) && METHOD === targetMethod), function() {
      return targetMethod.apply(target, args);
    });
  };
};
var rev = invoker('reverse', Array.prototype.reverse);
console.log(rev, 'invoker');
var rr = _.map([[12, 1,2,3]], rev);
console.log(rev, rr[0]);
var _invoker = invoker('toString', Array.prototype.toString);
var rg = _invoker([112,0, 9090, 'op fhfj']);
var _rg = _invoker(_.range(10));
console.log(rg, ' cppcp', _rg);
