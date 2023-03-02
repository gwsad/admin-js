<h1>EmpowerT储能云课堂</h1>

## 介绍

项目基于 [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin)

## 配套文档

- [点我查看国内文档站](https://yiming_chang.gitee.io/pure-admin-doc)

### 安装依赖

pnpm install

### 安装一个包

pnpm add 包名

### 卸载一个包

pnpm remove 包名

#### css 公共样式(集成自'tailwindcss')\*无需再写公共样式

css 公共样式配置文件-tailwind.config.js
[css 公共样式参考文档](https://www.tailwindcss.cn/docs)

#### 通用表格 SrmTable 组件

| props         | type     | description                        |
| ------------- | -------- | ---------------------------------- |
| columns       | Array    | 表头信息，以及 column 的 slot 方式 |
| selectVisible | Boolean  | 是否显示多选框                     |
| selectable    | Function | 多选框选中触发事件                 |

<!-- 外部注入数据传参 -->

| sourceData | Array | 外部注入 table 的数据源，优先级高于以上 url 请求方式 |
| sourceDataLoading | Boolean | 外部数据注入时的 loading |
| listTotal | Number | 列表数据总数,当 sourceData 不为空时，需由外部传入 |
| pageRequest | Object | 分页信息，page，limit 等 |

<!-- 组件内部调用接口 -->

| api | String | 'method|url'格式；method，api 请求方式，url：api 链接地址 |
| contentType | type | 请求头 header 中的 content-type |
