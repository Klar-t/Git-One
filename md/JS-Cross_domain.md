####同源策略(Same origin Policy)
-----------
浏览器出于安全方面的考虑，只允许与本域下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。

本域指的是？

*   同协议：如都是http或者https
*   同域名：如都是http://zxhxh73.com/a 和http://zxhxh73.com/b
*   同端口：如都是80端口

http://zxhxh73.com:80/a/b.html和http://zxhxh73.com:80/b/c.php(同源)
- 简单的说就是三同，上面的同协议，同域名，同端口都相同的就是同源；
######需要注意的是: 对于当前页面来说页面存放的 JS 文件的域不重要，重要的是加载该 JS 页面所在什么域
####跨域的几种方法：
-----
#####JSONP
- JSONP的原理：
  - JSONP是一种跨域通信的手段；
  - 1：利用Script标签的SRC属性来实现跨域
  - 2：通过将前端方法作为参数传递到服务器，然后又服务端拼接参数后返回，实现服务端和客户端之间的通信；
  - 3：由于使用Script标签的SRC属性，因此只支持get方法
```
<div>
<button class="show">show news</button>
</div>

<script>
//通过script标签发送请求
$('.show').addEventlistener('click',function(){
  var script=document.createElement('script');
script.src='http://127.0.0.1:8080/getNews?callback=appendHtml'
document.head.appendChild(script);
document.head.removeChild(script);
})
//将获取到的数据添加到页面中
function appendHtml(news){
  var html='';
for(var i=0;i<news.length;i++){
  html+='li'+new[i]+'</li>'
}
$('.news').innerHTML=html;
}
function $(id){
  return document.querSelector(id);
}
</script>
```  
```
var http=require('http');
var fs=require('fs');
var path=require('path');
avr url=require('url')

http.createServer(function(req,res){
  var pathObj=url.parse(req.url,true);
 switch(pathObj.pathname){
  case '/getNews':
    var news = [
        "第11日前瞻：中国冲击4金 博尔特再战200米羽球",
        "正直播柴飚/洪炜出战 男双力争会师决赛",
        "女排将死磕巴西！郎平安排男陪练模仿对方核心"
        ]
    res.setHeader('Conten-type','text/json; charset=utf-8')
    if(pathObj.query.callback){
      res.end(pathObj.query.callback+'('+JSON.stringify(news)+')')//将数据处理后返回；
    }else{
        res.end(JSON.stringify(news))
    }
  break;
default:
fs.readFile(path.join(_dirname,pathObj.pathname),function(e.data){
  if(e){
    res.writeHead(404,'not found')
    res.end('<h1>404 Not Found<h1>')
   }else{
    res.end(data);
  }
})
}
}).listen(8080)

```

#####CORS
[阮一峰关于CORS跨域](http://www.ruanyifeng.com/blog/2016/04/cors.html)

- CORS是一个W3C标准，全称是“跨域资源共享”（Cross-origin resource sharing），它允许浏览器想跨源服务器，发出XMLHTTPRequest请求，从而克服Ajax只能同源使用的限制
- CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10；
- 整个CORS通信过程，都是浏览器自动完成，不需要用户参加，对于开发者而言，CORS通信与同源的Ajax没有差别，代码完全一样，浏览器一旦发现Ajax请求跨源，就会自动添加一些附加的头信息，有事还会多出一次附加的请求，但用户不会有感觉
```
var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)

  switch (pathObj.pathname) {
    case '/getNews':
      var news = [
        "第11日前瞻：中国冲击4金 博尔特再战200米羽球",
        "正直播柴飚/洪炜出战 男双力争会师决赛",
        "女排将死磕巴西！郎平安排男陪练模仿对方核心"
        ]
      res.setHeader('Access-Control-Allow-Origin','*') // 设置响应头中的属性，允许所有的站点访问
      res.end(JSON.stringify(news))

      break;

    default:
      fs.readFile(path.join(__dirname, pathObj.pathname), function(e, data){
        if(e){
          res.writeHead(404, 'not found')
          res.end('<h1>404 Not Found</h1>')
        }else{
          res.end(data)
        }
      }) 
  }
}).listen(8080)

```

```
<script>

  $('.show').addEventListener('click', function(){
    xhr = new XMLHttpRequest();  // 创建 AJAX 请求
    xhr.open('GET','http://127.0.0.1:8080/getNews',true);
    xhr.send();
    xhr.onload = function(){
      appendHtml(JSON.parse(xhr.responseText));
    }
  })

  function appendHtml(news){
    var html = '';
    for( var i=0; i<news.length; i++){
      html += '<li>' + news[i] + '</li>';
    }
    console.log(html);
    $('.news').innerHTML = html;
  }

  function $(id){
    return document.querySelector(id);
  }
</script>
```
#####PostMessage
- 使用情况：
  - 1：多窗口之间消息传递(newWin = window.open(..));
  -:2：页面与嵌套的iframe消息传递
- postMessage 是html5引入的API可以更方便、有效、安全的解决这些问题。postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。
- postMessage(data,origin)方法接受两个参数
  - data:要传递的数据，
html5规范中提到该参数可以是JavaScript的任意基本类型或可复制的对象，然而并不是所有浏览器都做到了这点儿，部分浏览器只能处理字符串参数，所以我们在传递参数的时候需要使用JSON.stringify()方法对对象参数序列化，在低版本IE中引用json2.js可以实现类似效果。

  - origin：字符串参数，指明目标窗口的源，
协议+主机+端口号[+URL]，URL会被忽略，所以可以不写，这个参数是为了安全考虑，someWindow.postMessage()方法只会在someWindow所在的源(url的protocol, host, port)和指定源一致时才会成功触发message event，当然如果愿意也可以将参数设置为"*"，someWindow可以在任意源，如果要指定和当前窗口同源的话设置为"/"。

[参考--通过postMessage进行跨域通信](https://segmentfault.com/a/1190000012264815)
[参考-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)


