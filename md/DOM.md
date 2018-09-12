####document对象
每个载入浏览器的HTML文档都会成为document对象。document对象包含了文档的基本信息，我们可以通过JavaScript对HTML页面中的所有元素进行访问、修改。

- document对象有很多属性来描述文档信息
```
document.doctype
    document.title
    document.characterSet
    document.head
    document.body
    document.images

    /*了解
    readyState属性返回当前文档的状态，共有三种可能的值

    1. loading：加载HTML代码阶段，尚未完成解析
    2. interactive：加载外部资源阶段
    3. complete：全部加载完成
    */
    document.readyState

    /*了解
    compatMode 属性返回浏览器处理文档的模式，可能的值为
    1. BackCompat：向后兼容模式，也就是没有添加DOCTYPE
    2. CSS1Compat：严格模式，添加了DOCTYPE
    */
    document.compatMode
```

- document.open()、document.close()
document.open方法用于新建一个文档，供write方法写入内容。它实际上等于清除当前文档，重新写入内容

document.close方法用于关闭open方法所新建的文档。一旦关闭，write方法就无法写入内容了。


- document.write()
document.write方法用于向当前文档写入内容。只要当前文档还没有用close方法关闭，它所写入的内容就会追加在已有内容的后面。
```
document.open();
document.write("hello");
document.write("world");
document.close();
```
如果页面已经渲染完成再调用write方法，它会先调用open方法，擦除当前文档所有内容，然后再写入。

如果在页面渲染过程中调用write方法，并不会调用open方法。

需要注意的是，虽然调用close方法之后，无法再用write方法写入内容，但这时当前页面的其他DOM节点还是会继续加载。

除了某些特殊情况，应该尽量避免使用document.write这个方法。