export const portfolioData = {
    personalInfo: {
        name: "Pankaj Kumar",
        title: "Full Stack Developer",
        location: "India",
        email: "pnkj24connect@gmail.com",
        phone: "+91 8529817616",
        summary: "Passionate full-stack developer skilled in building scalable and modern web applications. I enjoy solving complex problems, optimizing performance, and learning cutting-edge technologies."
    },
    skills: {
        technical: ["JavaScript", "Python", "C", "C++", "HTML5", "CSS3"],
        frameworks: ["React", "Node.js", "Express", "Next.js", "Bootstrap", "Tailwind CSS"],
        tools: ["Git", "VS Code", "Webpack", "Vite"],
        languages: ["C", "C++", "JavaScript", "Python", "SQL"],
        databases: ["MongoDB", "MySQL", "Redis"],
        cloud: ["Docker", "AWS", "Vercel", "Netlify"]
    },
    projects: [
        {
            name: "ChatNova AI (Hackathon Project)",
            description: "A real-time multilingual chat app powered by Groq API with optimized prompt structures and robust data flow.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Groq API"],
            features: [
                "Real-time multilingual chat with Groq-powered translations",
                "Optimized frontend performance with minimized re-renders",
                "Efficient database schema for translated message storage",
                "Robust real-time communication with Socket.io"
            ],
            status: "Completed"
        },
        {
            name: "JustDo (Full-Stack Project)",
            description: "A full-stack to-do application with authentication, authorization, and performance optimization using Redis caching.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Docker", "Redis"],
            features: [
                "Secure task management for 100+ users",
                "15x backend speed boost using Redis caching",
                "Containerized deployment with Docker and MVC architecture"
            ],
            status: "Completed"
        },
        {
            name: "MealMate (Food Recipe App)",
            description: "A recipe management app with JWT authentication, REST APIs, and MVC architecture for secure and intuitive user experience.",
            technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "REST API", "JWT"],
            features: [
                "Built with MVC architecture for maintainability",
                "Implemented secure JWT-based authentication",
                "CRUD operations for Login, Logout, Register, and Edit Profile"
            ],
            status: "Completed"
        }
    ],
    experience: [
            {
                company: "SapmenC Pvt Ltd",
                position: "Full Stack Developer Intern",
                duration: "Feb 2025 – Present",
                responsibilities: [
                    "Built an invoicing system with email workflows and real-time analytics for 100+ users",
                    "Developed an e-commerce admin panel with JWT authentication, product CRUD, and Cloudinary integration",
                    "Created a campaign platform with role-based dashboards and real-time insights for 200+ users"
                ]
            },
            {
                company: "NxtWave",
                position: "Teaching Assistant (Python Programming)",
                duration: "Jul 2024 -- Oct 2024",
                responsibilities: [
                    "Resolved 297+ Python-related queries for 194+ learners",
                    "Helped students strengthen conceptual understanding",
                    "Guided learners in debugging and problem solving",
                    "Provided mentorship in Python coding best practices"
                ]
            }
    ],
    education: {
        college: {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "IIIT Vadodara",
            year: "2023 - Present",
            details: "Specializing in Full-Stack Development and Cloud Technologies"
        },
        school: {
            level: "Senior Secondary (Class 12th)",
            institution: "JNV Sirohi",
            year: "2023",
            details: "Focused on PCM (Physics, Chemistry, Math) with Computer Science"
        }
    },

    socialMedia: {
        github: "https://github.com/PankajKumar2310",
        linkedin: "https://linkedin.com/in/pnkj10",
        twitter: "https://linkedin.com/in/pnkj10",
        portfolio: "https://pankajkumar-ruddy.vercel.app/"
    },
    availability: {
        status: "Open to new opportunities",
        preferredContact: "Email or LinkedIn",
        responseTime: "Usually respond within 24 hours"
    },
    currentStatus: {
        timezoneOffset: 330, // IST (UTC+5:30) in minutes
        routine: [
            { from: 1, to: 7, activity: "sleeping 😴" },
            { from: 7, to: 8, activity: "just woke up and getting ready for the day" },
            { from: 8, to: 9, activity: "having breakfast 🍽️" },
            { from: 9, to: 12, activity: "attending classes 📚" },
            { from: 12, to: 14, activity: "having lunch 🍛" },
            { from: 14, to: 17, activity: "working on projects / labs 🔬" },
            { from: 17, to: 20, activity: "coding practice & problem solving 💻" },
            { from: 20, to: 22, activity: "having dinner 🍽️" },
            { from: 22, to:24, activity: "winding down and wrapping up the day" }
        ],
        noGymOnSunday: true
    }
};
