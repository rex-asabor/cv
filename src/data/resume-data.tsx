import ClevertechLogo from "../images/logos/clevertech.png";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Rex Asabor",
  initials: "RA",
  location: "New York, NY",
  about:
    "Generalist software engineer with a knack for open-ended problems.",
  summary:
    "With experience spanning companies of various sizes and industries, I strive to bring cross-disciplinary perspective to products I build.",
  avatarUrl: "https://lh3.googleusercontent.com/ogw/ANLem4ZQGWR-kpvm6zY7xhzLjzqFub1pCDA9ICqnfVC8TTs=s64-c-mo",
  personalWebsiteUrl: "https://www.rexyz.io",
  contact: {
    email: "rexasabor@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rex-asabor/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Harvey Mudd College",
      degree: "B.S. Computer Science & Mathematics",
      description: [
        "Senior Capstone: Built infrastructure auto-scaling algorithms via k8s & Kafka for Crowdstrike",
        "President’s Scholar ($250k), Lockheed Martin STEM Scholar ($40k), Neo Scholar, Conviction Fellow",

      ]
    },
    // Add more education entries if available
  ],
  work: [
    {
      company: "Sizzle AI",
      link: "https://szl.ai",
      badges: ["Education", "AI", "Consumer"],
      title: "Founding Engineer",
      logo: ClevertechLogo,
      start: "2023",
      end: "Present",
      description: [
        "Led the launch of mobile app’s rebrand, syncing engineering, design and marketing functions.",
        "Built a framework to enable A/B testing and real-time evals of our fine-tuned LLMs.",
        "Developed data pipelines and key infrastructure for a LLM-based recommendation engine.",
        "Used prompt engineering to maximize quality & minimize cost of inference at >100k WAU scale."
      ],
    },
    {
      company: "Inworld AI",
      link: "https://inworld.ai",
      badges: ["Gaming", "AI", "Dev Tools"],
      title: "Machine Learning Engineer (part-time)",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description: [
        "Researched cost and inference optimization techniques for deploying large language models.",
        "Collaborated on data collection strategy for training a proprietary LLM."
      ],
    },
    {
      company: "OpenSea",
      link: "https://opensea.io",
      badges: ["Crypto", "Consumer"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description: [
        "Reported to the CTO as engineer #9, as we grew headcount 3x and revenue 200x in 3 months.",
        "Spearheaded early trust & safety engineering efforts; deployed content moderation algorithms.",
        "Enhanced our account verification process by leveraging ML models and internal tooling.",
        "Prototyped an item-to-item recommendation engine with a small team of engineers."
      ],
    },
    {
      company: "Spatial",
      link: "https://spatial.io",
      badges: ["Virtual Reality", "Consumer"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description: [
        "Offered support for rendering 11 new file types in our 3D environments.",
        "Developed integrations with Google Drive, OneDrive, and more for file imports.",
        "Proposed & led a partnership with Miro to transfer sticky notes between apps.",
        "Leveraged early GPT-3 beta access to populate 3D meeting rooms with relevant content."
      ],
    },
    {
      company: "Snap",
      link: "https://snap.com",
      badges: ["Social", "Consumer"],
      title: "Software Engineering Intern",
      logo: ClevertechLogo,
      start: "2020",
      end: "2020",
      description: [
        "Built a new revenue dashboard and API for Snapchat Partners to analyze their ad revenue.",
        "Prototyped a CV algorithm for automatically inserting ads into Snapchat Discover stories."
      ],
    },
    {
      company: "Two Sigma",
      link: "https://twosigma.com",
      badges: ["Quantitative Finance"],
      title: "Software Engineering Intern",
      logo: ClevertechLogo,
      start: "2019",
      end: "2019",
      description: [
        "Developed new ML-based algorithms & tools for dataset deduplication and entity recognition.",
        "Achieved a 13% increase in labels for key multi-terabyte alternative text datasets."
      ],
    },
    {
      company: "The Jackson Laboratory",
      link: "https://jax.org",
      badges: ["Biotech"], 
      title: "Bioinformatics Researcher",
      logo: ClevertechLogo,
      start: "2018",
      end: "2018",
      description: [
        "Developed a new algorithm to identify mouse strain genes, increasing recall by 6%.",
        "Invited to present at Harvard Medical School and the Asian Pacific Bioinformatics Conference."
      ],
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "React", 
    "React Native",
    "Go",
    "Dagster", 
    "Airflow",
    "AWS",
    "Pytorch",
    "Postgres",
    "MongoDB",
    "Redis"
  ],
  projects: [
  ],
} as const;
