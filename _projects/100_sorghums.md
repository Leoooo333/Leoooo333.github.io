---
layout: page
title: Sorghum Identification-FGVC 9
description: A Fine-Grained sorghum classification competition
img: assets\img\100_sorghums\preview.jpg
importance: 4
category: Competition & Open Source
---
*This is a Kaggle Competition🌿[Sorghum Identification-FGVC 9](https://www.kaggle.com/competitions/sorghum-id-fgvc-9/overview)*

## Descriptions
The Sorghum-100 dataset consists of 48,106 images and 100 different sorghum cultivars grown in June of 2017 (the images come from the middle of the growing season when the plants were quite large but not yet lodging -- or falling over).

Each image is taken using an RGB spectral camera taken from a vertical view of the sorghum plants in the TERRA-REF field in Arizona.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/100_sorghums/over-exposure.png" title="over-exposure" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/100_sorghums/common.png" title="common" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/100_sorghums/under-exposure.png" title="under-exposure" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The photos of sorghums is highly effected by the sun light. As you can see, the left one is over-exposure, while the right is under-exposure.
</div>

## My works
- Rank: 28/221. Win silver medal notebook from my open-source PyTorch baseline of this competition.
- Identify similar sorghum cultivars by RGB pictures of dense sorghum plants. Pre-process images by
contrast limited AHE to avoid the impact of the over-exposure and under-exposure.
- Experiments on K-fold cross-validation and test time augmentation to apply ensemble learning based on
different models derived from different folds of the sorghum dataset.

## Contribution
During the competition, I share my code, and write them into tutorials.
1. [🌱✨Sorghum higer accuracy](https://www.kaggle.com/code/leoooo333/lb-0-885-sorghum-higer-accuracy), including images pre-process, k-fold cross-validation, test time augmentation and many tricks.
2. [🌱🌿🌾Sorghum Speed UP!🚀](https://www.kaggle.com/code/leoooo333/sorghum-speed-up), which shows how to speed up training and inference processes by using Distributed Data Parrallel.
