####Chrome 扩展程序添加

- chrome 扩展从结构来看,
  -  扩展像是一个配置文件(manifest.json),加一个完整的网页(包括html, css , js, images)  

- manifest.json配置  相当于填表,可以把下面的代码复制,然后替换为自己的信息,就可以用了!
```
//配置文件
{
    "manifest_version": 2,
    //定义扩展的名称
    "name": "吃什么?",
    // 定义扩展的版本
    "version": "1.0",
    // 定义扩展的描述
    "description": "解决吃什么的难题,从此不再纠结'吃什么'...",
    // 定义 不同尺寸 图标的位置
    "icons": {
        "16": "images/icon16.png",
        "48": "images/icon48.png",
        "128": "images/icon128.png"
    },
    // 定义放在工具栏的图标的位置
    "browser_action": {
        "default_icon": {
            "19": "images/icon19.png",
            "38": "images/icon38.png"
        },
        // 定义默认的标题
        "default_title": "吃什么?",
        // 定义运行扩展后默认打开的文件
        "default_popup": "index.html"
    }
}
```
- HTML CSS  JS 写好后
- 把文件加载到浏览器上就可以了
 - 1. 打开chrome浏览器,在地址栏键入chrome://extensions/,回车
![image](http://upload-images.jianshu.io/upload_images/3827288-623ec9bd5414e82d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 - 2.打开开发者模式:
![image](http://upload-images.jianshu.io/upload_images/3827288-8891f24b8f2caaea?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 3.点击"加载已解压的扩展程序"
![image](http://upload-images.jianshu.io/upload_images/3827288-42ace8d67cebf997?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


完全Copy[WhatToEat](https://github.com/zhaoolee/WhatToEat)
