# 部署指导

## 一，准备工作

- 联网的 x86-64 架构的 Linux 服务器一台（示例：ubuntu 24.04 LTS 64 bit），配置不低于 1 核 1 GB（如果会话聊天内容包含大量文件，还需要有较大的磁盘空间）
- 已经备案的域名，且备案主体与当前企业主体相同或有关联关系的域名，详情参考[企微官方配置指引](https://open.work.weixin.qq.com/wwopen/common/readDocument/40754)
- 已开通企业微信
## 二，服务部署

#### 1，安装 podman

```shell
sudo apt install podman podman-compose
```

> 也可以用 docker 替换

#### 2，下载部署文件

创建一个目录，比如：

```shell
mkdir ~/zm_session_archive
```

下载最新 docker-compose 配置文件：

```shell
curl http://huihua.xiaokefu.cn/docker-compose-prod.yml -o docker-compose.yml
```

运行：

```shell
podman-compose up -d
```

#### 3，配置 nginx（可选）

容器默认会监听服务器的 80 端口，如果你的服务器上有 nginx 而且也监听了 80 端口，可能会出现端口冲突，应该在前面加上环境变量来修改端口号，比如：

```shell
EXTERNAL_HTTP_PORT=8080 podman-compose up -d
```

nginx 配置文件如下：

```nginx
server {
  listen                  80;
  server_name             example.com;

  location / {
      proxy_pass http://127.0.0.1:8080;
      proxy_set_header Host $host;
	  proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $remote_addr;
      proxy_set_header X-Forwarded-Port $server_port;
      proxy_set_header X-Forwarded-Host $host;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_read_timeout 1200s;
    }
}
```