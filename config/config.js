import {} from "@fortawesome/free-solid-svg-icons";

import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

import profile from "./profile.png";

export const navigation = {
  name: "Manohar Reddy",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Manohar",
  description: "A Computer Engineer/Architect crafting great products.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1WsTlu9RG1aOvvPj0dRvi6TLE3pCLxh5B/view?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "Highly skilled Full Stack Software Architect/Developer with over a decade of experience in architecting, developing, and deploying robust and scalable software applications. Proven track record of leading and mentoring teams to deliver projects on time. Adept in a wide range of technologies including Node.js, Angular, AWS, and Kubernetes.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "API Development",
      description: "I create best in class API's with Node.js Asp.net.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive websites using AngularJs and ReactJs.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "ALTUS PERFORMANCE PLATFORM ",
      description:
        "Spearheaded the development of the cloud-native Altus Performance Platform using cutting-edge serverless technologies.",
    },
    {
      title: "FNMAGATEWAY APPLICATION",
      description:
        "Led as Associate Architect, taking ownership of technical aspects and project delivery.",
    },
    {
      title: "QUOTING",
      description:
        "Engineered microservices to generate accurate vehicle quotes based on location-specific fees and taxes.",
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at manohar.gaddam@live.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:manohar.gaddam@live.com",
      isPrimary: true,
    },
    {
      title: "Linked In",
      link: "https://www.linkedin.com/in/manohar-gaddam/",
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Manohar Reddy | Computer Engineer | Full Stack developer",
  description: "A Computer Engineer/Architect crafting great products.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@manohar-gaddam",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/manohar-gaddam/",
    },
  ],
};
