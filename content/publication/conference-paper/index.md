---
title: 'Context-Aware Task Execution Using Apprenticeship Learning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Ahmed Abdelrahman
  - Alex Mitrevski
  - Paul G. Plöger

# # Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2020-09-15'
doi: 'https://doi.org/10.1109/ICRA40945.2020.9197476'

# Schedule page publish date (NOT publication's date).
publishDate: '2020-09-15'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *2020 IEEE International Conference on Robotics and Automation (ICRA)*
publication_short: In *ICRA 2020*

abstract: An essential measure of autonomy in assistive service robots is adaptivity to the various contexts of human-oriented tasks, which are subject to subtle variations in task parameters that determine optimal behaviour. In this work, we propose an apprenticeship learning approach to achieving context-aware action generalization on the task of robot-to-human object hand-over. The procedure combines learning from demonstration and reinforcement learning: a robot first imitates a demonstrator's execution of the task and then learns contextualized variants of the demonstrated action through experience. We use dynamic movement primitives as compact motion representations, and a model-based C-REPS algorithm for learning policies that can specify hand-over position, conditioned on context variables. Policies are learned using simulated task executions, before transferring them to the robot and evaluating emergent behaviours. We additionally conduct a user study involving participants assuming different postures and receiving an object from a robot, which executes hand-overs by either imitating a demonstrated motion, or adapting its motion to hand-over positions suggested by the learned policy. The results confirm the hypothesized improvements in the robot's perceived behaviour when it is context-aware and adaptive, and provide useful insights that can inform future developments.

# Summary. An optional shortened abstract.
summary: In this work, we propose an apprenticeship learning approach to achieving context-aware action generalization on the task of robot-to-human object hand-over. Our results confirm the hypothesized improvements in the robot's perceived behaviour when it is context-aware and adaptive, and provide useful insights that can inform future developments.

tags:
  - Robot manipulation
  - Reinforcement learning
  - Dynamic motion primitives

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
url_poster: ''
url_project: ''
url_slides: ''
url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

{{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
