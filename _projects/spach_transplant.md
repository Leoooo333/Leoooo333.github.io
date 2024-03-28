---
layout: post
title: SPACH Transplant
description: Transplant a NN from GPU to Huawei NPU
img: assets/img/spach_transplant/preview.png
date: 2022-04-01
importance: 3
category: Competition & Open Source
categories: CV
---
*This work is collaborated with Huawei Corporation.*

***
SPACH is a new NN that developed by Microsoft, which is used to compare CNN, ViT, MLP.

In this project, I:
- Reproduce a new image classification model named SPACH, and transplant it from GPU to Huawei NPU.
- Construct and run training and inference scripts for both GPU and NPU on remote Linux servers.
- Achieve the gold quality medal from Huawei Corporation to honor my work on SPACH’s transplant.

Finally, my implementation of the NPU version contributed to the official repository. Check it below.
<!-- code for GitHub repositories -->
{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
{% include repository/repo.html repository="Leoooo333/SPACH-1" %}
</div>
{% endif %}


