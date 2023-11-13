# css常用属性

## display
用于设置元素的显示方式，有以下几种：
- `block`：块级元素，元素会被显示为块级元素，此时`width`、`height`、`margin`、`padding`属性都可以生效
- `inline`：行内元素，元素会被显示为行内元素，此时`width`、`height`、`margin`、`padding`属性都不可以生效
- `inline-block`：行内块级元素，元素会被显示为行内元素，但是其内容会作为块级元素呈现，此时`width`、`height`、`margin`、`padding`属性都可以生效
- `none`：元素会被隐藏，此时`width`、`height`、`margin`、`padding`属性都不可以生效

用法：<code>display: [block|inline|inline-block|none];</code>

## display:flex
用于设置元素的弹性盒子布局，有以下几种：
- `flex-direction`：设置元素的主轴方向
- `flex-wrap`：设置元素的换行方式
- `flex-flow`：设置元素的主轴方向和换行方式
- `justify-content`：设置元素在主轴上的对齐方式
- `align-items`：设置元素在交叉轴上的对齐方式
- `align-content`：设置多根轴线的对齐方式

### `flex-direction`
- `row`：默认值，主轴为水平方向，起点在左端
- `row-reverse`：主轴为水平方向，起点在右端
- `column`：主轴为垂直方向，起点在上沿
- `column-reverse`：主轴为垂直方向，起点在下沿

### `flex-wrap`
- `nowrap`：默认值，不换行
- `wrap`：换行，第一行在上方
- `wrap-reverse`：换行，第一行在下方

### `justify-content`
- `flex-start`：默认值，左对齐
- `flex-end`：右对齐
- `center`：居中
- `space-between`：两端对齐，项目之间的间隔都相等
- `space-around`：每个项目两侧的间隔相等，所以，项目之间的间隔比项目与边框的间隔大一倍

### `align-items`
- `flex-start`：交叉轴的起点对齐
- `flex-end`：交叉轴的终点对齐
- `center`：交叉轴的中点对齐
- `baseline`：项目的第一行文字的基线对齐
- `stretch`：默认值，如果项目未设置高度或设为auto，将占满整个容器的高度

### `align-content`
- `flex-start`：与交叉轴的起点对齐
- `flex-end`：与交叉轴的终点对齐
- `center`：与交叉轴的中点对齐
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布
- `space-around`：每根轴线两侧的间隔都相等，所以，轴线之间的间隔比轴线与边框的间隔大一倍
- `stretch`：默认值，轴线占满整个交叉轴

## flex
用于设置元素的弹性盒子布局，有以下几种：
- `flex-grow`：设置元素的放大比例
- `flex-shrink`：设置元素的缩小比例
- `flex-basis`：设置元素的基准值

组合元素用法：<code>flex: [grow] [shrink] [basis];</code>

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

## font
用于设置元素的字体，有以下几种：
- `font-style`：设置元素的字体样式
- `font-variant`：设置元素的字体变体
- `font-weight`：设置元素的字体粗细
- `font-size`：设置元素的字体大小
- `line-height`：设置元素的行高
- `font-family`：设置元素的字体系列

组合元素用法：<code>font: [style] [variant] [weight] [size/line-height] [family];</code>

### `font-style`
- `normal`：默认值，浏览器显示一个标准的字体样式
- `italic`：浏览器会显示一个斜体的字体样式
- `oblique`：浏览器会显示一个倾斜的字体样式

### `font-variant`
- `normal`：默认值，浏览器会显示一个标准的字体
- `small-caps`：浏览器会显示小型大写字母的字体

### `font-weight`
- `normal`：默认值，定义标准的字符
- `bold`：定义粗体字符
- `bolder`：定义更粗的字符
- `lighter`：定义更细的字符
- `100` ~ `900`：定义字符的粗细。400 等同于 normal，而 700 等同于 bold


## column
用于设置元素的多列布局，有以下几种：
- `column-count`：设置元素的列数
- `column-gap`：设置元素的列间距
- `column-rule`：设置元素的列边框 (宽度、样式、颜色)
- `column-span`：设置元素的列跨度
- `column-width`：设置元素的列宽度
 
组合元素用法：<code>column: [count] [width];</code>