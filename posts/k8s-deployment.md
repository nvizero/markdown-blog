---
title: 'k8s pod ,service,ingress 簡單架設'
date: '2023-06-10'
excerpt: 'k8s,kubernetes,ingress,service,pod'
cover_image: '/images/posts/img4.jpg'
---


# k8s pod ,service,ingress 簡單架設 




deploy.yml


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


scv.yml

```
apiVersion: v1
kind: Service
metadata:
  name: ngx-svc
  annotations:
    external-dns.alpha.kubernetes.io/hostname: t.1buyway.com

spec:
  selector:
    app: ngx-dep
    
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
```



ing.yaml

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ex-ingress
spec:
  ingressClassName: ing 
  rules:
  - host: t.1buyway.com
    http:
      paths:
      - path: /
        pathType: ImplementationSpecific
        backend:
          service:
            name: ngx-svc
            port:
              number: 80

```

