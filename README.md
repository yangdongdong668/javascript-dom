# javascript-dom
javascript-dom

Q：标准模式与兼容模式（怪异模式）各有什么区别?

A：标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。
在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。
简单的说，就是尽可能的显示能显示的东西给用户看。

具体的说：
1.width不同
在严格模式中 ：width是内容宽度 ，元素真正的宽度 = margin-left + border-left-width + padding-left + width + padding-right + border-right- width +  margin-right;
在兼容模式中 ：width则是元素的实际宽度 ，内容宽度 = width - ( padding-left + padding-right + border-left-width + border-right-width)

2.兼容模式下可设置百分比的高度和行内元素的高宽
    在Standards模式下，给span等行内元素设置wdith和height都不会生效，而在兼容模式下，则会生效。
    在standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置高度，子元素设置一个百分比的高度是无效的。

3.用margin:0 auto设置水平居中在IE下会失效
    使用margin:0 auto在standards模式下可以使元素水平居中，但在兼容模式下却会失效（用text-align属性解决）
    body{text-align:center};#content{text-align:left}

4.兼容模式下Table中的字体属性不能继承上层的设置，white-space:pre会失效，设置图片的padding会失效