import React from 'react';
import '../css/ProjectsPage.css';

export default function ProjectsPage() {
    const projects = [ /* ... */];

    return (
        <div className="projects-page section-inner card">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
