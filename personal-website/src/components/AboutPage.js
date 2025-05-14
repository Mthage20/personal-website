import React from 'react';
import '../css/AboutPage.css';

export default function AboutPage() {
    return (
        <div className="about-page section-inner card">
            <h2>About Me</h2>
            <p>
                Hi, I'm Markus, a passionate software engineer with a love for creating unique and engaging user experiences.
                I specialize in front-end development, but I also enjoy working on full-stack projects.
            </p>
            <h3>Skills</h3>
            <ul>
                <li>JavaScript (React, Node.js)</li>
                <li>HTML & CSS (Sass, Tailwind)</li>
                <li>Version Control (Git, GitHub)</li>
            </ul>
        </div>
    );
}