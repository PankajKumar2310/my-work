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

import pro04img01 from '../assets/images/pro04img01.png'
import pro04img02 from '../assets/images/pro04img02.png'
import pro04img03 from '../assets/images/pro04img03.png'
import pro04img04 from '../assets/images/pro04img04.png'

import pro05img01 from '../assets/images/pro05img01.png'
import pro05img02 from '../assets/images/pro05img02.png'
import pro05img03 from '../assets/images/pro05img03.png'
import pro05img04 from '../assets/images/pro05img04.png'
import pro05img05 from '../assets/images/pro05img05.png'
import pro05img06 from '../assets/images/pro05img06.png'
import pro05img07 from '../assets/images/pro05img07.png'

import pro06img01 from '../assets/images/pro06img01.png'
import pro06img02 from '../assets/images/pro06img02.png'
import pro06img03 from '../assets/images/pro06img03.png'
import pro06img04 from '../assets/images/pro06img04.png'
import pro06img05 from '../assets/images/pro06img05.png'
import pro06img06 from '../assets/images/pro06img06.png'

import pro07img01 from '../assets/images/pro07img01.png'
import pro07img02 from '../assets/images/pro07img02.png'
import pro07img03 from '../assets/images/pro07img03.png'
import pro07img04 from '../assets/images/pro07img04.png'
import pro07img05 from '../assets/images/pro07img05.png'




export const projectsData = [


    {
    id: 6,
    title: "Inventory Management App",
    subtitle: "Efficient Product Tracking System",
    description: "A full-stack inventory management system designed to streamline product tracking. It features bulk CSV import/export capabilities, real-time inventory updates with history logging, and a secure user authentication system.",
    techStack: ["React", "Node.js", "Express", "SQLite", "SASS", "Vite"],
    highlights: [
        "Comprehensive Product CRUD with search, sort, and filter capabilities",
        "Bulk data management optimized with CSV Import/Export features",
        "Detailed audit trail tracking every modification to product inventory",
        "Lightweight and efficient SQLite database implementation",
        "Secure user authentication (Login/Register) with session management"
    ],
    images: [
        pro06img01,
        pro06img02, 
        pro06img03, 
        pro06img04,
        pro06img05,
        pro06img06,

    ],
    projectType: "Full-Stack Application",
    category: "fullstack",
    status: "Completed",
    liveLink: "https://inventory-backend-x3eb.onrender.com/", 
    githubLink: "https://github.com/PankajKumar2310/inventory-management-app"
},

{
    id: 7,
    title: "Court Booking Platform",
    subtitle: "Multi-Resource Booking System",
    description: "A comprehensive full-stack booking platform designed to manage badminton courts, equipment, and coaches. It features a unique atomic booking engine that handles multi-resource availability and a dynamic pricing implementation based on configurable rules.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite"],
    highlights: [
        "Atomic Multi-Resource Booking: Single transaction management for Courts + Equipment + Coach",
        "Dynamic Pricing Engine: Rule-based calculation for peak hours, weekends, and holidays",
        "Real-time Availability Engine: Prevents double bookings across shared finite resources ",
        "Admin Dashboard: Comprehensive management interface for courts, inventory, and pricing rules"
    ],
    // Note: These image variables would need to be imported in your project file
    images: [pro07img01, pro07img02, pro07img03, pro07img04,pro07img05], 
    projectType: "Full-Stack Application",
    category: "fullstack",
    status: "Completed",
    liveLink: "https://acorn-globus-app.onrender.com/", 
    githubLink: "https://github.com/PankajKumar2310/court-booking-sys"
},
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
    },
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
        category: "ai",
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
},

{
    id: 4,
    title: "Weekendly.io",
    subtitle: "Personalized Weekend Planning Web App",
    description: "A comprehensive React-based web application that helps users design their perfect weekend by choosing activities, meals, and moods, then arranging them into a personalized Saturday–Sunday schedule with drag-and-drop functionality.",
    techStack: [
        "React", 
        "Redux Toolkit", 
        "React Router DOM", 
        "Tailwind CSS", 
        "React Query", 
        "React DnD", 
        "html2canvas"
    ],
    highlights: [
        "Plan personalized Saturday–Sunday schedules with 100+ predefined activities",
        "Drag-and-drop activity arrangement with conflict detection",
        "Holiday integration using Indian Holidays API",
        "Export weekend plans as PNG images",
        "Mood-based filtering and 5 dynamic visual themes",
        "Optimized performance using React.memo and lazy loading"
    ],
    images: [pro05img01, pro05img02, pro05img03,pro05img04,pro05img05,pro05img06,pro05img07],
    projectType: "Frontend Application",
    category: "frontend",
    status: "Completed",
    liveLink: "https://weekendlyio.vercel.app/",
    githubLink: "https://github.com/PankajKumar2310/weekendly.io"
}


// // Dummy Frontend Projects
,
{
    id: 5,
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
    images: [pro04img01,pro04img02,pro04img03,pro04img04],
    projectType: "Frontend UI",
    category: "frontend",
    status: "Completed",
    liveLink: "https://adtask-ai-pankaj.onrender.com/",
    githubLink: "https://github.com/PankajKumar2310/adTask_ai"
},



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

