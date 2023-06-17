---
title: 'k8s 同步資料夾'
date: '2023-06-17'
excerpt: 'k8s,mounth,pv,pvc'
cover_image: '/images/posts/img5.jpg'
---




# k8s 建立POD 時 同步資料夾 



pv.yml

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /usr/share/nginx/html


```

pvc.yml
```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi

```


pod.yml

```
apiVersion: v1
kind: Pod
metadata:
  name: vicnginx
spec:
  containers:
  - name: nginx
    image: nginx:latest
    imagePullPolicy: Always
    workingDir: /usr/share/nginx/html
    volumeMounts:
    - name: my-volume
      mountPath: /usr/share/nginx/html
  volumes:
  - name: my-volume
    persistentVolumeClaim:
      claimName: my-pvc

```
