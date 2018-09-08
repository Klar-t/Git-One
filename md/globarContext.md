####理解作用域要先理解执行上下文
先上一段代码
```
var x=10;
bar();
function foo(){
  console.log(x);
}
function bar(){
  var x=30;
foo()
}
```
- 上面的函数输出：10；
- 按你的理解应该是输出30的，但为什么会是10呢？解析一下为什么输出10，而不是30 ：
```
这里就要说执行上下文了
当 运行JS的时候，会创建全局上下文：globalCotext
语句运行到var x=10；
AO：当前上下文
globalContext={
  AO:{
    x:10;
    foo:function
    bar:function
  },
Scope:null
}
当运行到bar()，进入bar的执行上下文
barContext={
  AO:{
      X:30
    },
  Scope:globalContext.AO
}
运行foo()，进入foo的执行上下文
fooContext={
  AO:{
    },
  Scope:globalContext.AO
}
当在当前上下文没有找到X时，就有去Scope的上下文中找
所以foo的执行上下文X=10；

这里说明一下，不是执行到的时候才创建执行上下文的，JS有声明前置；也就是说一开始就会把上下文给创建好；
```
####在举个栗子：
```
var x=20;
bar()//输出什么
function bar(){
  var x=30;
function foo(){
  console.log(x);
}
foo();
}
1.
globalContext={
  AO:{
      x:10
      bar:function
  }
Scope:null;
}
bar.[[Scope]]=globalContext.AO
2.
barContext ={
  AO:{
    X:30;
  foo:function; 
}
Scope:bar.[[Scope]]=globalContext.AO
}
foo.[[Scope]]=barContext.AO
3.
fooContext={
  AO:{},
  Scope:foo.[[Scope]]=barContext.AO
}
输出：30
```
###再举个栗子：
```
var a=1;
function fn(){
    console.log(a);
    var a=5;
    console.log(a);
    a++;
    var a;
    fn3();
    fn2();
    console.log(a);
    
    function fn2(){
        console.log(a);
        a=20;
    }
}

function fn3(){
    console.log(a);
    a=200;
}
fn();
console.log(a);

globarContext={
    AO:{
        a:1;
        fn:function;
        fn3:function;
    }
    Scope:null
}
fn.[[Scope]]=globarContext
fn3.[[Scope]]=globarContext

fnrContext={
    AO:{
        a:5;
        fn2:function;
    }
    Scope:fn.[[Scope]]=globarContext
}

fn3rContext={
    AO:{
        a:undefined;
    }
    Scope:fn3.[[Scope]]=globarContext
}

根据具体情况赋值；
undefined，5,1，6,20,200
```