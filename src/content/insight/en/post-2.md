---
title: "Multiple post types and languages in astro"
language: en
date: "2023-08-15T12:23:43-02:00"
tags:
  - astro
  - typescript
  - entuzjazm

relatedInsights:
  - "en/post-1"

referencedUrls:
  - description: "Github repo with astro code"
    url: "https://github.com/jpalczewski/entuzjazm"
---

As mentioned in a related insight, the backend of this blog is written in [astro](https://astro.build/)[^1].

I have merged two things that I am proud of:

- Content collections: Schema-based posts provides excellent flexibility[^2]
- Internationalization: Certain posts will target a Polish audience due to their nature, some might be bilingual, while technical posts will primarily be in English.

[^1]: After an extensive research phase, I found that Astro was the ideal choice. Its robust TypeScript support and positive feedback on Reddit convinced me.
[^2]: This post is a test-case for those hand-made addons.
