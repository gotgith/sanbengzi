# sky-wheel UI 框架 [![Build Status](https://travis-ci.org/gotgith/sanbengzi.svg?branch=master)](https://travis-ci.org/gotgith/sanbengzi)

## 介绍
sky-wheel UI 是一个简单实用的 UI 框架。

注意：本 UI 框架的代码尚未完全完工，请不要在生产环境中使用本 UI 框架。

## 使用

    1. CSS 样式要求

    使用框架的时候，请在CSS中开启border-box。
    
    ```
        * {box-sizing: border-box;}
        * ::before{box-sizing: border-box;}
        * ::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器会支持这个样式。 
    2. 安装 sanbengzi
    ```
    npm install --save sanbengzi
    ```
    3. 引入 sanbengzi
    ```
    import {Button, ButtonGroup, Icon} from 'sanbengzi'
    ```

## 有哪些轮子

Button-按钮、Input-输入框、Grid-网格、Layout-布局、Toast-弹出框、Tabs-标签页、Popover-弹出层、Collapse-手风琴等

## 项目特点

1. 使用 Travis CI 进行持续集成
2. 实用了 Karma + Mocha 做单元测试
3. 本框架是基于 Vue 2 实现
4. 使用 parcel 一个Web应用程序打包器

## 文档

[官方文档](https://gotgith.github.io/sanbengzi/)

## 提问

[issue](https://github.com/gotgith/sanbengzi/issues)

## 联系方式

邮箱：18468107890@163.com

## 贡献代码

[Pull requests](https://github.com/gotgith/sanbengzi/pulls)

## 遵循 MIT 开源协议
#### Copyright © 2019 Jiang Hao




    

