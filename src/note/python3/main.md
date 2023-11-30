# Python3

## 知识点
Python中的所有对象都是通过引用来访问的。如果一个对象的引用计数为0，它就会被垃圾回收。

## 基本数据类型
不可变数据（3 个）：`Number`（数字）、`String`（字符串）、`Tuple`（元组）  
可变数据（3 个）：`List`（列表）、`Dictionary`（字典）、`Set`（集合）。  
不可变数据数据的值不可变，但可重新赋值，而可变数据的值可变。


数字：`int`、`float`、`bool`、`complex`（复数）

List（列表）：`list = [value1, value2, value3, ...]` (相当于数组，可用下标访问和修改)

Tuple（元组）：`tuple = (value1, value2, value3, ...)` (相当于只读数组，不可修改)

Set（集合）：`set = {value1, value2, value3, ...}` (不可重复，可进行集合的运算，如交集、并集、差集等)
```python
print(a - b)     # a 和 b 的差集
print(a | b)     # a 和 b 的并集
print(a & b)     # a 和 b 的交集
print(a ^ b)     # a 和 b 中不同时存在的元素
```

Dictionary（字典）：`dict = {key1: value1, key2: value2, key3: value3, ...}` (相当于js中的对象，可用键访问和修改)

## 常用函数
```python
print() # 打印输出
input() # 输入

str() # 转换为字符串
int() # 转换为整数
float() # 转换为浮点数
repr() # 转换为表达式字符串

sorted() # 将列表排序（不会改变原列表，会返回一个新的列表）
reversed() # 返回一个反向的迭代器
```

### str相关函数
```python
:str.rjust() # 将字符串靠右, 并在左边填充空格
:str.ljust() # 将字符串靠左, 并在右边填充空格
:str.center() # 将字符串居中, 并在两边填充空格
:str.isdigit() # 检查字符串是否只由数字组成
:str.isalpha() # 检查字符串是否只由字母组成
:str.isalnum() # 检查字符串是否只由数字和字母组成
:str.islower() # 检查字符串是否只由小写字母组成
:str.isupper() # 检查字符串是否只由大写字母组成
:str.istitle() # 检查字符串是否只由首字母大写组成
:str.isspace() # 检查字符串是否只由空格组成
:str.startswith(str, beg=0,end=len(string)) # 检查字符串是否以指定字符串开头
:str.endswith(str, beg=0,end=len(string)) # 检查字符串是否以指定字符串结尾
:str.find(str, beg=0, end=len(string)) # 检查字符串是否包含指定字符串，str指定检索的字符串 beg开始索引，默认为0，end结束索引，默认为字符串的长度。
:str.replace(old_str, new_str, count) # 替换字符串中的指定字符串，old_str指定被替换的字符串，new_str指定替换的字符串，count指定替换的次数，默认为全部替换。
:str.split() # 将字符串分割为列表
:str.join() # 将列表合并为字符串
:str.strip() # 去除字符串两边的空格
:str.lstrip() # 去除字符串左边的空格
:str.rstrip() # 去除字符串右边的空格
:str.upper() # 将字符串转换为大写
:str.lower() # 将字符串转换为小写
:str.title() # 将字符串转换为首字母大写
:str.capitalize() # 将字符串第一个字符转换为大写
:str.swapcase() # 将字符串大小写互换
:str.count() # 统计字符串中指定字符串出现的次数
:str.format() # 格式化字符串
:str.zfill() # 在字符串左边填充0
:str.maketrans() # 创建字符映射转换表
:str.translate() # 根据转换表转换字符串
```

## 迭代器
创建方法：`it = iter(list)`  
使用方法：`next(it)` 返回下一个元素  
迭代器可用于for循环：`for x in it:`  
在对象中使用：`__iter__()`函数执行初始化并返回一个对象、`__next__()`函数返回迭代器的下一个值，并在没有元素时抛出`StopIteration`异常
```python
class MyNumbers:
    def __iter__(self):
        self.a = 1
        return self

    def __next__(self):
        if self.a <= 20:
            x = self.a
            self.a += 1
            return x
        else:
            raise StopIteration
```

