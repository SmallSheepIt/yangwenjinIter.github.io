# Github Actions

## 一、简介

Github Actions 是 Github 平台提供的一项持续集成（CI）和持续部署（CD）服务。它允许开发者自定义自动化软件开发工作流程（工作流），例如构建、测试和部署代码。

下面介绍项目代码怎么集成  Github Actions  工作流

## 二、配置

在项目根目录创建`.github/workflows/deploy.yml`文件（文件名`deploy.yml`可随意）

- 如果要将代码部署到自己的服务器，可以编写`vuepress-deploy.yml`

```yml
name: Build and Deploy
# 监听 master 分支上的 push 事件
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    # 构建环境使用 ubuntu
    runs-on: ubuntu-latest
    steps:
      # 官方action, 将代码拉取到虚拟机
      - name: Checkout
        uses: actions/checkout@v3
        with:
          persist-credentials: false

      # 安装node.js
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16"

      # 下载依赖、打包项目
      - name: Install and Build
        run: |
          yarn install
          yarn docs:build

      # 部署到服务器
      - name: Upload to Deploy Server
        uses: appleboy/scp-action@master
        with:
          # 服务器域名
          host: ${{ secrets.HOST }}
          # 服务器用户名
          username: ${{ secrets.USERNAME }}
          # 服务器密码
          password: ${{ secrets.PASSWORD }}
          # 服务器端口
          port: ${{ secrets.PORT }}
          # 指定上传的文件目录(项目配置的打包目录名称)
          source: '.vuepress/dist/*'
          # 指定上传服务器目录
          target: '/yangwenjin-blogs'
          # 解压时覆盖现有文件
          overwrite: true
          # 删除指定数量的前导路径元素
          strip_components: 1
```

上面配置会将本地仓库代码打包生成后的`.vuepress/dist/*`通过 ssh 上传到目标服务器的 `/yangwenjin-blogs`目录，最后在服务器生成的目录为`/yangwenjin-blogs/dist/*`

- 如果要将代码部署到github-pages，可以配置

```yml
name: Deploy

on:
    push:
        branches:
            - main

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            - uses: actions/setup-node@v3
              with:
                  node-version: 16
                  cache: npm
            - run: npm install

            - name: Build
              run: npm run docs:build

            - name: Deploy to GitHub Pages
              uses: crazy-max/ghaction-github-pages@v2
              with:
                  target_branch: gh-pages
                  build_dir: src/.vuepress/dist
              env:
                  GITHUB_TOKEN: ${{ secrets.SEC }}
```

> 使用 ${{ }}定义的变量需要在  github 仓库的 Settings - Secrets and Variables - Actions 的 Repository secrets 创建对应的值

![image-20240513194647464](https://smallsheep-assets.oss-cn-guangzhou.aliyuncs.com/assets/202405131946160.png)