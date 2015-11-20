var element = document.getElementById('test');
var list = new List();


var _demosObject= [{
  title: 'sion',
  id: 0,
  children:[
    {
      title: 'amaris',
      id: 1
    },
    {
      title:'glass',
      id:2,
      children:[
        {
          title: 'candy',
          id:3
        },
        {
          title:'miller',
          id:4,
          children:[
            {
              title: 'lo unico',
              id: 5
            },
            {
              title:'florence',
              id: 6
            },
            {
              title: 'philip',
              id: 7,
              children:[
                {
                  title: 'lisp',
                  id: 8
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}];

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
var str = '0.1';
var keys = str.split('.');
var init = 0;
/*var finder = list.jumper(function(k, arr){
  console.log(k, '|| key || ', arr, '|| array || ', 'on method');

  if(arr!==false) {
console.log('recall it!! please', keys[++init]);
    return list.jumper(keys[++init], arr);
  }else{
    return arr;
  }
});
console.log(finder(keys[init], _demosObject));*/

//stack('add');

var sinon = list.sinon(_demosObject, str, function(arr, k){
  console.log(arr, ' || arr ', k, '|| key');

});
sinon();

function factorial (n) {
    //console.log(n);
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}
var rr = [1,2,3,0,4,5];
rr.map(factorial);
console.log(rr);

function create() {
   return function(n) {

      if (n <= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

function iterate(pattern){
  _k = 0;
  _seed = pattern.split('.');
  return function(arr){
    if(_k==_seed.length-1) {
      return arr[_seed[_k]];
    }
    _arr = arr[_seed[_k++]].children;
    return arguments.callee(_arr);
  }
}

var result = create()(2); // returns 120 (5 * 4 * 3 * 2 * 1)
console.log(result);

var i = iterate('0.1.1.2.0')(__object);

//console.log(i.children, 'as the result', i);
