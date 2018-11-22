# Introduction

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `weex-loader`. 

## Quickstart

To use this template, scaffold a project with [weexpack v1.1.1+](https://github.com/weexteam/weex-pack).

``` bash
$ npm install -g weex-toolkit
$ weex create my-project # default will create the webpack template
$ cd my-project && npm start
```

## How to use less/sass/pug

Take `sass` for example:

```
$ npm i node-sass sass-loader --save
```

Then, you just need to change the `style` tag as: `<style lang="sass"><style>`.

## How to create your own template

See [How-to-create-your-own-template](https://github.com/weex-templates/How-to-create-your-own-template).

## remind note about weex 
1） 不支持常规的:class写法，建议使用计算属性，或者函数的形式
```
  <scroller class="word-slider" :class='_hasMoreHeight'>
  computed: {
    _hasMoreHeight () {
      if (this.hasMoreHeightFlag) {
        return 'more-height'
      }
      return 'nomal-sty'
    }
  },
  或者
  <div class="radius-platform" :class='[_isShow()]'>
  methods: {
    _isShow () {
      if (!this.isShowFlag) {
        return 'no-display'
      }
      return 'is-display'
    },
  }
```
2）关于图片资源的加载，android,ios要进行特殊处理，image要设置width,height
```
 <image  width="200px" height="200px"/>
```
3）关于命令行打包使用
```
npm start: web本地查看
weex run android: 打包apk(android) ,对应查看dist， realease文件夹下
npm run pack:web：打包web端，对应查看release文件夹下
```

