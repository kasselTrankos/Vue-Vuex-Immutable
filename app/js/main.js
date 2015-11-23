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

/////////////////from book,
/////dynamic scope
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

//console.log( list.get(), 'alo');
//var str = '0.1';
//var keys = str.split('.');
//var init = 0;
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

//var sinon = list.sinon(_demosObject, str, function(arr, k){
  ///console.log(arr, ' || arr ', k, '|| key');

//});
//sinon();

function factorial (n) {
    //console.log(n);
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}

////////////////////////////////////////////////////////////////////////////////
function iteration(map, compare){
  ///aqui necesito la function de i++ compare
  var i=0, l=map.length;
  return function(stack){
    for (i; i<l;i++)
      stack = compare(stack[map[i]]);

    return stack;
  }
}


var s = iteration(
  pattern('0.1.1.2'), function(stack){
    if(typeof(stack)=='undefined') return false;
    return stack.children || stack;
  }
)(_demosObject);
var t = iteration(
  pattern('0.1'), function(stack){
    return compare(stack);
  }
)(_demosObject);

function compare(stack){
  if(typeof(stack)=='undefined') return false;
  return stack.children || stack;
}

function pattern(str){
  if(!/\./.test(str)) return [+str];
  return str.split('.');
}

function iterate(filter, resolve){
  return function(stack, filter){
    console.log(stack);
    for(k in stack){
      console.log(stack[k], ' uiioioi', k);
      if(stack[k].children){
        stack = resolve.apply(null, stack[k].children);
      }
    }
  }
}
var ite = iterate({id: 3}, function(stack, filter){
  console.log(stack, filter, ' quzas aqui hago el teste de filter');
  return stack;
})(_demosObject);
console.log(s, 'at the result');
console.log(t, 'on the other hand');
console.log(ite, ' at end of top');
/////Trampolin

function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

function sum(x, y) {

    function recur(x, y) {
        if (y > 0) {
          return recur.bind(null, x + 1, y - 1);
        } else {
          return x;
        }
    }
    return trampoline(recur.bind(null, x, y));
}

var sma = sum(1, 10900); // => 11
console.log(sma, 'at the end');
/////necesito entender bind
function testBind(a){
  var custom ='this';
  console.log('called a', this, a);
  return function(b){
    console.log(b, ' opop');
  }
}
testBind();
////bind captura el metodo pero no lo lama, 
/////
testBind.bind(null, 'ate')()('pop soy b')
