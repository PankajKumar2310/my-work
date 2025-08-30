import React, { useMemo, useState } from 'react';
import ProjectCard from '../../components/ui/Project-card';
import { projectsData } from '../../data/projectData';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('fullstack');

    const filteredProjects = useMemo(() => {
        if (!Array.isArray(projectsData)) return [];
        return projectsData.filter((project) => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <section className="relative flex flex-col w-full h-screen">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 flex flex-col items-center mb-6 text-center backdrop-blur-md">
                <p className="text-sm tracking-wider uppercase text-muted-foreground">
                    Featured Projects
                </p>
                <h2 className="text-5xl font-bold text-neutral-400 dark:text-white lg:text-6xl">
                    My Work
                </h2>
                <div className="w-1 h-10 mt-3 bg-[#009E66]"></div>
                {/* Category Buttons */}
                <div className="flex items-center gap-20 mt-4">
                    <button
                        onClick={() => setActiveCategory('frontend')}
                        className={`px-4 py-2 text-md border rounded-lg transition duration-200 ${activeCategory === 'frontend' ? 'bg-[#009E66] text-white border-[#009E66]' : 'text-[#009E66] border-[#009E66] hover:bg-[#009E66] hover:text-white'}`}
                    >
                        Frontend
                    </button>
                    <button
                        onClick={() => setActiveCategory('fullstack')}
                        className={`px-4 py-2 text-md border rounded-lg transition duration-200 ${activeCategory === 'fullstack' ? 'bg-[#009E66] text-white border-[#009E66]' : 'text-[#009E66] border-[#009E66] hover:bg-[#009E66] hover:text-white'}`}
                    >
                        Fullstack
                    </button>
                    <button
                        onClick={() => setActiveCategory('ai')}
                        className={`px-4 py-2 text-md border rounded-lg transition duration-200 ${activeCategory === 'ai' ? 'bg-[#009E66] text-white border-[#009E66]' : 'text-[#009E66] border-[#009E66] hover:bg-[#009E66] hover:text-white'}`}
                    >
                        AI Projects
                    </button>
                </div>
            </div>

            {/* Scrollable Project Cards */}
            <div
                className="flex-col flex-1 overflow-y-auto scroll-smooth snap-y snap-mandatory"
                style={{ scrollbarWidth: 'none' }}
            >
                {filteredProjects.length === 0 ? (
                    <div className="flex items-center justify-center px-4 py-6 snap-start">
                        <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 sm:px-6 py-10 mx-auto border rounded-2xl bg-white dark:bg-[#333333] shadow-lg">
                            <h3 className="text-2xl font-semibold text-neutral-700 dark:text-white text-center">Projects updating soon</h3>
                            <p className="mt-2 text-center text-gray-600 dark:text-gray-300">We're curating this category. Please check back shortly.</p>
                        </div>
                    </div>
                ) : (
                    filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="flex items-center justify-center px-4 py-6 snap-start"
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Projects;
