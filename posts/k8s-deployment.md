---
title: '架自己的k8s'
date: '2023-06-10'
excerpt: 'k8s,kubernetes'
cover_image: '/images/posts/img1.jpg'
---

#架設自有的Kubernetes 
先下載
```
git clone https://github.com/kubernetes-sigs/kubespray
```
需要三台主機

用 VM 也可以 (記得開root權限 ...)

他的原理是用ansible去做架設 所以你的電腦要先裝好Ansible


假設有三台主機 
===================================
 
node-master
 root@111.112.71.222

node1
 root@111.112.71.223

node2
 root@111.112.71.224
===================================

### 設定主機IP
```
declare -a IPS=(111.112.71.222 111.112.71.223 111.112.71.224)
```
### 把設定好的IP 應用到config (記得先git clone https://github.com/kubernetes-sigs/kubespray 再CD到目錄下 )
```
CONFIG_FILE=inventory/mycluster/hosts.yaml python3 contrib/inventory_builder/inventory.py ${IPS[@]}
```

#### 好了之後 查看 inventory/mycluster/hosts.yaml 是不是有吃到你的IP 

確定好 再執行

#### 官方的 :
```
ansible-playbook -i inventory/mycluster/hosts.yaml  --become --become-user=root reset.yml
```

#### YT的 :
```
ansible-playbook -i inventory/mycluster/hosts.yaml  -e @./cluster-config.yaml  --user=root --become --become-user=root --ask-become-pass  -K  cluster.yml

```

ansible的版本也要注意有報錯看下錯誤訊息

### 裝好後進入 master-node 查看

```
kubectl get nodes
```

### 資料來源
https://www.youtube.com/watch?v=1W4w2ziRU8Q

#### Github
https://github.com/kubernetes-sigs/kubespray
