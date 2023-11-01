---
title: RIP配置
order: 2
---

# RIP配置

# 创建或进入RIP进程
```
rip [PID]
```
# 配置RIP版本
```sh
version 2 #或者1
```
# 关闭自动路由汇总
```
undo summary
```
# 宣告RIP路由
```sh
network 10.0.0.0
network 192.168.1.0
network 172.16.3.0
...
#RIP不支持带掩码宣告，v2会自动生成掩码
```

# 接口输入输出附加度量值
```sh
metricin #接口输入附加度量值
metricout #接口输出附加度量值
```

# 静默接口
```sh
silent-interface { all | interface-type interface-number } #只收不发
```

# RIP2认证
```
还不会
```

# display相关
```sh
display rip #查看RIP进程的当前运行状态及配置信息

```

# 防环机制：
- 水平分割：一条路由从某个接口学习到，不会再从该接口发出去
- 触发更新：一旦路由发生更新，立即向邻居发送response报文更新路由表
- 毒性逆转：一条路由从某个接口学习到，将跳数设置为16（不可达），再从该接口发出