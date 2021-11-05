## 快速开始

### 目录

```js
├── .vscode
│   ├── launch.json // 在vscode中调试js代码
├── src
│   ├── js // js基础核心
│   └── scene // 大厂实战场景题 包括场景题、算法题
│   ├── interview // 大厂面试组合题
│   └── example // example 用于浏览器打开html 进行调试
```

### 找到对应的代码文件开始学习

## 运行代码

### 运行测试代码-VSCode插件-Code Runner

安装[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)插件，直接右键点击`run code` 即可在编辑器中执行测试代码，查看输出结果。

![](https://github.com/OBKoro1/web-basics/blob/main/static/run-code.jpg?raw=true)

`Code Runner`确实挺好用的，但缺点是无法断点调试。

### 断点调试

### 如何在Vscode中调试代码

1. 修改`.vscode/launch.json`里面的引用地址
2. 打上断点(截图所示的红点)
3. 点击右侧的调试选择`在vscode中调试代码`，开始调试对应的js文件代码
4. 输出在下面调试控制台中，变量在右侧。

![](https://github.com/OBKoro1/web-basics/blob/main/static/vscode-debugger.jpg?raw=true)

### 浏览器调试：使用html文件引用js代码

提供了一个html文件：`/src/example/index.html`，正常引用js文件，在代码中打`debugger`，在浏览器中调试代码。