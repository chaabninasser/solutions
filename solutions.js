Test 1:
var a = [‘aba’, ‘xzxb’, ‘ab’]
var b = [‘aba’, ‘baba’, ‘aba’, ‘xzxb’]
var c = []

function compare(a,b){

const finalarray=[];

a.forEach((e1)=>b.forEach((e2)=>
  {if(e1===e2){
    finalarray.push(e1)
  }
}

));

return finalarray;

}

functiin f1(finalarray){

var c = finalarray.reduce(function(obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});

return c;
}



Test 2:

arr = []
var regex = /\d+/g;
var string = "a1 12 13.b -14.5+2";
var matches = string.match(regex);  
arr =[matches]


Test 4:

function f4(func)
{
  setTimeout(func,parseInt(Math.random()*100));
}

function doOne()
{/*do something*/}

function doTwo()
{/*do something*/}

function myFunc(param1,param2,callback1,callback2)
{
  f4(function(){
    callback1();
  });

  f4(function(){
    callback2();
  });
}

myFunc('a','b',doOne,doTwo);