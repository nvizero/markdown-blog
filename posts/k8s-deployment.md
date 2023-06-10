---
title: 'kubernetes Deployment'
date: '2023-06-10'
excerpt: 'This is the excerpt'
cover_image: '/images/posts/img1.jpg'
---

yml檔

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: ngx-dep
  name: ngx-dep
  
spec:
  replicas: 2
  selector:
    matchLabels:
      app: ngx-dep
      
  template:
    metadata:
      labels:
        app: ngx-dep
    spec:
      containers:
      - image: nginx:alpine
        name: nginx

```

寫好如何應用

```
kubectl apply -f deploy.yml
```

查看有沒有 應用在k8s 

```
kubectl get deploy

```


kubectl scale 是专门用于实现“扩容”和“缩容”的命令


```
kubectl scale --replicas=5 deploy ngx-dep

```

資料來源 
https://time.geekbang.org/column/article/535209

