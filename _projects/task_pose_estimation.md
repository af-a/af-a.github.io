---
layout: page
title: Task-oriented Visual Pose Estimation
description: Vision-based, ML-driven 6D object pose estimation for manipulation tasks
img: /assets/img/projects/tum_tb_perception/pose_estimation_rviz_snapshot.jpg
importance: 1
category: work
related_publications: true
---

As a contribution to the Horizon Europe project: [euROBIN](https://www.eurobin-project.eu/), I developed a reusable, modular object pose estimation software component, which is publicly available in the [tum-tb-perception](https://github.com/eurobin-wp1/tum-tb-perception) Github repository.
This work was presented in {% cite abdelrahman2025poseestimation %} at the European Robotics Forum (2025) and was nominated for a best paper award.
The software component was also used in a Robocup-style cooperative euROBIN competition by our team (TUM-MIRMI) as well as other competitors, particularly for a set of robot manipulation challenges on a "[Taskboard](https://ieeexplore.ieee.org/document/10378967)" benchmark platform.

<div class="row">
    <div class="col-md-8 offset-md-2">
        {% include figure.liquid path="assets/img/projects/tum_tb_perception/tum_tb_perception_rviz_demo.gif" avoid_scaling="true" %}
    </div>
</div>
<div class="caption">
   A demonstration of the developed 6D pose estimation's results on an euROBIN taskboard platform, visualized here on RViz. Left: CNN-based object detection on RGB images. Right: Depth point cloud, annotated with estimated 3D positions of detected objects (spheres) and estimated orientations of some objects (coordinate frames).
</div>

------------------
## Implementation

The pose estimator relies on data from an RGB-D sensor, such as an Intel Realsense camera, to determine the 6D pose of known objects and involves three stages:
1. Object Recognition
2. Position Estimation
3. Orientation Estimation

<div class="row justify-content-center">
    <div class="col-11">
        {% include figure.liquid loading="eager" path="assets/img/projects/tum_tb_perception/tum_tb_perception_pose_estimation_pipeline_illustration.jpg" title="Pipeline overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An overview of the pipeline.
</div>

For initial **object recognition**, a conventional CNN model is trained to detect known objects from RGB images. In this case, we used a pre-trained Faster R-CNN model which was fine-tuned using _transfer learning_: a relatively small set of images containing the objects of interest in varying conditions comprised the training dataset.

For **position estimation**, the resulting image detections and aligned depth images (point clouds) are then used to localize the detected objects in 3D space.
We project all 3D depth points onto the 2D RGB image plane using *central projection*.
Then, for each detected object's bounding box, we find all 2D projected points that fall within its box; the corresponding unprojected 3D depth points then form the segment of the original point cloud that falls on the respective object.
By taking the mean of each object's point cloud segment, we obtain an estimate of its 3D position.

For **orientation estimation**, we currently implement object-specific, heuristic point cloud processing operations.
In the case of the taskboard platform that we considered (and depicted in the figures above), we utilize a priori knowledge of the board's geometry and the estimated component positions to determine its orientation.
In future work, we will target a more object-agnostic orientation estimation method.


### Software Framework

<div class="row">
    <div class="col-auto">
        {% include figure.liquid loading="eager" path="assets/img/projects/tum_tb_perception/ros_component_diagram.png" title="Software pipeline sketch" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The ROS-based implementation of the pose estimation solution
</div>

The pose estimator is implemented in Python within the ROS framework as a set of modular, extensible components that are depicted above.
It is available in both ROS 1 (*noetic*) and ROS 2 (*humble*).


------------------
## Talk at the European Robotics Forum 2025

<div class="row justify-content-center">
    <div class="col-12">
        {% include figure.liquid loading="eager" path="assets/img/projects/tum_tb_perception/erf_talk_photo_eurobin.jpg" title="ERF 2025 paper Talk" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Presentation at the European Robotics Forum 2025
</div>

This work was published in the [Springer Proceedings in Advanced Robotics ((SPAR,volume 36))](https://link.springer.com/series/15556) and presented at the European Robotics Forum.
I had the pleasure of being invited to give a talk and was nominated for a best paper award within the area of "AI for robotics".


------------------
## Conclusions and Future Work

This project produced a reusable, robot perception skill in the spirit of the euROBIN project's objectives of the collaborative development of transferable robot software.
Using the basic principles of transfer learning and direct depth data processing, this solution enables data-efficient object recognition and 3D position estimation, which are easily adaptable to any object(s) for similar manipulation tasks.
The software package was designed to be easy to integrate in other perception stacks and to adapt and extend it where necessary.
Its utility was demonstrated during euROBIN competitions in which multiple teams made use of its functionalities within their own frameworks.

In the future, I hope to develop this further into a general-purpose robot vision skill, starting with a more general, task-agnostic strategy for orientation estimation.

<br>
