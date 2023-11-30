# 类与对象
## 基础
类使用关键字`class`定义，类名后面紧跟着()，括号中是父类，如果没有父类，可以省略括号。类中定义的函数第一个参数必须是`self`，`self`代表类的实例，类的方法可以通过`self`访问类的属性和其他方法。
`__init__()`是类的构造函数，类的实例化时会自动调用，用于初始化类的属性  
`__del__()`是类的析构函数，类的实例被销毁时会自动调用
`@staticmethod`用于声明静态方法，静态方法不需要实例化就可以调用，静态方法不能访问类的属性和其他方法

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say(self):
        print('My name is %s, I am %d years old.' % (self.name, self.age))
```

## 继承
子类可重写父类的方法，通过`super()`调用父类的方法
```python
class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)  # 通过super()调用父类的构造函数
        self.grade = grade

    def say(self):
        print('My name is %s, I am %d years old, I am in grade %d.' % (self.name, self.age, self.grade))
```

