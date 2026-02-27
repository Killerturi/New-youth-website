const courses = [
  // ===============================
  // INFORMATION TECHNOLOGY
  // ===============================

  {
    id: 1,
    code: "CITA",
    title: "Certificate in Information Technology Application",
    category: "Certificate",
    duration: "6 Months",
    fees: 2000,
    syllabus: [
      "Fundamentals of Computer",
      "Operating System - Windows Vista",
      "MS-Office (Word, Excel & PowerPoint)",
      "Database Management System (Visual FoxPro)",
    ],
  },

  {
    id: 2,
    code: "DITA",
    title: "Diploma in Information Technology Application",
    category: "Diploma",
    duration: "12 Months",
    fees: 5000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Office",
        "Database Management System (Visual FoxPro)",
      ],
      semester2: [
        "Programming Concepts, Algorithm & Flowchart",
        "Visual Basic",
        "RDBMS concept with MS-Access",
        "Project on Visual Basic & MS-Access",
        "Internet & E-Mail",
        "Overview of VB.Net",
      ],
    },
  },

  {
    id: 3,
    code: "ADITA",
    title: "Advance Diploma in Information Technology Application",
    category: "Advanced Diploma",
    duration: "18 Months",
    fees: 8000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Office",
        "Database Management System (Visual FoxPro)",
      ],
      semester2: [
        "Programming Concepts, Algorithm & Flowchart",
        "Visual Basic",
        "RDBMS concept with MS-Access",
        "Project on Visual Basic & MS-Access",
        "Internet & E-Mail",
        "Overview of VB.Net",
      ],
      semester3: [
        "C++ with OOPS",
        "VB.Net",
        "JavaScript",
        "VBScript",
        "Real Life Project with VB.Net",
      ],
    },
  },

  // ===============================
  // FINANCIAL ACCOUNTING
  // ===============================

  {
    id: 4,
    code: "CFAS",
    title: "Certificate in Financial Accounting System",
    category: "Certificate",
    duration: "6 Months",
    fees: 2000,
    syllabus: [
      "Fundamentals of Computer",
      "Operating System - Windows Vista",
      "MS-Word",
      "Two Financial Accounting Packages",
    ],
  },

  {
    id: 5,
    code: "DFAS",
    title: "Diploma in Financial Accounting System",
    category: "Diploma",
    duration: "12 Months",
    fees: 5000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Two Financial Accounting Packages",
      ],
      semester2: [
        "Database Management System (Visual FoxPro)",
        "MS-Excel with Project Management Tools",
        "MS-PowerPoint",
        "Internet & Email",
        "Two Financial Accounting Packages",
      ],
    },
  },

  {
    id: 6,
    code: "ADFAS",
    title: "Advance Diploma in Financial Accounting System",
    category: "Advanced Diploma",
    duration: "18 Months",
    fees: 8000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Financial Accounting Packages",
      ],
      semester2: [
        "Database Management System (Visual FoxPro)",
        "MS-Excel with Project Management Tools",
        "MS-PowerPoint",
        "Internet & Email",
        "Two Financial Accounting Packages",
      ],
      semester3: [
        "Payroll System",
        "Taxation Software",
        "TDS & e-Return Preparation Software",
        "Advanced Financial Management with FA packages",
        "Share Trading Software",
      ],
    },
  },

  // ===============================
  // DESKTOP PUBLISHING
  // ===============================

  {
    id: 7,
    code: "CDTP",
    title: "Certificate in Desktop Publishing",
    category: "Certificate",
    duration: "6 Months",
    fees: 2000,
    syllabus: [
      "Fundamentals of Computer",
      "Operating System - Windows Vista",
      "MS-Word",
      "Adobe PageMaker",
      "Corel Draw",
      "Use of Bengali Fonts in Publications",
    ],
  },

  {
    id: 8,
    code: "DDTP",
    title: "Diploma in Desktop Publishing",
    category: "Diploma",
    duration: "12 Months",
    fees: 5000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Adobe PageMaker",
        "Corel Draw",
        "Use of Bengali Fonts in Publications",
      ],
      semester2: [
        "Scanning & Editing Images of Publications",
        "Adobe Photoshop",
        "Freehand",
        "Flash",
        "Handling Scanner & Digital Camera",
        "Internet & Email",
      ],
    },
  },

  {
    id: 9,
    code: "ADDTP",
    title: "Advanced Diploma in Desktop Publishing",
    category: "Advanced Diploma",
    duration: "18 Months",
    fees: 10000,
    syllabus: {
      semester1: [
        "Fundamentals of Computer",
        "Operating System - Windows Vista",
        "MS-Word",
        "Adobe PageMaker",
        "Corel Draw",
        "Use of Bengali Fonts in Publications",
      ],
      semester2: [
        "Scanning & Editing Images of Publications",
        "Adobe Photoshop",
        "Freehand",
        "Flash",
        "Handling Scanner & Digital Camera",
        "Internet & Email",
      ],
      semester3: [
        "Adobe Illustrator",
        "Adobe InDesign",
        "Basic of web designing with Flash",
        "Dreamweaver / Adobe Premiere",
      ],
    },
  },

  // ===============================
  // ARTIFICIAL INTELLIGENCE
  // ===============================

  {
    id: 10,
    code: "CAI",
    title: "Certificate in Artificial Intelligence",
    category: "Certificate",
    duration: "6 Months",
    fees: 6000,
    syllabus: [
      "Essential Computer & Digital Skills (AI-Oriented)",
      "Introduction to Artificial Intelligence (Modern & Practical)",
      "AI Tools & AI Platforms (Core Module)",
      "Prompt Engineering (Hands-On & Job Relevant)",
      "Python Programming for AI (Minimal but Practical)",
      "AI Ethics & Sustainable AI",
      "Mini AI Projects (Tool-Based)",
    ],
  },

  {
    id: 11,
    code: "DAI",
    title: "Diploma in Artificial Intelligence",
    category: "Diploma",
    duration: "12 Months",
    fees: 12000,
    syllabus: {
      semester1: [
        "Essential Computer & Digital Skills (AI-Oriented)",
        "Introduction to Artificial Intelligence (Modern & Practical)",
        "AI Tools & AI Platforms (Core Module)",
        "Prompt Engineering (Hands-On & Job Relevant)",
        "Python Programming for AI (Minimal but Practical)",
        "AI Ethics & Sustainable AI",
        "Mini AI Projects (Tool-Based)",
      ],
      semester2: [
        "Machine Learning Foundations",
        "Data Understanding & Preparation",
        "Essential Math for ML (Only What’s Needed)",
        "Core Machine Learning Algorithms (Hands-On)",
        "Intro to Neural Networks (Conceptual + Demo)",
        "Building AI Applications",
        "Capstone Project (Mandatory)",
      ],
    },
  },

  // ===============================
  // DIGITAL COURSES
  // ===============================

  {
    id: 12,
    code: "CDM",
    title: "Certificate in Digital Marketing",
    category: "Certificate",
    duration: "6 Months",
    fees: 6000,
    syllabus: ["Syllabus Coming Soon"],
  },

  {
    id: 13,
    code: "DDS",
    title: "Diploma in Data Science",
    category: "Diploma",
    duration: "12 Months",
    fees: 12000,
    syllabus: ["Syllabus Coming Soon"],
  },

  {
    id: 14,
    code: "DCT",
    title: "Diploma in Digital Classroom Training",
    category: "Diploma",
    duration: "12 Months",
    fees: 12000,
    syllabus: ["Syllabus Coming Soon"],
  },
{
  id: 15,
  code: "CBM",
  title: "Certificate in Basic Multimedia",
  category: "Certificate",
  duration: "6 Months",
  fees: 5500,
  syllabus: [
    "Creating Illustrations with Adobe Illustrator & CorelDraw",
    "Imaging with Adobe Photoshop",
    "2D Animation with Flash",
    "Authoring with Flash",
    "Sound Editing with Sound Forge"
  ]
},

