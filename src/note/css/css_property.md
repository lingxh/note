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
简写：`inset = top right bottom left`
```css
inset: 10px; /* 应用于所有边 */
inset: 4px 8px; /* 上下 | 左右 */
inset: 5px 15px 10px; /* 上 | 左右 | 下 */
inset: 2.4em 3em 3em 3em; /* 上 | 右 | 下 | 左 */
```


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

### `border-radius`
用于设置元素的边框圆角，有以下几种：
- `border-top-left-radius`：设置元素的左上角圆角
- `border-top-right-radius`：设置元素的右上角圆角
- `border-bottom-right-radius`：设置元素的右下角圆角
- `border-bottom-left-radius`：设置元素的左下角圆角

组合元素用法：<code>border-radius: [top-left] [top-right] [bottom-right] [bottom-left];</code>

### `border-image`
用于设置元素的边框图片，有以下几种：
- `border-image-source`：设置边框图片的路径
- `border-image-slice`：设置边框图片的裁剪方式
- `border-image-width`：设置边框图片的宽度
- `border-image-outset`：设置边框图片的外边距
- `border-image-repeat`：设置边框图片的重复方式

组合元素用法：<code>border-image: [source] [slice] [width] [outset] [repeat];</code>

#### `border-image-slice`
- `number`：设置边框图片的裁剪方式为固定值
- `percentage`：设置边框图片的裁剪方式为百分比
- `fill`：默认值，设置边框图片的裁剪方式为填充

#### `border-image-repeat`
- `stretch`：默认值，边框图片会被拉伸以适应边框区域
- `repeat`：边框图片会被重复以填充边框区域
- `round`：边框图片会被拉伸或缩小以填充边框区域
- `space`：边框图片会被重复以填充边框区域，但是第一张图和最后一张图之间不会重复

## box-sizing
用于设置元素的盒模型，有以下几种：
- `content-box`：默认值，元素的宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框
- `border-box`：元素的宽度和高度分别应用到元素的边框盒。在宽度和高度之内绘制元素的内容和内边距

用法：<code>box-sizing: [content-box|border-box];</code>



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

### padding-inline
用于设置行内元素的内边距，有以下几种：
- `padding-inline-start`：设置元素的内联起始内边距
- `padding-inline-end`：设置元素的内联结束内边距

组合元素用法：<code>padding-inline: [start] [end];</code>

### padding-block
用于设置块级元素的内边距，有以下几种：
- `padding-block-start`：设置元素的块起始内边距
- `padding-block-end`：设置元素的块结束内边距


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

## text
用于设置元素的文本，有以下几种：
- `text-indent`：设置元素的文本缩进
- `text-align`：设置元素的文本对齐方式
- `text-decoration`：设置元素的文本修饰
- `text-transform`：设置元素的文本转换
- `text-shadow`：设置元素的文本阴影
- `white-space`：设置元素的空白处理方式
- `word-spacing`：设置元素的单词间距
- `letter-spacing`：设置元素的字母间距
- `word-break`：设置元素的单词换行方式
- `word-wrap`：设置元素的单词换行方式

组合元素用法：<code>text: [indent] [align] [decoration] [transform] [shadow];</code>

### `text-align`
- `left`：默认值，文本左对齐
- `right`：文本右对齐
- `center`：文本居中对齐
- `justify`：文本两端对齐

### `text-decoration`
- `none`：默认值，定义标准的文本
- `underline`：定义文本下的一条线
- `overline`：定义文本上的一条线
- `line-through`：定义穿过文本下的一条线
- `blink`：定义闪烁的文本

### `text-transform`
- `none`：默认值，定义带有小写字母和大写字母的标准的文本
- `capitalize`：定义只有每个单词的第一个字母带有大写字母的文本
- `uppercase`：定义仅有大写字母的文本
- `lowercase`：定义仅有小写字母的文本

### `white-space`
- `normal`：默认值，空白会被浏览器忽略
- `pre`：空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签
- `nowrap`：文本不会换行，文本会在在同一行上继续，直到遇到 `<br>` 标签为止
- `pre-wrap`：保留空白符序列，但是正常地进行换行
- `pre-line`：合并空白符序列，但是保留换行符

### `word-break`
- `normal`：默认值，使用浏览器默认的换行规则
- `break-all`：允许在单词内换行
- `keep-all`：只能在半角空格或连字符处换行

### `word-wrap`
- `normal`：默认值，只在允许的断字点换行（浏览器保持默认处理）
- `break-word`：在长单词或 URL 地址内部进行换行

## overflow
用于设置元素的溢出处理方式，有以下几种：
- `overflow-x`：设置元素的水平溢出处理方式
- `overflow-y`：设置元素的垂直溢出处理方式
- `overflow`：设置元素的溢出处理方式

组合元素用法：<code>overflow: [x] [y];</code>

### `overflow`取值
- `visible`：默认值，内容不会被修剪，会呈现在元素框之外
- `hidden`：内容会被修剪，并且其余内容是不可见的
- `scroll`：内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容
- `auto`：如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容


## column
用于设置元素的多列布局，有以下几种：
- `column-count`：设置元素的列数
- `column-gap`：设置元素的列间距
- `column-rule`：设置元素的列边框 (宽度、样式、颜色)
- `column-span`：设置元素的列跨度
- `column-width`：设置元素的列宽度
 
组合元素用法：<code>column: [count] [width];</code>

## white-space
用于设置元素的空白处理方式，有以下几种：

|	|换行符|空格和制表符|文本换行|行末空格|行末的其他空白分隔符|
|:----:| :----: | :----: | :----: | :----: | :----: |  
normal|合并|合并|换行|移除|挂起
nowrap|合并|合并|不换行|移除|挂起
pre|保留|保留|不换行|保留|不换行
pre-wrap|保留|保留|换行|挂起|挂起
pre-line|保留|合并|换行|移除|挂起
break-spaces|保留|保留|换行|换行|换行

用法：<code>white-space: [normal|nowrap|pre|pre-wrap|pre-line|break-spaces];</code>