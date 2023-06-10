---
title: 'k8s中的config'
date: '2023-06-10'
excerpt: 'k8s,kubernetes,config'
cover_image: '/images/posts/img1.jpg'
---



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

```
kubectl create configmap maria-cm --from-literal=DATABASE=db --from-literal=USER=wp --from-literal=PASSWORD=123 --from-literal=ROOT_PASSWORD=123
```
