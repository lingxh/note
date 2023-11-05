# 踩坑记录

### 在windows上的git comoit使用gpg签名时，可能会出现找不到密钥的情况
```sh
gpg: skipped "XXXXXXXXXXXXXXXX": No secret key
gpg: signing failed: No secret key
```

原因是windows上的git自带gpg与系统安装的gpg是独立的  
解决办法：<code>where gpg</code> 或 <code>where gpg2</code> 获取gpg的可执行文件路径  
<code>git config --global gpg.program “url”</code>  指定git使用特定的gpg可执行文件


### git配置http代理时出现 Port number was not a decimal number between 0 and 65535
原因不明  
解决方法：不加http://   
<code>git config --global http.proxy 127.0.0.1:10809</code>


### github无法使用ssh推送仓库
原因未知  
解决方法：改用https的方式  



### cloudflare构建vuepress-theme-hope项目失败
原因未知  
解决方法：设置环境变量  
<code>YARN_ENABLE_IMMUTABLE_INSTALLS = false</code>
