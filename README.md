设置React环境，Webpack和Babel

mkdir webpack-react-tutorial && cd webpack-react-tutorial
创建用于保存代码的最小目录结构：

mkdir -p src

通过运行以下内容来初始化项目：
npm init -y
设置Webpack
让我们通过运行以下命令安装webpack和webpack-cli：

npm i webpack webpack-cli --save-dev
现在在里面添加webpack命令package.json：

"scripts": {
  "build": "webpack --mode production"
}
此时，无需为webpack定义配置文件。较旧的webpack版本会自动查找配置文件。从版本4开始，情况不再如此。

设置 Babel 解释 JSX

安装依赖项：

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
以上工具的作用是：webpack项目里当 import 一个.jsx文件时，使用 babel-loader 来处理这个文件， babel-loader 使用 @babel/core 来执行转换， 在转换的过程中使用了babel的 @babel/preset-env插件用于把最新的ES转换为ES5，使用 @babel/preset-react把 JSX转换为正常的JavaScript。

在项目根目录创建 .babelrc 文件，该文件的作用是 告诉 babel-core 在执行转换的时候使用如下插件：

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}


为了使环境能正常启动，需要安装 html-webpack-plugin 和 wepack-dev-server

npm i --save-dev html-webpack-plugin webpack-dev-server


执行，启动测试

npm run start 
