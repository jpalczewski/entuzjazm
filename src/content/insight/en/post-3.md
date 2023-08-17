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

### Example of deploying astro blog to github pages

[There is my example](https://github.com/jpalczewski/entuzjazm/blob/6bd91f3a1d60714ab80836c2125b2a654d3a1b63/.github/workflows/deploy.yml) of working github action.

Things worth to note:
- By using actions to install node and pnpm there is huge time savings due to caching.
- There should be a `.nojekyll` file in blog root - otherwise css is messed up[^2]

 [^1]: Is it a good idea? One of tutorials on integrating utterances with astro doesn't have it either. I hope not to see it as a opinion whether this is good option, but someday I will give it a try.  
 [^2]: [Source](https://stackoverflow.com/questions/74489844/astro-js-deployment-media-files-not-rendering)