// projectData.js
import pro01img01 from '../assets/images/pro01img01.png'
import pro01img02 from '../assets/images/pro01img02.png'
import pro01img03 from '../assets/images/pro01img03.png'
import pro01img04 from '../assets/images/pro01img04.png'
// import pro01img05 from '../assets/images/pro01img05.jpg'

import pro02img01 from '../assets/images/pro02img01.png'
import pro02img02 from '../assets/images/pro02img02.png'
import pro02img03 from '../assets/images/pro02img03.png'

import pro03img01 from '../assets/images/pro03img01.png'
import pro03img02 from '../assets/images/pro03img02.png'
import pro03img03 from '../assets/images/pro03img03.png'




export const projectsData = [
    {
        id: 1,
        title: "JustDo (Full-Stack Project)",
        subtitle: "Smart Task Management",
        description: "A full-stack to-do application with user authentication, authorization, and CRUD operations, optimized for performance and scalability.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Docker", "Redis"],
        highlights: [
            "Secure task management for 100+ users with authentication & authorization",
            "15x backend speed boost using Redis caching (128ms → 8ms)",
            "Containerized deployment with Docker and MVC architecture"
        ],
        images: [pro01img01, pro01img02,pro01img03,pro01img04],
        projectType: "Full-Stack Application",
        category: "fullstack",
        status: "Completed",
        liveLink: "https://justdo-app.onrender.com/",
        githubLink: "https://github.com/PankajKumar2310/justdo-app"
    }
,    
    {
        id: 2,
        title: "ChatNova AI (Hackathon Project)",
        subtitle: "Real-Time Multilingual Communication",
        description: "A full-stack chat application enabling seamless real-time communication with dynamic language translation powered by Groq API.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Groq API"],
        highlights: [
            "Real-time multilingual chat with Groq-powered translations",
            "Robust message flow with optimized prompt structures",
            "Efficient database schema for translated message storage",
            "Optimized frontend with minimized re-renders"
        ],
        images: [pro02img01, pro02img02, pro02img03],
        projectType: "Full-Stack Application",
        category: "fullstack",
        status: "Completed",
        liveLink: "https://drive.google.com/file/d/1C0Qcp8g3UcYKE-ggZ_QtistrEcr-zWLW/view?usp=sharing",
        githubLink: "https://github.com/PankajKumar2310/ChatNova_Ai"
    }
,    
{
    id: 3,
    title: "MealMate (Food Recipe App)",
    subtitle: "Full-Stack Web Application",
    description: "A recipe management app with JWT authentication, REST APIs, and MVC architecture, providing secure and intuitive user experience.",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "REST API", "JWT"],
    highlights: [
        "Built with MVC architecture for maintainability",
        "Implemented secure JWT-based authentication",
        "CRUD operations: Login, Logout, Register, Edit Profile"
    ],
    images: [pro03img01, pro03img02, pro03img03],
    projectType: "Full-Stack Application",
    category: "fullstack",
    status: "Completed",
    liveLink: "https://mealmate-5f9b.onrender.com/",
    githubLink: "https://github.com/PankajKumar2310/MealMate--Food-App"
}

// // Dummy Frontend Projects
,
{
    id: 101,
    title: "AdTask AI",
    subtitle: "Landing Page Website",
    description: "A modern React-based landing page website built for AdTask AI using pre-designed UI components and optimized for performance.",
    techStack: ["React", "TailwindCSS", "Accertinity UI", "21st.dev"],
    highlights: [
        "Responsive and accessible landing page design",
        "Ready-made UI components for faster development",
        "Lazy loading for improved page performance",
        "Smooth animations and transitions"
    ],
    images: [pro01img01, pro01img02],
    projectType: "Frontend UI",
    category: "frontend",
    status: "Completed",
    liveLink: "https://adtask-ai-pankaj.onrender.com/",
    githubLink: "https://github.com/PankajKumar2310/adTask_ai"
}

// ,
// {
//     id: 102,
//     title: "ShopFront (Frontend)",
//     subtitle: "E-commerce Landing Page",
//     description: "A product-focused landing page with carousels, category filters, and CTA sections.",
//     techStack: ["React", "Vite", "Swiper"],
//     highlights: [
//         "Hero carousel with autoplay",
//         "Accessible buttons and focus states",
//         "Mobile-first responsive layout"
//     ],
//     images: [pro02img01, pro02img02],
//     projectType: "Frontend UI",
//     category: "frontend",
//     status: "Prototype",
//     liveLink: "#",
//     githubLink: "#"
// }

// // Dummy AI Projects
// ,
// {
//     id: 201,
//     title: "VisionTag (AI)",
//     subtitle: "Image Tagging Assistant",
//     description: "Client app that tags images using a vision API with batch processing UI.",
//     techStack: ["React", "TailwindCSS", "Vision API"],
//     highlights: [
//         "Drag-and-drop upload",
//         "Batch tagging progress with toasts",
//         "Copy-to-clipboard captions"
//     ],
//     images: [pro03img01, pro03img02],
//     projectType: "AI App",
//     category: "ai",
//     status: "Demo",
//     liveLink: "#",
//     githubLink: "#"
// }
// ,
// {
//     id: 202,
//     title: "PromptBoard (AI)",
//     subtitle: "Prompt Organizer",
//     description: "Frontend for organizing prompts with tags and quick-run presets.",
//     techStack: ["React", "ShadCN", "LocalStorage"],
//     highlights: [
//         "Tag-based filtering",
//         "Keyboard shortcuts",
//         "Local draft autosave"
//     ],
//     images: [pro01img01],
//     projectType: "AI Tool",
//     category: "ai",
//     status: "Demo",
//     liveLink: "#",
//     githubLink: "#"
// }

];

