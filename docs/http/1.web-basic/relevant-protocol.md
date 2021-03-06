---
title: HTTP相关协议
sidebar_label: HTTP相关协议
---

import Img from '../../../src/components/Img'

## 前言

在 HTTP2 之前，HTTP 的运行是建立在 TCP 和 IP 协议之上的，所以 HTTP 协议与 TCP 和 IP 协议息息相关。但当 HTTP 发展到 HTTP3 的时候，为了从根本解决“队头阻塞”问题，将 TCP 替换成了“不可靠的”UDP 协议。而本节主要的目的就是简单介绍这些与 HTTP 协议相关的网络协议。

## 什么是协议？

计算机与网络设备要相互通信，双方就必须基于相同的方法。比如，如何探测到通信目标、由哪一边先发起通信、使用哪种语言进行通信、怎样结束通信等规则都需要事先确定。不同的硬件、操作系统之间的通信，所有的这一切都需要一种规则。而我们就把这种规则称为协议( protocol)。

## TCP 协议与 IP 协议

### TCP 协议

TCP 协议是**Transmission Control Protocol**的简称，意思是 **传输控制协议**，它位于 IP 协议之上，基于 IP 协议提供可靠的、字节流形式的通信，是 HTTP 协议得以实现的基础。

**可靠**是指保证数据不丢失，**字节流**是指保证数据完整，所以在 TCP 协议的两端可以如同操作文件一样访问传输的数据，就像是读写在一个密闭的管道里**流动**的字节。

### IP 协议

IP 协议是**Internet Protocol** 的简称，主要目的是解决寻址和路由问题，以及如何在两点间传送数据包。IP 协议使用**IP 地址**的概念来定位互联网上的每一台计算机。可以对比一下现实中的电话系统，你拿着的手机相当于互联网上的计算机，而要打电话就必须接入电话网，由通信公司给你分配一个号码，这个号码就相当于 IP 地址。

## DNS 协议

在 TCP/IP 协议中使用 IP 地址来标识计算机，数字形式的地址对于计算机来说是方便了，但对于人类来说却既难以记忆又难以输入。

可以想一下我们使用手机打电话，如果让我们每次打电话都要输入电话号码显然是令人不爽的。所以一般我们都会把朋友的手机号和姓名存储在通讯录中，然后找到姓名就可以直接拨打电话了。那么这里的姓名就对应着**域名**，而电话号码对应的就是**IP**，而解析这层映射就是**DNS**要做的工作。

### DNS 解析

DNS 解析一般分为递归查询和迭代查询两种，如下图所示：

<Img width="360" legend="图：DNS迭代查询" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/73yGSZ.jpg" />

上图是我们常见的是 DNS 的迭代查询，关于递归或者迭代查询各级服务器的过程和区别可以查看这篇文章：[DNS 解析过程原理](https://juejin.im/post/5b0a32a36fb9a07ab979f0b4)

## UDP 协议

UDP 协议是**User Datagram Protocol**的简称， 意思是 **用户数据报协议**。UDP 协议是 OSI 参考模型中一种**无连接的传输层协议**，提供**面向事务的简单不可靠信息传送服务**。UDP 与 TCP 与一样都是位于 IP 协议之上，属于传输层协议。

因为 UDP 是无链接的，所以 UDP 的传输速度相比与 TCP 来说快的多，这也是 HTTP3 中使用 UDP 的原因之一。关于 UDP 的详细特点以及与 TCP 协议的区别网上有很多资料此处不再赘述。
