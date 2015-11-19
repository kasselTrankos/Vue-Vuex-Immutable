var element = document.getElementById('test');
var list = new List();




//stack(content, 'dueto')

var stackBinder = list.stack(function(stack, v){
  stack.push(v);
  return stack;
});

stackBinder('a', 'content');
stackBinder('b', 'lo ves?');
var unStackBinder = list.stack(function(stack, v){
  stack.pop();
  return stack;
});
({f: function(){
  console.log(this);
  return this;
}}).f.call('!');
console.log( list.get(), 'alo');
//stack('add');
