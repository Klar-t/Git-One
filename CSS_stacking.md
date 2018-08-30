###1：什么是堆叠顺序
###1：什么是堆叠上下文
参考：[张鑫旭博客 css-stacking-context-order-z-index](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

![image.png](https://upload-images.jianshu.io/upload_images/3827288-84b18700a96c28f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![image.png](https://upload-images.jianshu.io/upload_images/3827288-bcb8bee16c81a4da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####堆叠上下文顺序：
1：background
2：border
2：块级元素
3：浮动
4：内联元素
5：z-index:0
5：z-index:+
如果是兄弟元素重叠，那么后面的元素覆盖前面的元素；

下面这两个是层叠领域的黄金准则。当元素发生层叠的时候，其覆盖关系遵循下面2个准则：

谁大谁上：当具有明显的层叠水平标示的时候，如识别的z-indx值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。通俗讲就是官大的压死官小的。
后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素。
在CSS和HTML领域，只要元素发生了重叠，都离不开上面这两个黄金准则。因为后面会有多个实例说明，这里就到此为止。

####堆叠上下文的特征：
- 根元素（HTML）
- z-index值不为：“auto”的绝对/相对定位
- 一个z-index值不为：“auto”的flex项目（flex item），机：父元素display：flex|inline-flex，
- opacity属性值小于1的元素
- transform属性值不为"none"的元素
- min-blend-mode属性值不为"normal"的元素
- filter值不为"none"的元素
- perspective值不为"none"的元素，
- isolation属性被设置为"isolate"的元素
- position：fixed
- 在will-change中指定了任意CSS属性，即便你没有直接指定这些属性的值
- -webkit-overfllow-scrolling属性被设置"touch"的元素



