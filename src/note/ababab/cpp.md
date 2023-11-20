# c++

## promise和future介绍
- `std::future`是一个类模板`(class template)`，其对象存储未来的值，一个`std::future`对象在内部存储一个将来会被赋值的值，并提供了一个访问该值的机制，通过`get()`成员函数实现。在此之前试图在`get()`函数可用之前通过它来访问相关的值，那么`get()`函数将会阻塞，直到该值可用。
- `std::promise`也是一个类模板，其对象有可能在将来会被人为赋值，每个`std::promise`对象有一个对应的`std::future`对象，一旦由`std::promise`对象设置，`std::future`将会对其赋值。
- `std::promise`对象与其管理的`std::future`对象共享数据。

## join与detach方式
当线程启动后，一定要在和线程相关联的thread销毁前，确定以何种方式等待线程执行结束。比如上例中的join。  
- detach方式，启动的线程自主在后台运行，当前的代码继续往下执行，不等待新线程结束。
- join方式，等待启动的线程完成，才会继续往下执行。
可以使用joinable判断是join模式还是detach模式。
``` cpp
if (myThread.joinable()) foo.join();
```

## this_thread
this_thread是一个类，它有4个功能函数，具体如下：

函数|使用|说明
|----|----|----|
get_id|std::this_thread::get_id()|获取线程id
yield|std::this_thread::yield()|放弃线程执行，回到就绪状态
sleep_for|std::this_thread::sleep_for(std::chrono::seconds(1));|暂停1秒
sleep_until|如下|阻塞当前正在执行的线程直到sleep_time溢出或者到达sleep_time
```cpp
using std::chrono::system_clock;
std::time_t tt = system_clock::to_time_t(system_clock::now());
struct std::tm * ptm = std::localtime(&tt);
cout << "Waiting for the next minute to begin...\n";
++ptm->tm_min; //加一分钟
ptm->tm_sec = 0; //秒数设置为0//暂停执行，到下一整分执行
this_thread::sleep_until(system_clock::from_time_t(mktime(ptm)));
```