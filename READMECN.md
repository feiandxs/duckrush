# DuckRush

![duckrush](/assets/logo.jpg){:height="500px" width="500px"}

一个简单快速的后端API，基于 Hono，可以通过关键词在互联网上搜索到相关的内容并转换成适合 LLM 处理的格式。

支持 *cloudflare workers* 部署。

```shell
npm install
npm run dev
```

```shell
npm run deploy
```

## 请求地址

```code
/search
```

## 请求方式

```request
POST
```

## payload 类型

```code
json
```

## 校验 Authentication

默认情况下没有启用任何校验措施，直接请求即可。
如果需要启用校验机制，修改项目根目录下的 `wrangler.toml`，将其中的

```text
# token = "duckrush"
```

的注释取消，修改为

```text
token = "duckrush"
```

其中 `duckrush` 为你自定义的校验token，然后前端使用 `Bearer` 方式提交。

## 请求参数

| 字段 | 类型 | 是否必填 | 描述 |
|------|------|---------|------|
| query | string | 是 | 搜索的关键词或查询语句 |

## 示例

### request

```json
{
    "query": "what is the answer to life, the universe, and everything"
}
```

### response

```json
{
    "code": 0,
    "message": "OK",
    "data": {
        "results": [
            {
                "title": "The answer to life, the universe, and everything | MIT News ...",
                "url": "https://news.mit.edu/2019/answer-life-universe-and-everything-sum-three-cubes-mathematics-0910",
                "description": "A team of mathematicians led by Andrew Sutherland of MIT and Andrew Booker of Bristol University found the <b>answer</b> <b>to</b> <b>the</b> elusive number 42, which is the <b>answer</b> <b>to</b> <b>life,</b> <b>the</b> <b>universe,</b> <b>and</b> <b>everything</b> in Douglas Adams' novel. They used a massively parallel computation platform of over 400,000 volunteers' PCs to solve the sum-of-three-cubes equation x^3 + y^3 + z^3 = 42.",
                "searchEngine": "DuckDuckGo",
                "rank": 1,
                "timestamp": 1713776241096
            },
            {
                "title": "Phrases from The Hitchhiker&#x27;s Guide to the Galaxy - Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy",
                "description": "<b>The</b> <b>Answer</b> <b>to</b> <b>the</b> Ultimate Question of <b>Life</b>, <b>The</b> <b>Universe</b>, <b>and</b> <b>Everything</b>. In the radio series and the first novel, a group of hyper-intelligent pan-dimensional beings demand to learn the <b>Answer</b> <b>to</b> <b>the</b> Ultimate Question of <b>Life</b>, <b>The</b> <b>Universe</b>, <b>and</b> <b>Everything</b> from the supercomputer Deep Thought, specially built for this purpose.It takes Deep Thought 7 + 1 ⁄ 2 million years to compute and check ...",
                "searchEngine": "DuckDuckGo",
                "rank": 2,
                "timestamp": 1713776241096
            },
            {
                "title": "Life, The Universe, And Everything: Why 42 Really Is The Ultimate Answer",
                "url": "https://www.iflscience.com/life-the-universe-and-everything-why-42-really-is-the-ultimate-answer-72379",
                "description": "<b>The</b> Ultimate Question of <b>Life</b>, <b>the</b> <b>Universe</b> <b>and</b> <b>Everything</b>,\" howled Loonquawl. \"Yes,\" said Deep Thought with the air of one who suffers fools gladly, \"but what actually is it?\". So wrote ...",
                "searchEngine": "DuckDuckGo",
                "rank": 3,
                "timestamp": 1713776241096
            },
            {
                "title": "42 (number) - Wikipedia",
                "url": "https://en.wikipedia.org/wiki/42_(number)",
                "description": "<b>The</b> <b>Answer</b> <b>to</b> <b>the</b> Ultimate Question of <b>Life</b>, <b>The</b> <b>Universe</b>, <b>and</b> <b>Everything</b>. <b>The</b> number 42 <b>is</b>, in The Hitchhiker's Guide to the Galaxy by Douglas Adams, the \"<b>Answer</b> <b>to</b> <b>the</b> Ultimate Question of <b>Life</b>, <b>the</b> <b>Universe</b>, <b>and</b> <b>Everything</b>\", calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one ...",
                "searchEngine": "DuckDuckGo",
                "rank": 4,
                "timestamp": 1713776241096
            },
            ......
        ]
    }
}
```

如何使用 wrangler 和 cloudflare workers 在此不再赘述，如果已经安装过 wrangler ，直接使用

```shell
npm run deploy
```

便可部署。

中国和部分地区访问需要绑定自定义域名。

## Todo

使用 cloudflare 的 无头浏览器将 url 提取出内容并转换成 markdown，但目前我还在 waitlist 里面，暂时搞不了，会先出一个独立部署版本