{
  id: 16,
  code: "DMAVE",
  title: "Diploma in Multimedia, Animation & Video Editing",
  category: "Diploma",
  duration: "12 Months",
  fees: 14900,
  syllabus: {
    semester1: [
      "Creating Illustrations with Adobe Illustrator & CorelDraw",
      "Imaging with Adobe Photoshop",
      "2D Animation with Flash",
      "Authoring with Flash",
      "Sound Editing with Sound Forge"
    ],
    semester2: [
      "Video Composition & Editing with Adobe After Effects",
      "Deek-Link Card with Adobe Premiere Pro",
      "3D Animation with Autodesk 3D Max",
      "Autodesk Maya"
    ]
  }
},

{
  id: 17,
  code: "CCHM",
  title: "Certificate in Computer Hardware Maintenance",
  category: "Certificate",
  duration: "6 Months",
  fees: 2800,
  syllabus: [
    "Basic Electronics",
    "Digital Electronics",
    "Basic Hardware Theory",
    "PC Parts (Motherboard, HDD, Monitor etc.) Construction & Functioning",
    "Software Installation",
    "Troubleshooting"
  ]
},

{
  id: 18,
  code: "DCHM",
  title: "Diploma in Computer Hardware Maintenance",
  category: "Diploma",
  duration: "12 Months",
  fees: 6000,
  syllabus: {
    semester1: [
      "Basic Electronics",
      "Digital Electronics",
      "Hardware Theory",
      "PC Components (Motherboard, HDD, Monitor etc.) Construction & Functioning",
      "Software Installation",
      "Troubleshooting"
    ],
    semester2: [
      "Basic Network Theory",
      "Network Protocols & Topologies",
      "Cabling",
      "Peer to Peer Networks",
      "Client-Server Networking",
      "Internet Setup",
      "Proxy Server Setup",
      "Windows NT Network Setup"
    ]
  }
},

