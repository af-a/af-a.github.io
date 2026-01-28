// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of academic and personal projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-profile",
          title: "Profile",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-was-awarded-the-daad-matching-funds-scholarship-at-the-bonn-rhein-sieg-university",
          title: 'I was awarded the DAAD Matching Funds Scholarship at the Bonn-Rhein-Sieg University!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/news_scholarship_daad_mf_2019.html";
            },},{id: "news-i-joined-the-konrad-zuse-school-of-excellence-in-reliable-ai-relai-as-a-doctoral-researcher",
          title: 'I joined the Konrad Zuse School of Excellence in Reliable AI (relAI) as...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-afcea-bonn-e-v-studienpreis-for-my-master-39-s-thesis",
          title: 'I was awarded the AFCEA Bonn e.V. Studienpreis for my Master&amp;#39;s thesis.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/news_award_afcea_2023.html";
            },},{id: "news-i-was-awarded-the-bonn-rhein-sieg-sponsorship-award-for-my-master-39-s-thesis",
          title: 'I was awarded the Bonn-Rhein-Sieg Sponsorship Award for my Master&amp;#39;s thesis.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/news_award_brs_2023.html";
            },},{id: "news-i-was-awarded-the-vdi-förderpreis-1st-place-for-my-master-39-s-thesis",
          title: 'I was awarded the VDI Förderpreis (1st Place) for my Master&amp;#39;s thesis.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/news_award_vdi_2024.html";
            },},{id: "news-i-attended-the-international-elite-summer-school-in-robotics-and-entrepreneurship-at-the-sdu-in-odense-denmark",
          title: 'I attended the International Elite Summer School in Robotics and Entrepreneurship at the...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/news_sdu_ss_2024.html";
            },},{id: "news-i-attended-corl-2024-and-organized-research-demos-as-a-volunteer",
          title: 'I attended CoRL 2024 and organized research demos as a volunteer.',
          description: "",
          section: "News",},{id: "news-i-attended-erf-2025-and-presented-my-work-which-was-nominated-for-a-best-paper-award-learn-more-about-the-project-here",
          title: 'I attended ERF 2025 and presented my work, which was nominated for a...',
          description: "",
          section: "News",},{id: "news-i-attended-iros-2025-in-hangzhou-china",
          title: 'I attended IROS 2025 in Hangzhou, China 🇨🇳.',
          description: "",
          section: "News",},{id: "projects-myoelectric-robot-grasping",
          title: 'Myoelectric Robot Grasping',
          description: "EMG-based, ML-driven object manipulation on a Franka Robot",
          section: "Projects",handler: () => {
              window.location.href = "/projects/myo_robot_grasping.html";
            },},{id: "projects-task-oriented-visual-pose-estimation",
          title: 'Task-oriented Visual Pose Estimation',
          description: "Vision-based, ML-driven 6D object pose estimation for manipulation tasks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/task_pose_estimation.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%68%6D%65%64.%61%62%64%65%6C%72%61%68%6D%61%6E@%74%75%6D.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/af-a", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ahmed-faisal-abdelrahman", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-3436-7399", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=KENEJaQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
