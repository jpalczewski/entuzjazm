---
title: "Example tech blog"
language: en
date: "2023-08-08T12:23:43Z"
tags: 
 - linux
 - windows
---

Here is my _great_ post!

```js

<BaseLayout>
  Insights tagged with {tag}:
  {
    posts.map(post => ( 
      <InsightCard insight={post} lang={lang} />
    ))
  }
</BaseLayout>
```