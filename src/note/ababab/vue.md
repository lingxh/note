# vue笔记

程序入口位于 ==main.js==   
通过import引入vue项目文件，例如：  
<code>import Test from './test.vue'</code>  

随后将导入的项目传入createApp函数（也不知道这是什么，只知道要这么做）  
<code>const test = createApp(Test)</code>

使用成员函数mount绑定渲染的css选择器  
<code>test.mount("#t1")</code>   
这样，模板里的内容就会被渲染到id="t1"的容器上

html通过script标签引入vue
```html
<script type="module" src="/src/main.ts"></script>
```

### vue响应式
通过ref/reactive两个函数创建响应式的变量/对象 
```ts 
import { ref,reactive } from 'vue'  //引入ref和reactive
```
两者的区别为<code>ref</code>接受一个单一值作为参数，而<code>reactive</code>接受一个对象作为参数去初始化，例如：
```ts
const t1 = ref(0);
const t2 = reactive({
    name: "lihua"
    id: "110xxxxxxxxxxxxxxx"
    phone: 1145142986
})
```
在使用时这两有点区别在于：ref初始化的，在script标签内需要使用name.value进行操作，而在template中则是直接使用自己的名称，例：
```ts
<script setup lang="ts">
import { ref,reactive } from 'vue'
const t1 = ref(0)

function f1(){
    t1.value++  //在script标签内需要使用name.value进行操作
}
</script>

<template>
    <button @click="f1">add</button>
    <br>
    <p>{{t1}}</p> //在template中则是直接使用自己的名称
</template>
```

而reactive则是像正常的js对象一样使用.成员操作符进行操作

### 绑定 HTML class
使用:class (v-bind:class 的缩写)实现
```ts
<div :class={"class1": bool1}></dev>
```
当bool1=true时将会把class1渲染出来，如下：
```html
<div class="class1"></div>
```

### 条件渲染
使用v-if，v-else-if，v-else实现
```ts
// num=3
<h1 v-if="num==1">1</h1>
<h1 v-else-if="num==2">2</h1>
<h1 v-else="num==3">3</h1>
```
实际渲染在html中的结果为
```html
<h1>3</h1>
```

### 列表渲染
使用v-for可以循环整个对象
```ts
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```
```ts
<li v-for="item in items">
  {{ item.message }}
</li>
```