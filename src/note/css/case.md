# 配置案例

## 顶部导航栏
使用`position: fixed`使其不随页面滚动，使用`z-index`配置显示优先级使其显示在最前端，但带来的副作用是它不会占用空间导致覆盖了一部分元素，解决方案是放一个空的`div`并配置`margin-top`为该导航栏的高度，这样可以让这个`div`容器占用这部分被遮挡的空间

## 网页背景图片
由于`background-imgae`需要高度并且所有元素都必须在这个容器里，这样就不太好用了，可以直接使用`<img>`标签进行一些配置来替代  
`position: fixed`使其不随页面滚动  
`z-index: -1`配置显示在最底层  
`object-fit: cover`配置图片缩放为合适的大小并铺满整个`body`  
`object-position: center`使得尽可能显示图片中间部分  
`width: 100%;height: 100%;`配置宽高都为100%，因为是`fixed`所以并不会占用空间