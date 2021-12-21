## 设置React环境，Webpack和Babel
```
 mkdir webpack-react-tutorial && cd webpack-react-tutorial
```

## 创建用于保存代码文件夹：

```
mkdir -p src
```

通过运行以下内容来初始化项目：
```
npm init -y
```

## 设置Webpack
运行以下命令安装webpack和webpack-cli：
```
npm i webpack webpack-cli --save-dev
```
## 现在在里面添加webpack命令package.json：
```
"scripts": {
  "build": "webpack --mode production"
}
```


## 设置 Babel 解释 JSX

安装依赖项：
```
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```


在项目根目录创建 .babelrc 文件，该文件的作用是 告诉 babel-core 在执行转换的时候使用如下插件：

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## 为了使环境能正常启动，需要安装 html-webpack-plugin 和 wepack-dev-server

```
npm i --save-dev html-webpack-plugin webpack-dev-server

```
## 执行，启动测试
```
npm run start 
```
