# css常用属性

## z-index
用于设置元素的堆叠顺序，数值越大，越靠上面。  
用法：<code>z-index: [int];</code>

## position
用于设置元素的定位方式，有以下几种：
- `static`：默认值，元素遵循正常的文档流
- `relative`：相对定位，元素相对于其正常位置进行定位
- `absolute`：绝对定位，元素相对于其最近的非static定位祖先元素进行定位
- `fixed`：固定定位，元素相对于浏览器窗口进行定位（用于导航栏，右下角小图标之类的）
- `sticky`：粘性定位，元素根据正常文档流进行定位，然后相对于其最近的滚动祖先和包含块（由`transform`或`perspective`属性创建的祖先除外）进行偏移。如果没有滚动祖先，那么它就是相对于初始包含块进行定位的。当元素在屏幕中时，它表现为`relative`，当元素在屏幕外时，它表现为`fixed`。

用法：<code>position: [static|relative|absolute|fixed|sticky];</code>

### top、right、bottom、left
用于设置元素的定位偏移量，有以下几种：
- `top`：设置元素的上偏移量
- `right`：设置元素的右偏移量
- `bottom`：设置元素的下偏移量
- `left`：设置元素的左偏移量

用法：<code>[top|right|bottom|left]: [int];</code>


## transform
用于设置元素的变形方式，有以下几种：
- `translate`：平移
- `scale`：缩放
- `rotate`：旋转
- `skew`：倾斜
- `matrix`：矩阵变形

用法举例：<code>transform: translate(100px, 100px);</code>  
该例子的效果为：元素向右下角平移100px

## transition
用于设置元素的过渡效果，有以下几种：
- `transition-property`：设置过渡效果的属性
- `transition-duration`：设置过渡效果的持续时间
- `transition-timing-function`：设置过渡效果的速度曲线
- `transition-delay`：设置过渡效果的延迟

组合元素用法：<code>transition: [property] [duration] [timing-function] [delay];</code>

## border
用于设置元素的边框，有以下几种：
- `border-width`：设置边框的宽度
- `border-style`：设置边框的样式
- `border-color`：设置边框的颜色
- `border-image`：设置边框的图片

组合元素用法：<code>border: [width] [style] [color];</code> 
### `border-style`
- `none`：默认值，无边框
- `hidden`：与`none`相同，但在边框绘制区域不裁剪内容
- `dotted`：点状边框
- `dashed`：虚线边框
- `solid`：实线边框
- `double`：双线边框
- `groove`：3D凹槽边框，效果取决于边框颜色值
- `ridge`：3D凸槽边框，效果取决于边框颜色值
- `inset`：3D inset边框，效果取决于边框颜色值
- `outset`：3D outset边框，效果取决于边框颜色值


## box-shadow
用于设置元素的阴影，有以下几种：
- `h-shadow`：==必需==，水平阴影的位置，允许负值
- `v-shadow`：==必需==，垂直阴影的位置，允许负值
- `blur`：可选，模糊距离
- `spread`：可选，阴影的尺寸
- `color`：可选，阴影的颜色

组合元素用法：<code>box-shadow: [h-shadow] [v-shadow] [blur] [spread] [color];</code>  

## margin
用于设置元素的外边距，有以下几种：
- `margin-top`：设置元素的上外边距
- `margin-right`：设置元素的右外边距
- `margin-bottom`：设置元素的下外边距
- `margin-left`：设置元素的左外边距

组合元素用法：<code>margin: [top] [right] [bottom] [left];</code>  
缺省参数写法： `margin: [top&bottom] [left&right];`

## padding
用于设置元素的内边距，有以下几种：
- `padding-top`：设置元素的上内边距
- `padding-right`：设置元素的右内边距
- `padding-bottom`：设置元素的下内边距
- `padding-left`：设置元素的左内边距

组合元素用法：<code>padding: [top] [right] [bottom] [left];</code>  
缺省参数写法： `padding: [top&bottom] [left&right];`

## background
用于设置元素的背景，有以下几种：
- `background-color`：设置元素的背景颜色
- `background-image`：设置元素的背景图片
- `background-repeat`：设置元素的背景图片是否重复
- `background-position`：设置元素的背景图片的位置
- `background-attachment`：设置元素的背景图片是否随元素滚动
- `background-size`：设置元素的背景图片的尺寸

组合元素用法：<code>background: [color] [image] [repeat] [attachment] [position] [size];</code>  
### `background-repeat`
- `repeat`：默认值，背景图像将在垂直方向和水平方向重复
- `repeat-x`：背景图像将在水平方向重复
- `repeat-y`：背景图像将在垂直方向重复
- `no-repeat`：背景图像将仅显示一次
- `space`：背景图像将在垂直方向和水平方向重复，但是第一张图和最后一张图之间不会重复
- `round`：背景图像将在垂直方向和水平方向重复，但是如果整数倍则会缩小背景图像的尺寸，直到它适合

### `background-attachment`
- `scroll`：默认值，背景图像会随着页面其余部分的滚动而移动
- `fixed`：当页面的其余部分滚动时，背景图像不会移动
- `local`：背景图像会随着元素内容的滚动而移动