## 生成器
生成器是一个返回迭代器的函数，只能用于迭代操作，更简单点理解生成器就是一个迭代器。
```python
def fibonacci(n):  # 生成器函数 - 斐波那契
    a, b, counter = 0, 1, 0
    while True:
        if (counter > n):
            return
        yield a
        a, b = b, a + b
        counter += 1
```


## 条件与循环
### if
```python
if condition:
    pass
elif condition:
    pass
else:
    pass
```

### while
```python
while condition:
    pass
```

### for
```python
for item in iterable:
    pass
```
iterable 可迭代对象，如`list`、`tuple`、`dict`、`set`、`str`等  
技巧：
- `range()`函数生成一个整数序列，`list(range(5))`生成`[0, 1, 2, 3, 4]`
- `enumerate()`函数可以同时获得索引和值，`for i, value in enumerate(['A', 'B', 'C'])`生成`[(0, 'A'), (1, 'B'), (2, 'C')]`
- `items()` 当对字典执行循环时，可以使用 items() 方法同时提取键及其对应的值，`for key, value in d.items()`生成`[(key1, value1), (key2, value2), (key3, value3), ...]`
- `for ... in ...`可以同时循环多个变量，`for x, y in [(1, 1), (2, 4), (3, 9)]`生成`[(1, 1), (2, 4), (3, 9)]`
`enumerate()`和`items()`区别在于，`enumerate()`是将索引和值分别赋值给两个变量，`items()`是将键和值分别赋值给两个变量


### str.format()
```python
# 位置参数
'{0}, {1}, {2}'.format('a', 'b', 'c') # 'a, b, c'
'{}, {}, {}'.format('a', 'b', 'c') # 'a, b, c'
'{2}, {1}, {0}'.format('a', 'b', 'c') # 'c, b, a'
'{2}, {1}, {0}'.format(*'abc') # 'c, b, a'
'{0}{1}{0}'.format('abra', 'cad') # 'abracadabra'
```

## 文件操作
> 转载自[菜鸟教程](http://www.runoob.com/python3/python3-file-methods.html)

`open()`将会返回一个`file`对象，基本语法格式如下:
```python
open(filename, mode)
```
`filename`：包含了你要访问的文件名称的字符串值。
`mode`：决定了打开文件的模式：只读，写入，追加等。所有可取值见如下的完全列表。这个参数是非强制的，默认文件访问模式为只读(r)。
不同模式打开文件的完全列表：

模式|描述
|:---:|---|
r|以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。
rb|以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。
r+|打开一个文件用于读写。文件指针将会放在文件的开头。
rb+|以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。
w|打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
wb|以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
w+|打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
wb+|以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
a|打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
ab|以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
a+|打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。
ab+|以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。

模式|r|r+|w|w+|a|a+
---|:---:|:---:|:---:|:---:|:---:|:---:
读|+|+||+||+
写||+|+|+|+|+
创建|||+|+|+|+
覆盖|||+|+||
指针在开始|+|+|+|+||
指针在结尾|||||+|+

### f.read()
```python
f = open('file.txt', 'r')
f.read() # 读取整个文件
f.read(4) # 读取4个字符
f.readline() # 读取一行
f.readlines() # 读取所有行
f.close() # 关闭文件
```

### f.write()
```python
f = open('file.txt', 'w')
f.write('Hello World!') # 写入字符串
f.close() # 关闭文件
```

### f.tell()
```python
f = open('file.txt', 'r')
f.tell() # 返回文件对象当前所处的位置, 它是从文件开头开始算起的字节数
f.close() # 关闭文件
```

### f.seek()
如果要改变文件指针当前的位置, 可以使用`f.seek(offset, from_what)`函数。

`from_what`的值, 如果是 0 表示开头, 如果是 1 表示当前位置, 2 表示文件的结尾
```python
f = open('file.txt', 'r')
f.seek(5) # 移动文件指针到指定位置
f.seek(5, 0) # 移动到文件的第六个字节
f.seek(-3, 2) # 移动到文件的倒数第三字节
f.close() # 关闭文件
```

### f.close()
```python
f = open('file.txt', 'r')
f.close() # 关闭文件
```