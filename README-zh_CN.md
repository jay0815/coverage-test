# coverage-test-demo-template
> 基于karam的基础测试套件

[![codecov](https://codecov.io/gh/jay0815/coverage-test/branch/master/graph/badge.svg)](https://codecov.io/gh/jay0815/coverage-test)
[![github-action-image](https://github.com/jay0815/coverage-test/workflows/CI/badge.svg)](https://codecov.io/gh/jay0815/coverage-test)

[English README](./README-zh_CN.md)

### 特性

* 支持 __ES6__
  * 已集成 __babel__
* 支持 __(DOM|BOM)__ 的测试
  * karam天然支持使用真正的浏览器测试, 让代码运行在更贴近真实的环境
* 借助Karam, 支持同时在不同的浏览器上运行测试用例
* 支持 __BDD__ 和 __TDD__ 两种风格的测试用例编写
  * 已集成 __chai__ 断言库
* 支持覆盖测试
  * 已集成 __istanbul___
  * 代码 ``` yarn coverage ```
![image](./result.png)
* 支持一键浏览器展示测试报告
  * 使用webpack-dev-server代理测试结果目录
  * 代码 ``` yarn report ```
* 支持上传测试结果并获取覆盖率图标
  * 已集成 __codecov__
  * ``` yarn codecov ```
![image](./codecov.png)


### 都有谁需要看这个模板实例

* 为ES6代码写用例，不知道如何搭建测试环境的小伙伴
* 场景 需要让 代码在不同 浏览器上运行测试
* 对Karam配置有很多小疑问的人群

没有这些烦恼的话，AVA、Cypress、Jest或许更适合你

### 选择你真正需要的报告模板

[Istanbul's 报告模板示例](https://istanbul.js.org/docs/advanced/alternative-reporters/)

### 如何使用 codecov
  * 需要注册一个 codecov 账号
  * 在codecov上绑定你需要显示codecov的代码仓库
  * 获取到CODECOV_TOKEN
  * 复制本仓库中packag.json -> scripts -> codecov 中的命令
  * 替换 CODECOV_TOKEN 后面的token
  * 在你的代码中运行codecov命令
  * 在你codecov当前仓库的settings中的Badge就可以取到你要的图标链接了