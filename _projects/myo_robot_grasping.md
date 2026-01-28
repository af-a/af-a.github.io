---
layout: page
title: Myoelectric Robot Grasping
description: EMG-based, ML-driven object manipulation on a Franka Robot
img: /assets/img/projects/franka_emg_grasping/automatica_2.jpg
importance: 1
category: work
related_publications: false
---

During my research into intelligent neuroprosthetics, I demonstrated a form of _myoelectric_ robot control for object manipulation at the [automatica 2025](https://automatica-munich.com/en/) robotics fair, where a robotic arm is partially controlled through a person’s intention, which is decoded from their forearm EMG signals. This part of my research generally focusses on methods that can enable upper-limb amputees to control prosthetic hands as well as be utilized for controlling robotic manipulator hands through an intuitive, biological signal-based interface.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/franka_emg_grasping/basic_pick_and_place_demo_short.gif" avoid_scaling="true" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/franka_emg_grasping/basic_cloth_folding_demo_short.gif" avoid_scaling="true" %}
    </div>
</div>
<div class="caption">
    Representative applications: object pick-and-place (right) and cloth folding (left). Note: grasping/releasing actions are controlled by the user.
</div>

------------------
## How it Works

<div class="row">
    <div class="col-md-8 offset-md-2">
        {% include figure.liquid loading="eager" path="assets/img/projects/franka_emg_grasping/automatica_2025_demo_pipeline_sketch.jpg" title="Software pipeline sketch" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simplified illustration of the data processing pipeline, including data acquisition (sensing), model training (decoding), and task execution (acting).
</div>

The myoelectric control in this project was enabled by a machine learning (ML) model that is trained to recognize specific patterns in electrical muscle activity.
The model decodes a person's forearm EMG signals into their intention to perform a particular hand motion from a discrete set of motions through classification-based pattern recognition: an established approach to myoelectric control.
These intentions are in turn transformed into commands for a robotic/prosthetic hand to execute.

User input data are obtained from non-invasive, surface EMG (sEMG) sensors.
In this case, we used a [Delsys](https://delsyseurope.com/) system with dry electrodes.
To train the model, we collected a dataset of 4-channel EMG signals (two sensors on extensors and two on flexors) while performing two actions: `grasping` and `releasing` and labelled segments of the data accordingly.
A set of time-based and frequency-based features was then extracted from segmented EMG windows to form the input to the model.

For EMG classification, we utilized an ensemble of independent classifiers:
* k-nearest Neighbours (kNNs)
* Random Forests (RFs)
* Multi-layer Perceptrons (MLPs)
The classifiers were independently trained on the same dataset and a majority voting scheme was used at runtime to determine the most likely action intention to predict.

The decoded grasping action is subsequently reproduced by an anthropomorphic hand on a Franka Panda robot; alternatively, the same hand could be attached to an upper-limb prosthesis. Here, we used a [Prensilia IH2 Azzurra hand](https://www.prensilia.com/ih2-azzurra-hand/), which was programmed to execute the considered motions.

### Software Implementation

<div class="row">
    <div class="col-auto">
        {% include figure.liquid loading="eager" path="assets/img/projects/franka_emg_grasping/feg_logo.png" title="FEG Project Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The software of this project is publicly available at the [franka-emg-grasping](https://github.com/af-a/franka-emg-grasping) Github repository.

------------------
## Demonstration at automatica 2025 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/franka_emg_grasping/automatica_1.jpg"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/franka_emg_grasping/automatica_2.jpg"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/franka_emg_grasping/automatica_3.JPG"%}
    </div>
</div>

At [automatica 2025](https://automatica-munich.com/en/), I led an exhibit that showcased this myoelectric control solution within the context of object manipulation tasks.

A Franka Panda robot was programmed to perform the motions necessary to:
* Move objects around a table
* Fold a cloth on a table and hand it to a person

While the arm motions were executed by a motion planner, the object grasping and releasing actions that were integral to achieving both sequences of tasks were controlled by a user through our EMG decoding method.
At each appropriate instance during the robot's execution, the user need only perform the desired action themselves ('grasp', 'release') and the data from the EMG sensors are processed by our decoder in real-time to recognize their intention and send the same command to the robot to successfully complete the task.


------------------
## Conclusions and Future Work

This project was an early milestone of my research into reliable neurorobotic motion control from biological signals. 
The outcomes of this research can contribute to improving neuroprosthetic devices that can restore lost limb function as well as provide more intuitive manipulator control interfaces.
Future work will focus on regression, rather than classification, methods in order to work towards continuous motion intention estimation for more a natural interface, in addition to incorporating neuromorphic methods to harness their power efficiency benefits and affinity to biological signal processing.

<br>
