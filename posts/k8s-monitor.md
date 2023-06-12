---
title: 'k8s裝監控Grafana and '
date: '2023-06-12'
excerpt: 'k8s,kubernetes,config'
cover_image: '/images/posts/img3.jpg'
---

# kubernetes 安裝監控 prometheus & grafana

## 先取得Repo
```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

## 安裝 
```
helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring
```

### 等他跑完 這樣就裝好了 

#### 我自己是用docker 的nginx反向代理出來 



## 取得 key
```
 kubectl get secret prometheus-grafana -oyaml -n monitoring
```

## 解密 
```
 echo "cHJvbS1vcGVyYXRvcg==" | base64 --decode
```





-----

[YT教學 基本架設- no k8s](https://www.youtube.com/watch?v=DIjF3Q7ch5U)

-----

[YT教學 k8s](https://www.youtube.com/watch?v=AAZD39-YKQk)
[github helm code](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack)
