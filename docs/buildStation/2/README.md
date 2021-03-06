# 武装服务器
> 这里会先登录,然后安装必备的软件,例如node/git/Nginx

既然是登录肯定是有用户名和密码,密码是在购买服务器或是在初始化服务器时设置的,比较简单就不多说了,反正只要是让你输密码的地方我们都留意下记住就好了,肯定都用得上.

用户名也是可以自定义的,但是我们只按照最简单的说,以阿里云和腾讯云为例,默认 **root** 用户名就可直接登陆,滴滴云就不行,需要手动切到root才行.默认用户名如图:

![滴滴云用户名](../../public/content-img/username.png#bigimg)

> **dc2-user** 就是我们的登陆账号了.

## 登陆

登陆的方式有很多,像Xshell等工具还是比较易用和强大的,不过就像我上面说的那样,简单易懂傻瓜操作才是我们这篇博客所追求的,所以我使用最简单的系统自带的命令行去操作(如果你是windows用户也非常推荐使用cmder,比自带的美观易用一些).

### 打开cmd,输入ssh命令:
```
ssh dc2-user@***.***.**.*** //你的ip地址
```
输入正确的密码后,无报错即登录成功.
输出`ls`命令查看当前目录文件,发现没有输出内容.这是正确的,因为你仔细观察你其实是在一个`~`目录下,这是用户目录,相当于windows下的`c/user/***`,默认是没有文件的.

## node

前端node必备自然不必说了.接着上面的命令行接着操作

1. 下载node压缩包到你的用户目录下:
```
wget https://cdn.npm.taobao.org/dist/node/v12.13.0/node-v12.13.0-linux-x64.tar.xz
```
> 我这个是国内cdn的资源.如果下载失败你也可以去官网查看包的下载地址

2. 解压文件。
```
tar xvf node-v12.13.0-linux-x64.tar.xz
```

3. 创建软链接，使node和npm命令全局有效。通过创建软链接的方法，使得在任意目录下都可以直接使用node和npm命令：
```
ln -s /root/node-v12.13.0-linux-x64/bin/node /usr/local/bin/node
ln -s /root/node-v12.13.0-linux-x64/bin/npm /usr/local/bin/npm
```
> 这个地方是有坑的,像腾讯云/阿里云本身就是`root`用户,这样操作是没问题的.但是如果想滴滴云这种,登陆用户是`dc2-user`,这样目录是错的,而且没有权限设置软连接.

4. 查看node、npm版本。

```
node -v
npm -v
```

5. 现在安装pm2
```
npm install pm2@latest -g
```

至此node环境安装完成的差不多了.

## git

1. 安装
```
yum install git
```

2. git的作用
我认为服务器的git的作用是比本机上的git更有作用,因为他可以利用git托管平台的webhooks进行自动化部署.




