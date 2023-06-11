---
title: 'k8s裝監控Grafana and '
date: '2023-06-10'
excerpt: 'k8s,kubernetes,config'
cover_image: '/images/posts/img1.jpg'
---



prometheus.yml

```
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: prometheus-node-exporter
  namespace: monitoring
  labels:
    app: prometheus
    component: node-exporter
spec:
  selector:
    matchLabels:
      app: prometheus
      component: node-exporter
  template:
    metadata:
      labels:
        app: prometheus
        component: node-exporter
    spec:
      containers:
      - name: node-exporter
        image: prom/node-exporter:v1.0.1
        args:
        - '--path.procfs=/host/proc'
        - '--path.sysfs=/host/sys'
        - '--path.rootfs=/host'
        - '--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc)($$|/)'
        ports:
        - name: metrics
          containerPort: 9100
          protocol: TCP
        volumeMounts:
        - name: proc
          mountPath: /host/proc
          readOnly: true
        - name: sys
          mountPath: /host/sys
          readOnly: true
        - name: root
          mountPath: /rootfs
          readOnly: true
      volumes:
      - name: proc
        hostPath:
          path: /proc
      - name: sys
        hostPath:
          path: /sys
      - name: root
        hostPath:
          path: /
      hostNetwork: true
      hostPID: true

```
因為 namespace 是 monitoring
要先建立

```
kubectl create namespace monitoring
```
再
kubectl apply Prometheus.yml





在kubernetes 安裝grafana  


```
helm install grafana grafana/grafana --namespace grafana --set adminUser=myusername --set adminPassword=mypassword

helm install grafana grafana/grafana --namespace grafana --set adminUser=admin --set adminPassword=admin
```




[YT教學 基本架設- has k8s](https://www.youtube.com/watch?v=NABZqKq1McE)
[YT教學 基本架設- no k8s](https://www.youtube.com/watch?v=DIjF3Q7ch5U)
