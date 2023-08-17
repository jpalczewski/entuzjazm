---
title: "Implication of deploying github page to another repo"
language: en
date: "2023-08-17T11:39:43Z"
tags: 
    - astro
    - github
    - cd
    - github-actions
    - devops

---

 Years ago I had a thought to seperate repo with hugo theme and the one with rendered page due to  possible use of [utterances](https://utteranc.es/)[^1]. There are my experiences with both approaches:


 ## deploying page to the same repo

- Astro docs provides a [good starting point](https://docs.astro.build/en/guides/deploy/github/)

## deploying site elsewhere 

- There is a a [convinient github-action](https://cpina.github.io/push-to-another-repository-docs/index.html)
- Can you reuse `withastro/action@v0` to build it? You might, but it is designed for scenario above, this action creates an [artifact](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts) that is consumed by `actions/deploy-pages@v1` action.
    - tl;dr: there are better ways    

 [^1]: Is it a good idea? One of tutorials on integrating utterances with astro doesn't have it either. I hope not to see it as a opinion whether this is good option, but someday I will give it a try.  