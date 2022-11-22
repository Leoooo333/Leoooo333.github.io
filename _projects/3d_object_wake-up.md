---
layout: post
title: 3D Object Wake-up
description: >
        3D reconstruction, skeleton prediction, and rigging from single RGB images.
img: assets/img/3d_object_wake-up/preview.png
importance: 1
category: Research
categories: CV, CG
---

*This work is supervised by Prof.**[Li Cheng](https://vision-and-learning-lab-ualberta.github.io/author/li-cheng/)**, cooperated with PhD.**[Ji Yang](https://vision-and-learning-lab-ualberta.github.io/author/ji-yang/)**, University of Alberta.*


## Previous works
***
Before I join in this project, the team have done these works. The [paper](https://kulbear.github.io/object-wakeup/) was published on ECCV 2022.
- Render a skeleton prediction approach by utilizing the deep implicit functions. 
- Build an automated pipeline to tackle the entire process of 3D reconstruction, rigging, and animation, all from single-view RGB images. 

<div class="row justify-content-md-center">
    <div class="col-md-auto">
        {% include figure.html path="assets/img/3d_object_wake-up/architecture.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This two-stages architecture for 3D Rigging. The first stage on the left adopt the deep implicit method to reconstruct the 3D mesh from a single image. The right part was used to generate an 3D probability field, which aims to predict object's skeleton.
</div>
<div class="row justify-content-md-center">
    <div class="col-md-auto">
        {% include figure.html path="assets/img/3d_object_wake-up/process.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image shows the whole process, including 3D reconstruction, skeleton, rigging, and animated result.
</div>

## Works now
***
We are trying to improve the previous work.
Inspired by NeRF, we are making a great effort to adapt our two-stages network for an **end-to-end** pipeline.
In this work, I design a neural network to extract the canonical feature from different views of an identical 3D model, which is pre-trained on rendered ShapeNet. We have got a little more accurate result than SOTA. The paper and code are on the way soon. 

