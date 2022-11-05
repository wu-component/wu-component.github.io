## Lottie 动画

[Lottie](https://lottiefiles.com//)  是 Airbnb 开发的，一个适用于 Android、iOS、Web 和 Windows 的库，能够渲染 Adob​​e After Effects 动画特效。

wu-plus-lottie 是基于 lottie-web 重新进行了封装，开发者无需手动实例化 Lottie， 可如同普通 HTML 标签般接入。

### 基础用法

::: demo
```html
<template>
    <div class="button-container" style="display: flex; flex-wrap: wrap; align-items: center;justify-content: space-around;padding: 16px">
        <div style="width: 300px; height: 300px">
            <wu-plus-lottie data="https://cdn.canyuegongzi.xyz/wu-component-static/lf20_r6blppzq.json"></wu-plus-lottie>
        </div>
    </div>
</template>
<script>
</script>
<style>
</style>
```
:::

### 场景

很多场景中都可以使用组件，如空列表的数据。

::: demo
```html
<template>
    <div class="button-container" style="display: flex; flex-wrap: wrap; align-items: center;justify-content: space-around;padding: 16px">
        <div style="width: 300px; height: 300px">
            <wu-plus-lottie data="https://cdn.canyuegongzi.xyz/wu-component-static/empty-list.json"></wu-plus-lottie>
        </div>  
    </div>
</template>
<script>
</script>
<style>
</style>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size | 组件大小 | UISize | medium、small、mini | mini |
| autoplay | 是否自动播放 | Boolean | true、false | true |
| loop | 是否循环 | Boolean | true、false | true |
| renderer | 渲染类型 | String | svg、canvas、 html | svg |
| config | Lottie 其他配置项 | Object | 参考 Lottie | {} |

### Methods

| 方法名  | 说明    | 方法     | 
|--------|--------|---------- |
| start | 开始动画 | () => boolean |
| stop   | 结束动画 | () => boolean |