{
  id: 19,
  code: "CCAD",
  title: "Certificate in Computer Aided Design",
  category: "Certificate",
  duration: "6 Months",
  fees: 2800,
  syllabus: [
    "Fundamentals of Computer",
    "Operating System - Windows Vista",
    "MS-Word",
    "AUTOCAD",
    "Autolisp",
    "Internet & E-Mail"
  ]
},

{
  id: 20,
  code: "CCST",
  title: "Certificate in Client Server Technology",
  category: "Certificate",
  duration: "6 Months",
  fees: 5000,
  syllabus: [
    "Windows NT",
    "SQL Server",
    "ORACLE",
    "Real Life Project on ORACLE"
  ]
},

{
  id: 21,
  code: "CPP",
  title: "Certificate in Python Programming",
  category: "Certificate",
  duration: "6 Months",
  fees: 6000,
  syllabus: {
    semester1: [
      "Essential Computer & Coding Environment",
      "Core Python Programming (Heavy Focus)",
      "Core Python Data Structures"
    ]
  }
},

{
  id: 22,
  code: "CGS",
  title: "Certificate in Green Skills with AI",
  category: "Certificate",
  duration: "48 Hours / 6 Months",
  fees: 6000,
  syllabus: [
    "Essential Digital & Data Skills for Green Careers",
    "Sustainability & Climate Change Fundamentals",
    "Artificial Intelligence for Sustainability",
    "AI Tools & Platforms for Green Applications",
    "Prompt Engineering for Green Use Cases (Hands-On)",
    "Python Programming & Data Basics for Sustainability",
    "Sustainable AI & Green Computing",
    "Mini Green AI Projects (Tool-Based)"
  ]
}
  
];

export default courses;
