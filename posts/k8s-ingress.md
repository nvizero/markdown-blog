---
title: 'k8s pod ,service,ingress 簡單架設'
date: '2023-07-06'
excerpt: 'k8s,kubernetes,ingress'
cover_image: '/images/posts/img5.jpg'
---


# k8s pod ,ingress 一直報錯 


```
Error from server (BadRequest): error when creating "ingress.yml":
admission webhook "validate.nginx.ingress.kubernetes.io"
denied the request: host "errorstaff.com" and path "/" is already defined in ingress ngg/t
```


解決方式


[ingress fix](https://medium.com/ci-cd-devops/internal-error-occurred-failed-calling-webhook-validate-nginx-ingress-kubernetes-io-b5008e628e03)
