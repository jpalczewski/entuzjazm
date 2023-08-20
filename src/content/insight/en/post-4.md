---
title: "Using vscode snippets to template Astro posts"
language: en
date: "2023-08-20T21:31:57-02:00"
tags:
  - astro
  - vscode
  - markdown

#relatedInsights:
#  - ""
urlsDescription: Related URLs
referencedUrls:
  - description: "General idea of using snippets to generate markdown"
    url: "https://dev.to/ceceliacreates/use-vs-code-snippets-to-generate-markdown-front-matter-fpc"
  - description: "Time variables in snippets"
    url: "https://mattferderer.com/create-a-snippet-or-shortcut-in-vs-code-to-insert-the-current-date-time"
---

To speed up ~~shitpost~~ sharing knowledge, I had a thought - could I leverage snippets for this purpose? Answer is: _yes, of course_.

Merging both articles I have ended up with following template:

```json
  "Insight frontmatter": {
    "prefix": "insight",
    "body": [
      "---",
      "title: \"$1\"",
      "language: ${2|en,pl|}",
      "date: \"$CURRENT_YEAR-$CURRENT_MONTH-${CURRENT_DATE}T$CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND-02:00\"",
      "tags:",
      "  - $3",
      "",
      "#relatedInsights:",
      "#  - \"\"",
      "#urlsDescription: ",
      "#referencedUrls:",
      "#  - description: \"\"",
      "#   url: \"\"",
      "---",
    ],
    "description": "Insight frontmatter"
  }
```

Of course this snipped is tailored to my [constantly changing schema](https://github.com/jpalczewski/entuzjazm/blob/1eda4f83530ca38d71bd37e36817d795571e3e26/src/content/config.ts). First referenced article mentions [a great tool which eases writing one](https://snippet-generator.app/).

**Important.** Zod, by default, doesn't support timezones, which forces them to be in UTC[^1]. So it might be necessary to change your schema accordingly[^2]

As a closing thought and quality of life (QoL) suggestion: [this extensions](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) fixes list completion that makes adding new tags less painful.

[^1]: and astro perfectly handles this fact shifting them to your timezone.
[^2]: [Zod documentation](https://zod.dev/?id=iso-datetimes) explains it nicely.
