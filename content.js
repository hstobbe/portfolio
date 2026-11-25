// ============================================================
//  YOUR PORTFOLIO CONTENT  —  this is the ONLY file you need to edit.
//
//  Rules of the road:
//   • Keep the quotes "like this" around every piece of text.
//   • Keep the commas at the end of each line.
//   • If your text contains a double quote, write it as \"  (or use 'single quotes').
//   • To remove an optional section, set it to an empty list:  []
//   • Save the file and refresh index.html to see your changes.
//   • If the page shows a red error box, you probably deleted a quote or comma.
// ============================================================

const content = {
  // ---------- About you ----------
  name: "Henry Stobbe",
  tagline: "Computer Science student seeking a software development co-op for May–August 2027", // one line under your name

  // Put your photo in the assets/ folder and put its file name here.
  // Square-ish, about 600px wide, under 1 MB works best.
  photo: "",

  // 1–3 sentences: what you care about and what you're looking for.
  mission:
    "I'm studying Computer Science at Conestoga College and enjoy building reliable, useful software. I'm looking for a May–August 2027 co-op where I can contribute to a team and keep growing as a developer.",

  // ---------- Make it yours ----------
  theme: {
    // Pick a look:
    //   "classic" = clean and friendly (the default)
    //   "techy"   = dark terminal vibes, one tab per section (always dark, always monospace)
    //   "fancy"   = big serif headings, an arched photo, swipeable project cards
    style: "classic",

    // Pick a preset: "coral", "ocean", "grape", "forest", "sunset", "bubblegum"
    // ...or use any hex color like "#ff6b9d".
    accent: "ocean",

    // Pick a font: "modern", "serif", "rounded", "mono"
    font: "modern",

    // "auto" follows the visitor's device. You can also force "light" or "dark".
    // (The "techy" look is always dark.)
    mode: "auto",
  },

  // ---------- Links (shown as buttons at the top) ----------
  // For email just write the address, e.g. "you@example.com".
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hstobbe/" },
  ],

  // ---------- Skills (optional — set to [] to hide) ----------
  skills: ["C", "C++", "C#", "Java", "Python", "SQL", ".NET", "Blazor", "HTML & CSS", "Microsoft SharePoint", "Git & GitHub", "Visual Studio", "VS Code", "Linux & WSL", "Doxygen", "Object-Oriented Programming", "Data Structures & Algorithms", "Software Testing", "Database Management", "Agile Development"],

  // ---------- Projects ----------
  // Link to the GitHub repo (a live demo is optional — a repo is enough!).
  // tags are optional.
  projects: [
    {
      title: "LTC SCADA/HMI Monitoring System",
      description: "Developing a web-based monitoring and control system for long-term care homes using C#, .NET, and Blazor. Designing role-based access control and support for various devices while applying Agile practices, sprint planning, and software testing. September 2026–present.",
      url: "",
      tags: ["C#", ".NET", "Blazor", "Agile"],
    },
    {
      title: "CineVault",
      description: "Collaborated on an all-in-one media catalogue combining media information, physical releases, price tracking, and streaming availability. Integrated multiple APIs and Gemini AI for media information and a chatbot, delivering a mostly functional MVP for discovering media and viewing streaming availability and physical releases. April 2026.",
      url: "",
      tags: ["API Integration", "Gemini AI", "Git", "Team Project"],
    },
    {
      title: "DNDManager",
      description: "Built a command-line application with a team to track spell slots, spells, and spell information for Dungeons & Dragons. Developed features in C and C++, contributed to planning, interface design, and testing, and wrote technical documentation with Doxygen. February–April 2026.",
      url: "",
      tags: ["C", "C++", "Doxygen", "Object-Oriented Programming"],
    },
  ],

  // ---------- Education ----------
  education: [
    {
      school: "Conestoga College, Waterloo, ON",
      degree: "Bachelor of Computer Science (Honours)",
      years: "September 2025 – present",
      details: "Relevant coursework: Object-Oriented Programming, Data Structures and Algorithms, Software Engineering Fundamentals, Database Systems, Computer Networks, Software Quality I, and Systems Analysis & Design.", // optional
    },
    {
      school: "Waterloo-Oxford District Secondary School, Baden, ON",
      degree: "Ontario Secondary School Diploma",
      years: "September 2021 – June 2025",
      details: "Honours Roll.",
    },
  ],

  // ---------- Work experience (optional — set to [] to hide) ----------
  experience: [
    {
      role: "Maintenance Aide",
      org: "Tri-County Mennonite Homes, New Hamburg, ON",
      years: "May 2026 – present",
      description: "Digitized maintenance auditing forms for mobile and computer access and redesigned parts of the department's SharePoint webpage to improve usability. Track facility assets, perform maintenance and repairs, and collaborate with staff to prioritize and complete requests.",
    },
    {
      role: "Dietary Aide",
      org: "Tri-County Mennonite Homes, New Hamburg, ON",
      years: "July 2023 – May 2026",
      description: "Prepared, plated, and served meals to residents while accommodating individual dietary requirements. Maintained a clean dining environment and coordinated with dietary and personal support worker staff to deliver the correct meals.",
    },
    {
      role: "Information Technology Assistant (Co-op)",
      org: "Focus Computers, New Hamburg, ON",
      years: "October 2024 – January 2025",
      description: "Diagnosed hardware and software issues, assisted with repairs, replaced components including HDDs and SSDs, and removed malware. Thoroughly tested repaired computers before returning them to customers.",
    },
  ],

  // ---------- Extracurriculars (optional — set to [] to hide) ----------
  extracurriculars: [],
};
