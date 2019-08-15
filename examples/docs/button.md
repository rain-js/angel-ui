# Button 按钮
----

### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式

<div class="demo-block">
  <div>
    <gl-button>默认按钮</gl-button>
    <gl-button type="primary">主要按钮</gl-button>
    <gl-button type="success">成功按钮</gl-button>
    <gl-button type="info">信息按钮</gl-button>
    <gl-button type="warning">警告按钮</gl-button>
    <gl-button type="danger">危险按钮</gl-button>
  </div>
  <div class="m-10">
    <gl-button plain>默认按钮</gl-button>
    <gl-button type="primary" plain>主要按钮</gl-button>
    <gl-button type="success" plain>成功按钮</gl-button>
    <gl-button type="info" plain>信息按钮</gl-button>
    <gl-button type="warning" plain>警告按钮</gl-button>
    <gl-button type="danger" plain>危险按钮</gl-button>
  </div>
  <div class="m-10">
    <gl-button round>默认按钮</gl-button>
    <gl-button type="primary" round>主要按钮</gl-button>
    <gl-button type="success" round>成功按钮</gl-button>
    <gl-button type="info" round>信息按钮</gl-button>
    <gl-button type="warning" round>警告按钮</gl-button>
    <gl-button type="danger" round>危险按钮</gl-button>
  </div>
</div>

::: demo
``` html
  <div>
    <gl-button>默认按钮</gl-button>
    <gl-button type="primary">主要按钮</gl-button>
    <gl-button type="success">成功按钮</gl-button>
    <gl-button type="info">信息按钮</gl-button>
    <gl-button type="warning">警告按钮</gl-button>
    <gl-button type="danger">危险按钮</gl-button>
  </div>
  <div>
    <gl-button plain>默认按钮</gl-button>
    <gl-button type="primary" plain>主要按钮</gl-button>
    <gl-button type="success" plain>成功按钮</gl-button>
    <gl-button type="info" plain>信息按钮</gl-button>
    <gl-button type="warning" plain>警告按钮</gl-button>
    <gl-button type="danger" plain>危险按钮</gl-button>
  </div>
  <div>
    <gl-button round>默认按钮</gl-button>
    <gl-button type="primary" round>主要按钮</gl-button>
    <gl-button type="success" round>成功按钮</gl-button>
    <gl-button type="info" round>信息按钮</gl-button>
    <gl-button type="warning" round>警告按钮</gl-button>
    <gl-button type="danger" round>危险按钮</gl-button>
  </div>
```
:::

### 禁用状态
按钮不可用状态

<div class="demo-block">
  <div>
    <gl-button disabled>默认按钮</gl-button>
    <gl-button type="primary" disabled>主要按钮</gl-button>
    <gl-button type="success" disabled>成功按钮</gl-button>
    <gl-button type="info" disabled>信息按钮</gl-button>
    <gl-button type="warning" disabled>警告按钮</gl-button>
    <gl-button type="danger" disabled>危险按钮</gl-button>
  </div>
  <div class="m-10">
    <gl-button plain disabled>默认按钮</gl-button>
    <gl-button type="primary" plain disabled>主要按钮</gl-button>
    <gl-button type="success" plain disabled>成功按钮</gl-button>
    <gl-button type="info" plain disabled>信息按钮</gl-button>
    <gl-button type="warning" plain disabled>警告按钮</gl-button>
    <gl-button type="danger" plain disabled>危险按钮</gl-button>
  </div>
  <div class="m-10">
    <gl-button round disabled>默认按钮</gl-button>
    <gl-button type="primary" round disabled>主要按钮</gl-button>
    <gl-button type="success" round disabled>成功按钮</gl-button>
    <gl-button type="info" round disabled>信息按钮</gl-button>
    <gl-button type="warning" round disabled>警告按钮</gl-button>
    <gl-button type="danger" round disabled>危险按钮</gl-button>
  </div>
</div>

::: demo
``` html
  <div>
    <gl-button disabled>默认按钮</gl-button>
    <gl-button type="primary" disabled>主要按钮</gl-button>
    <gl-button type="success" disabled>成功按钮</gl-button>
    <gl-button type="info" disabled>信息按钮</gl-button>
    <gl-button type="warning" disabled>警告按钮</gl-button>
    <gl-button type="danger" disabled>危险按钮</gl-button>
  </div>
  <div class="m-10">
    <gl-button plain disabled>默认按钮</gl-button>
    <gl-button type="primary" plain disabled>主要按钮</gl-button>
    <gl-button type="success" plain disabled>成功按钮</gl-button>
    <gl-button type="info" plain disabled>信息按钮</gl-button>
    <gl-button type="warning" plain disabled>警告按钮</gl-button>
    <gl-button type="danger" plain disabled>危险按钮</gl-button>
  </div>
  <div class="m-10">
    <gl-button round disabled>默认按钮</gl-button>
    <gl-button type="primary" round disabled>主要按钮</gl-button>
    <gl-button type="success" round disabled>成功按钮</gl-button>
    <gl-button type="info" round disabled>信息按钮</gl-button>
    <gl-button type="warning" round disabled>警告按钮</gl-button>
    <gl-button type="danger" round disabled>危险按钮</gl-button>
  </div>
```
:::

### 不同尺寸
Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="demo-block">
  <div>
    <gl-button>默认尺寸</gl-button>
    <gl-button size="medium">中等尺寸</gl-button>
    <gl-button size="small">小型尺寸</gl-button>
  </div>
  <div class="m-10">
    <gl-button round>默认尺寸</gl-button>
    <gl-button size="medium" round>中等尺寸</gl-button>
    <gl-button size="small" round>小型尺寸</gl-button>
  </div>
</div>

:::demo
``` html
  <div>
    <gl-button>默认尺寸</gl-button>
    <gl-button size="medium">中等尺寸</gl-button>
    <gl-button size="small">小型尺寸</gl-button>
  </div>
  <div>
    <gl-button round>默认尺寸</gl-button>
    <gl-button size="medium" round>中等尺寸</gl-button>
    <gl-button size="small" round>小型尺寸</gl-button>
  </div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium,small            |    —     |
| type     | 类型   | string    |   default,primary,success,warning,danger,info |     default    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |