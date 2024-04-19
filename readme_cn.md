# Gia

一个简单快速的后端API，基于 Hono，可以通过关键词在互联网上搜索到相关的内容并转换成适合 LLM 处理的格式。

支持 cloudflare 部署。

```shell
npm install
npm run dev
```

```shell
npm run deploy
```

## 请求参数

| 字段 | 类型 | 是否必填 | 描述 |
|------|------|---------|------|
| query | string | 是 | 搜索的关键词或查询语句 |
| count | number | 否 | 返回的结果数量 |
| allowAdult | boolean | 否 | 是否允许包含成人内容,默认为 false |
| allowEmptyResults | boolean | 否 | 是否允许没有结果,默认为 false |
| searchEnglines | string[] | 否 | 使用的搜索引擎名称数组,可能有默认设置 |
| rerank | boolean | 否 | 是否重新排序搜索结果,默认为 false |
| withDetails | boolean | 否 | 是否包含搜索结果的详细信息,默认为 false |
