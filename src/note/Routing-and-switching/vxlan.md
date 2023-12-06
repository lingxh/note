# VXLAN

## 基本概念
`Underlay`: 建立VXLAN隧道的基础网络称为Underlay，如VLAN、IP网络等  
`Overlay`：VXLAN隧道承载的业务网络称为Overlay。  

`NVE`：Network Virtualization Edge，网络虚拟化边缘设备，（也没太弄明白是什么，似乎是用来提供一般虚拟的二层接口）。  

`VTEP`：VXLAN Tunnel End Point，VXLAN隧道终端设备，VXLAN隧道的起点和终点，对VXLAN报文进行封装和解封装，VTEP既可以是网络设备，也可以是服务器。  
它是VXLAN网络的绝对主角  
VXLAN报文中源IP为源端VTEP的IP地址，目的IP为目的端VTEP的IP地址。一对VETP地址就对应着一条VXLAN隧道。

`VNI`：VXLAN Network Identifier，VXLAN网络标识符，用于标识VXLAN隧道，VNI是一个24位的数字，VXLAN隧道的两端VTEP必须使用相同的VNI。（类似于VLAN ID）

`BD`：Bridge Domain，广播域，VXLAN隧道中的一个虚拟二层网络，VNI与BD是一一对应的关系。

`VBDIF`接口：VXLAN Bridge Domain Interface，基于BD创建的三层逻辑接口，用于解决不同广播域之间的通信问题。（类似于VLAN IF）

`VAP`：Virtual Access Point，虚拟接入点，即VXLAN业务接入点  
二层子接口接入：通过在二层子接口上配置流封装类型实现不同的接口接入不同的数据报文，将二层子接口关联广播域BD后，可实现报文通过子接口传递  
VLAN接入：将VLAN特定ID绑定到广播域BD，可实现实现报文通过BD转发

VXLAN与VLAN对比
对比项|VLAN|VXLAN
:---:|:---:|:---:
VLAN数量|4094|16777216
划分方式|VLAN|BD
标识方法|VLAN ID|VNI
封装方式|VLAN Tag|MAC in UDP
互通方式|VLAN IF|VBDIF

## VXLAN报文格式
![VXLAN报文格式](https://static.lingxh.net/img/2023-12-06%20125955.png)
![VXLAN报文格式](https://static.lingxh.net/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-12-06%20130501.png)

## VXLAN工作机制
同一大二层域内的VTEP直接都需要建立VXLAN隧道  
标识同一个大二层域：
- BD，与VNI存在1:1的映射关系
- 有了映射之后，进入VTEP的报文就可以根据自己所需的BD来确定报文封装时该使用哪个VNI

### 业务接入方式
基于VLAN方式：在VTEP上建立VLAN与BD的一对一或一对多的映射  
![基于VLAN方式](https://static.lingxh.net/img/Snipaste_2023-12-06_13-15-08.png)

基于报文流封装：在VTEP连接下行业务的物理口上创建二层子接口  
（可能是华为的东西，不太清除）
封装类型|进入前|封装|解封
:---:|:---:|:---:|:---:
untag|不允许携带VLAN|不处理|不处理
dot1q|只允许特定一层VLAN|剥离原始VLAN|添加或替换VLAN
default|允许所有|不处理|不处理
qinq|允许多层VLAN|剥离原始VLAN|添加或替换VLAN

![基于报文流封装](https://static.lingxh.net/img/Snipaste_2023-12-06_13-24-45.png)  
![基于报文流封装](https://static.lingxh.net/img/Snipaste_2023-12-06_13-26-28.png)  

### VXLAN隧道
建立VXLAN隧道：VXLAN隧道由一对VTEP IP地址确定
- 静态VXLAN隧道：通过手工配置源和目的IP，只要路由可达就能建立隧道
- 动态VXLAN隧道：需要借组其它协议，如BGP，主要应用在EVN和VXLAN的分布式动态网关场景中

## 流量转发过程
### ARP请求过程
![ARP请求](https://static.lingxh.net/img/Snipaste_2023-12-06_13-32-42.png)
### ARP响应过程 
![ARP响应](https://static.lingxh.net/img/Snipaste_2023-12-06_13-35-28.png)

### 网关
处于同一个VNI的情况下通过二层网关通信，处于不同VNI或与不属于VXLAN网络的设备通信时，需要通过三层网关通信。  
![三层网关](https://static.lingxh.net/img/Snipaste_2023-12-06_13-44-37.png)

#### 三层网关需配置VBDIF接口
![VBDIF](https://static.lingxh.net/img/Snipaste_2023-12-06_13-50-21.png)