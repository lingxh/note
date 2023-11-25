# 华为ospf配置
## ospf基本配置
```shell
ospf [进程ID] router-id [路由器ID]  #为更好管理一般手动指定router-id
area [区域ID]  #指定区域ID
area [区域ID] stub (no-summary)  #指定stub区域类型
area [区域ID] nssa (no-summary)  #指定nssa区域类型
network [网络地址] [掩码] [区域ID]  #指定ospf网络
```

## vlink配置
在区域视图中配置
```shell
vlink-peer [对端路由器ID] #指定对端路由器ID
```

## ospf路由控制
命令|作用
|----|----|
[filter-policy impor](https://support.huawei.com/enterprise/zh/doc/EDOC1100214487/7e246bda)|在任何路由器上，对==进==路由表的路由做过滤
[filter-policy export](https://support.huawei.com/enterprise/zh/doc/EDOC1000128396/b5b9b3b1)|在ASBR上，对引入的外部路由做过滤
[filter export](https://support.huawei.com/enterprise/zh/doc/EDOC1100169982/a5c2a8e)|ABR上，对==离开==区域的LSA3路由做过滤
[filter import](https://support.huawei.com/enterprise/zh/doc/EDOC1100169982/c1c1f2e5)|ABR上，对==进入==区域的LSA3路由做过滤
[filter-LSA-out](https://support.huawei.com/enterprise/zh/doc/EDOC1100126908/bc74c901)|接口下，对泛洪的全部LSA做过滤
ABR-Summary not-advertise|ABR上对聚合路由范围内的所有明显路由过滤
ASBR-Summary not-advertise|ASBR上对聚合路由范围内的所有明显路由过滤