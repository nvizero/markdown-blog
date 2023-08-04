
---
title: 'nfs 工具'
date: '2023-06-12'
excerpt: 'nfs'
cover_image: '/images/posts/img4.jpg'
---












要在三台主机上配置 NFS 共享，您需要在每台主机上分别进行安装和配置。以下是具体步骤：

1. **在每台主机上安装 NFS 服务器**

   您可以在每台主机上运行以下命令来安装 NFS 服务器软件：

   ```bash
   sudo apt-get update
   sudo apt-get install nfs-kernel-server
   ```

2. **在每台主机上配置 NFS 共享**

   您需要在每台主机上编辑 `/etc/exports` 文件。在此文件中，您可以指定要共享的目录，以及可以访问这些共享目录的客户端。

   例如，如果您想在每台主机上共享 `/var/nfs` 目录，并允许其他两台主机访问，您可以在每台主机的 `/etc/exports` 文件中添加以下行：

   在 node1 (85.113.71.1) 上：

   ```bash
   /var/nfs    192.131.142.2(rw,sync,no_subtree_check)
   /var/nfs    91.200.242.33(rw,sync,no_subtree_check)
   ```

   在 node2 (192.131.142.2) 上：

   ```bash
   /var/nfs    85.113.71.3(rw,sync,no_subtree_check)
   /var/nfs    91.200.242.3(rw,sync,no_subtree_check)
   ```

   在 node3 (91.200.242.3) 上：

   ```bash
   /var/nfs    85.113.71.1(rw,sync,no_subtree_check)
   /var/nfs    192.131.142.2(rw,sync,no_subtree_check)
   ```

   完成 `/etc/exports` 文件的编辑后，您需要在每台主机上运行以下命令，使 NFS 服务器知道共享已经更新：

   ```bash
   sudo exportfs -a
   ```

   然后，在每台主机上重启 NFS 服务以应用更改：

   ```bash
   sudo systemctl restart nfs-kernel-server
   ```

在以上步骤完成后，每台主机都将 `/var/nfs` 目录共享给其他两台主机，并允许其他两台主机访问。此外，每台主机也可以访问其他两台主机上的共享目录。
