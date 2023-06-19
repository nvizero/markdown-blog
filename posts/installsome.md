---
title: 'Linux install some'
date: '2023-06-19'
excerpt: 'Linux,安裝'
cover_image: '/images/posts/img6.jpg'
---


## 安裝JAVA

從JAVA 官網下載好之後 
上傳到SERVER 
比如說mv jdk1.8.gz /usr/local/
解壓好之後 
修改

/etc/profile 

加入


```
JAVA_HOME=/usr/local/jdk1.8
PATH=$PATH:$JAVA_HOME/bin

```

儲存後 
source /etc/profile 
重讀一次 JAVA 就裝好了 

