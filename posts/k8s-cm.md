---
title: 'k8s中的config'
date: '2023-06-10'
excerpt: 'k8s,kubernetes,config'
cover_image: '/images/posts/img1.jpg'
---


在kubernetes 中 設定ConfigMap 把以下內容 
寫在xxx.yaml中 

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: maria-cm

data:
  DATABASE: 'db'
  USER: 'wp'
  PASSWORD: '123'
  ROOT_PASSWORD: '123'

```

kubectl apply -f xxx.yaml



或是下指令
```
kubectl create configmap maria-cm --from-literal=DATABASE=db --from-literal=USER=wp --from-literal=PASSWORD=123 --from-literal=ROOT_PASSWORD=123
```
