# 三蹦子 - 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/gotgith/sanbengzi.svg?branch=master)](https://travis-ci.org/gotgith/sanbengzi)
## 介绍
这是一个 UI 框架，是我在学习 Vue 的过程中做的。
## 使用
1. CSS 样式要求

    使用框架的时候，请在CSS中开启border-box。
    
    ```
        * {box-sizing: border-box;}
        * ::before{box-sizing: border-box;}
        * ::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器会支持这个样式。 
    
    你还需要设置默认颜色等变量，后面会更为scss变量。
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15及以上支持这个样式。
    
2. 安装 sanbengzi
    ```
    npm install --save sanbengzi
    ```
3. 引入 sanbengzi
    ```
    import {Button, ButtonGroup, Icon} from 'sanbengzi'
    ```
    
 

## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码