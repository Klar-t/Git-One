解决文字对齐
![image.png](https://upload-images.jianshu.io/upload_images/3827288-85798069f6bfc0af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
span{
  
}
span::after{
  content:'';
display:inline-block;
width:100%;
}
```
多行文本省略：
```
div{
display:-webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
overflow:hidden;
}
```
文字垂直居中
```
div{
line-height:24px;//设置行高
padding:8px 0 ;//设置上下内边距
text-align:center;
}
```
margin(外边距)合并
```
margin合并：只要父元素没有内容包围块级元素，则margin不会合并
 body{
      border:1px solid black;
    }
  .son
    {
      border:5px solid red;
      line-height:100px;
      margin:10px;
    }
  .dad
    {
      outline:3px solid green;
    }
<body>
 <div class="dad">
   <div class="son">
     111
   </div>
 </div>
</body>
```
div的高度是由他内部文档流中元素高度总和决定的
文档流：内联元素：从左到右排列；块级元素：从上到下 排列
- 内联元素的padding；margin，会影响宽度，但不会影响高度
- span


