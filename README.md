# DuckRush

[中文说明](/READMECN.md)

![duckrush](/assets/logo.jpg)

A simple and fast backend API based on Hono that can search for relevant content on the internet using keywords and convert it into a format suitable for LLM processing. Supports deployment on *Cloudflare Workers*.

```shell
npm install
npm run dev
```

```shell
npm run deploy
```

## Request URL

```code
/search
```

## Request Method

```request
POST
```

## Payload Type

```code
json
```

Here is the translation of the given text into English:

## Authentication Verification

By default, no authentication measures are enabled, and direct requests can be made.
If you need to enable the authentication mechanism, modify the `wrangler.toml` file in the root directory of the project by uncommenting the line

```text
# token = "duckrush"
```

and changing it to

```text
token = "duckrush"
```

where `duckrush` is the authentication token that you have customized. Then, the front end should submit it using the `Bearer` method.

## Request Parameters

| Field | Type   | Required | Description                         |
|-------|--------|----------|---------------------------------------|
| query | string | Yes      | Search keywords or query statement   |

## Example

### Request

```json
{
  "query": "what is the answer to life, the universe, and everything"
}
```

### Response

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
      ...
    ]
  }
}
```

Instructions for using Wrangler and Cloudflare Workers to deploy this project are not covered here. If you have already installed Wrangler, you can deploy directly using `npm run deploy`. Access from China and some regions may require binding a custom domain name.

## Todo

Using Cloudflare's headless browser to extract content from URLs and convert it into Markdown is not currently possible for me as I am still on the waitlist. However, I will first release a version for independent deployment.
