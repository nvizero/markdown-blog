---
title: 'PHP 數據監控'
date: '2023-06-11'
excerpt: 'skywalking,docker'
cover_image: '/images/posts/img1.jpg'
---

先裝好SkyWalking Server版本 
在你要監控的PHP 服務器上 
裝rust 1.70版以上 
再用 
PHP 的PECL 裝skywalking 
記得有分 skywalking 跟 skywlaking_agent 

```
pecl install skywalking

pecl install skywalking_agent

```

在你的php.ini 加上 

```
[skywalking]
extension = skywalking.so
extension = skywalking_agent.so
skywalking_agent.log_file = /tmp/skywalking-agent.log
skywalking.app_code = l22_skywalking
skywalking.enable = 1
skywalking.version = 8
skywalking.grpc = IP:11800
skywalking_agent.server_addr = IP:11800
skywalking.error_handler_enable = 0
skywalking_agent.enable = On
skywalking.sample_n_per_3_secs = -1
skywalking.instance_name = ""

skywalking_agent.log_level = INFO

; Application service name.
skywalking_agent.service_name = h1212ello-skywalking

```

### 裝的時候缺少什麼 問一下ChatGpt 

## 參考
[skywalking php agent](https://geshan.com.np/blog/2023/01/nextjs-docker/)
[參考](https://blog.csdn.net/blueo666/article/details/128718826)
